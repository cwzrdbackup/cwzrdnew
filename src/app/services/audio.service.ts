import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as moment from 'moment';
import {StreamState} from '../interfaces/stream-state';
import WaveSurfer from 'wavesurfer.js';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    private stop$ = new Subject();
    private audioObj = new Audio();
    stopPlayer$ = new Subject();
    audioEvents = [
        'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
    ];
    private state: StreamState = {
        playing: false,
        readableCurrentTime: '',
        readableDuration: '',
        duration: undefined,
        currentTime: undefined,
        canplay: false,
        error: false,
        currentFile: undefined,
        AllFiles: [],
        footerPlaying: false,
        volume: 0.5,
        waves: [],
    };

    constructor(private zone: NgZone) {
        this.stateChange = new BehaviorSubject(this.state);
    }

    private streamObservable(url) {
        return new Observable(observer => {
            // Play audio
            this.audioObj.src = url;

            // this.audioObj.load();
            this.audioObj.play();

            const handler = (event: Event) => {
                this.updateStateEvents(event);
                observer.next(event);
            };

            this.addEvents(this.audioObj, this.audioEvents, handler);
            return () => {
                // Stop Playing
                this.audioObj.pause();
                this.audioObj.currentTime = 0;
                // remove event listeners
                this.removeEvents(this.audioObj, this.audioEvents, handler);
                // reset state
                this.resetState();
            };
        });
    }

    setWave(index: number): any {
        return WaveSurfer.create({
            container: `#waveform${index}`,
            waveColor: '#fff',
            progressColor: '#aa76ff',
            cursorColor: '#74ff91',
            cursorWidth: 2,
            hideScrollbar: true,
            barWidth: 1,
            barHeight: 3,
            barGap: 4
        });
    }

    changeIsPlaying(displayFooter) {
        this.state.footerPlaying = displayFooter;
        this.stateChange.next(this.state);
    }

    changeAllFiles(files) {
        this.state.AllFiles = files;
        this.stateChange.next(this.state);
    }

    AssignWaveSurfer(waves) {
        this.state.waves = waves;
    }

    changeState(service) {

        if (this.state.currentFile !== undefined) {
            const {index, file} = service;
            this.state.currentFile.index = index;
            this.state.currentFile.file = file;
        } else {
            this.state.currentFile = service;
            console.log('into else');
        }

        // this.stateChange.next(this.state);

    }

    private addEvents(obj, events, handler) {
        events.forEach(event => {
            obj.addEventListener(event, handler);
        });
    }

    private removeEvents(obj, events, handler) {
        events.forEach(event => {
            obj.removeEventListener(event, handler);
        });
    }

    playStream(url) {
        return this.streamObservable(url + '?client_id=b23455855ab96a4556cbd0a98397ae8c').pipe(takeUntil(this.stop$));
    }

    play() {
        this.audioObj.play();
    }

    pause() {
        this.audioObj.pause();
    }

    stop() {
        this.stop$.next();
    }

    removePlayer() {
        this.state.footerPlaying = false;
    }

    seekTo(seconds) {
        this.audioObj.currentTime = seconds;
    }

    seekVolume(vol) {
        this.audioObj.volume = vol;
        this.state.volume = vol;
    }

    formatTime(time: number, format: string = 'HH:mm:ss') {
        const momentTime = time * 1000;
        return moment.utc(momentTime).format(format);
    }

    // private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);
    private stateChange: BehaviorSubject<StreamState>; // = new BehaviorSubject(this.state);

    private updateStateEvents(event: Event): void {
        switch (event.type) {
            case 'canplay':
                this.state.duration = this.audioObj.duration;
                this.state.readableDuration = this.formatTime(this.state.duration);
                this.state.canplay = true;
                break;
            case 'playing':
                this.state.playing = true;
                break;
            case 'pause':
                this.state.playing = false;
                break;
            case 'timeupdate':
                this.state.currentTime = this.audioObj.currentTime;
                this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
                break;
            case 'error':
                this.resetState();
                this.state.error = true;
                break;
        }
        this.stateChange.next(this.state);
    }

    private resetState() {
        this.state = {
            playing: false,
            readableCurrentTime: '',
            readableDuration: '',
            duration: undefined,
            currentTime: undefined,
            canplay: false,
            error: false,
            currentFile: undefined,
            AllFiles: this.state.AllFiles,
            footerPlaying: true,
            volume: 0.5,
            waves: this.state.waves
        };
    }

    getState(): Observable<StreamState> {
        return this.stateChange.asObservable();
    }
}
