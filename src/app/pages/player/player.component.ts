import {Component, OnInit, OnDestroy} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {AudioService} from '../../services/audio.service';
import {CloudService} from '../../services/cloud.service';
import {StreamState} from '../../interfaces/stream-state';
import * as moment from 'moment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy  {
    files: Array<any> = [];
    state: StreamState;
    private ngUnsubscribe = new Subject();

    constructor(private audioService: AudioService, cloudService: CloudService) {
        // get media files
        cloudService.getFiles().subscribe(files => {
            this.files = files;
        });
    }

    playStream(url) {
        this.audioService.playStream(url)
            .subscribe(events => {
                // listening for fun here
                // this.audioService.pause();
            });
    }

    formatTime(time: any, format: string = 'MMMM Do YYYY, h:mm:ss a') {
        return moment.utc(time).format(format);
    }

    openFile(file, index) {
        // this.state.currentFile = { index, file };

        this.audioService.stop();
        this.playStream(file.stream_url);
        this.audioService.changeState({index, file});
    }

    pause() {
        this.audioService.pause();
    }

    toggle() {
        if (this.state.playing) {
            this.audioService.pause();
        } else {
            this.audioService.play();
        }
    }

    play() {
        this.audioService.play();
    }

    stopIfPlaying() {
        if (this.state.playing) {
            this.audioService.pause();
        }
    }

    stop() {
        this.audioService.stop();
        this.state.readableCurrentTime = '';
        this.state.readableDuration = '';
        this.state.duration = undefined;
        this.state.currentTime = undefined;
        this.state.canplay = false;
        this.state.error = false;
        this.state.playing = false;
        this.state.currentFile = undefined;
        this.state.AllFiles = this.state.AllFiles;
        this.state.footerPlaying = false;
    }

    next() {
        const index = this.state.currentFile.index + 1;
        const file = this.state.AllFiles[index];
        this.openFile(file, index);
    }

    previous() {
        const index = this.state.currentFile.index - 1;
        const file = this.state.AllFiles[index];
        this.openFile(file, index);
    }

    isFirstPlaying() {
        return this.state.currentFile && this.state.currentFile.index === 0;
    }

    isLastPlaying() {
        return this.state.currentFile && this.state.currentFile.index === this.state.AllFiles && this.state.AllFiles.length - 1;
    }

    removePlayer() {
        this.state.footerPlaying = false;
        this.audioService.removePlayer();
    }

    onSliderChangeEnd(change) {
        console.log(change);
        this.audioService.seekTo(change);
    }

    onVolumeChange(change) {
        this.audioService.seekVolume(change);
    }

    ngOnInit() {
        // listen to stream state
        this.audioService.getState()
            .subscribe(state => {
                this.state = state;
            });
        
        this.audioService.stopPlayer$.pipe(takeUntil(this.ngUnsubscribe))
            .subscribe( () => {
                this.stop();
                this.removePlayer();
            })
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
}
