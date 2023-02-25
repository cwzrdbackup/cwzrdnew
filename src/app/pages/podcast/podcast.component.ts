import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import WaveSurfer from 'wavesurfer.js';
import {ApiService} from '../dataservice/apiservice.component';
import {DataService} from '../dataservice/utility.dataservice.component';
// import file from './.././/./../../assets/fake.mp3'
import {AudioService} from '../../services/audio.service';
import {CloudService} from '../../services/cloud.service';
import {StreamState} from '../../interfaces/stream-state';
import * as moment from 'moment';
declare var $: any;

// import spikes from './../../../assets/jsonDataForSpikes.json';
@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
    files: Array<any> = [];
    state: StreamState;
    alertModalMessage: string = '';

    placeholders = [];
    podcastCount: any = 39;
    pageSize = 4;
    pageToLoadNext = 1;
    offset = (this.pageSize * this.pageToLoadNext) - this.pageSize; /*0*/
    firstLoading = true;
    showButton = true;
    testData: any[] = [];
    loading = true;
    px: any = 0;
    lastDigit: any = 0;
    tracks: any;
    tracksAll: any;
    tracksPaginate: any;
    tracksCount: 0;
    surfer = [];
    defaultPeaksJson: any;
    @ViewChild('myCanvas') myCanvas: ElementRef;

    @ViewChild('canvas_2') canvas_2: ElementRef;
    public context: CanvasRenderingContext2D;
    public context_2: CanvasRenderingContext2D;

    constructor(private zone: NgZone, private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private sanitizer: DomSanitizer,
                private audioService: AudioService, cloudService: CloudService,
                private toastrService: NbToastrService,
                private _configuration: Configuration
    ) {

        cloudService.getFiles().subscribe(files => {
            this.files = files;
            // console.log(this.files)
        });
        //  this.openFile(this.files[0],0)
    }

    jsonPeaks(episode: number): any {
      return this._dataservice
            .getPeaksJson<any>(`${this._configuration.GetJsonPeakFromAWSApi}${episode}.json`)
    }

    jsonPeaksFromAssets(episode: number): any {
      let jsonFile = episode === 0 ? 'default': episode;
      return this._dataservice
            .getPeaksJson<any>(`${this._configuration.GetJsonPeakFromAssetsApi}${jsonFile}.json`)
    }

    loadAudioAndWaveForm(i: number, peaks: any) {
        this.loading = false;
        this.state.AllFiles[i].loading = true;
        const wave = this.setWave(i);
        wave.load(this.state.AllFiles[i].stream_url + '?client_id=b23455855ab96a4556cbd0a98397ae8c', peaks);
        this.surfer.push(wave);   
    }

    GenerateWaveForm(startIndex, pageEndIndex)
    {
        this.loadVotes();
        for (let i = this.offset; i < pageEndIndex; i++) { //this.state.AllFiles.length
          this.jsonPeaksFromAssets(this.state.AllFiles[i].id)
          .subscribe(resp => {
            this.loadAudioAndWaveForm(i, resp.data);  
        },
        error => {
            console.log(error);
            this.loadAudioAndWaveForm(i, this.defaultPeaksJson);
        },
        () => {
        });
        }
        this.audioService.AssignWaveSurfer(this.surfer);
    }

    playStream(url) {
        this.audioService.playStream(url)
            .subscribe(events => {
                try {
                    const index = this.state.currentFile.index;

                    const div = (this.state.duration / this.state.waves[index].mediaContainer.childNodes[0].offsetWidth);

                    const current = Math.round(this.state.currentTime);
                    const rev = (this.state.waves[index].mediaContainer.childNodes[0].offsetWidth / this.state.duration) * (this.state.currentTime);
                    const elem: any = document.getElementById('waveform' + index);
                    elem.children[0].children[0].style.width = (rev) + 'px';

                } catch (err) {
                }

                // console.log(div)
                // if((current%div)==0 && current>this.lastDigit)
                // {
                //   this.px+=1;
                //   this.lastDigit=current;
                // }
                // console.log(((Math.round(this.state.currentTime)%div)==0) + " " + this.state.currentTime + " "+div);

                // console.log(this.state.currentTime);
                // console.log(this.state.duration);

                //  let elem = document.getElementById("waveform"+index);
                //  elem.children[0].children[0].style.width=this.state.currentTime+"px";
                //  console.log();
                // this.state.waves[index].mediaContainer.childNodes[0].childNodes[0].style.width=this.state.currentTime;
                // this.state.waves[index].mediaContainer.childNodes[0].childNodes[0].offsetWidth=this.state.currentTime;
                // this.state.waves[index].play(this.state.currentTime);
                //  console.log(this.state.waves[index].mediaContainer.childNodes[0].childNodes[0].offsetWidth)
                // console.log(this.state.readableCurrentTime)
                // listening for fun here
                // this.audioService.pause();

            });

    }

    openFile(file, index) {
        // this.state.currentFile = { index, file };

        this.playStream(file.stream_url);
        this.audioService.changeState({index, file});
        this.audioService.changeIsPlaying(true);
    }

    implement() {
        this.openFile(this.files[1], 1);
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

    stop() {
        this.audioService.stop();
    }

    next() {
        const index = this.state.currentFile.index + 1;
        const file = this.files[index];
        this.openFile(file, index);
    }

    previous() {
        const index = this.state.currentFile.index - 1;
        const file = this.files[index];
        this.openFile(file, index);
    }

    ifPlaying(i) {
        return this.state.currentFile.index === i ? true : false;
    }

    isFirstPlaying() {
        return this.state.currentFile.index === 0;
    }

    isLastPlaying() {
        return this.state.currentFile.index === this.files.length - 1;
    }

    onSliderChangeEnd(change) {
        console.log(change);
        this.audioService.seekTo(change);
    }

    onVolumeChange(change) {
        this.audioService.seekVolume(change);
    }

    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    loadNext() {
        if (this.loading) {
            return;
        }

        this.loading = true;
        this.placeholders = new Array(this.pageSize);
        // this.newsService.load(this.pageToLoadNext, this.pageSize)
        //   .subscribe(news => {
        //     this.placeholders = [];
        //     this.news.push(...news);
        //     this.loading = false;
        //     this.pageToLoadNext++;
        //   });

        this._dataservice
            .getAll<any>(this._configuration.GetPodcastVotesApi)
            .subscribe(resp => {
                    console.log(resp);
                    console.log('response from votes');
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.loading = false;
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });


                    this.loading = false;
                },
                () => {

                });
    }

    formatTime(time: any, format: string = 'MMMM Do YYYY') {
        return moment.utc(time).format(format);
    }

    likePodCast = (cast, i) => {
        // console.log(cast); // alert("Got into it")

        //$(".fireEmoji").addClass("fireHere");
        console.log(i);
        $("#fade"+i).show();        
        //$("#fade"+i).show();

        if (i%2 == 0)
            $("#fade"+i).addClass("fadeEffectLeft");
        else
            $("#fade"+i).addClass("fadeEffectRight");

        
			//count0++;
			// //$("#fireCount"+i).html(count0.toString());
			// var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
			// var leftValue = 20 * plusOrMinus;
			// //console.log(leftValue);
			// $("#fade1").show();
			//   $( "#fade1").animate({
			//     opacity: 0,
			//     top: "-100",
			// 	left: leftValue,
			//   }, 2000, function() {
			// 	$("#fade1").css({
			// 	"top": "0",
			// 	"opacity": ".75",
			// 	"display": "none",
			// 	"left": "0"})
			//   });		

        this._dataservice
            .postCall<any>(this._configuration.LikePodcastApi, JSON.stringify({PodCastId: cast.id}))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.alertModalMessage = resp.message;
                        $('#alertModal').modal('show');
                        return;
                    }

                    const v = this.state.AllFiles.filter(x => x.id == cast.id)[0];
                    v.likes = v.likes ? v.likes + 1 : 1;

                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                },
                () => {
                });
    }

    loadVotes() {
      this._dataservice
                        .getAll<any>(this._configuration.GetPodcastVotesApi)
                        .subscribe(resp => {
                                console.log(resp);
                                console.log('response from votes');
                                if (resp.status === this._configuration.ResponseStatusError) {
                                    this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                                    {
                                        status: this._configuration.ToasterStatusError,
                                        duration: this._configuration.ToasterDuration,
                                        position: this._configuration.ToasterPosition
                                    });
                                    return;
                                }
                                for (let i = 0; i < resp.votes.length; i++) {
                                    const v = this.state.AllFiles.filter(x => x.id == resp.votes[i].podcastId)[0];
                                    console.log(v);
                                    if (v) {
                                        v.likes = resp.votes[i].Votes;
                                    }
                                }
                            },
                            error => {
                                console.log(error);
                                this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                                {
                                    status: this._configuration.ToasterStatusError,
                                    duration: this._configuration.ToasterDuration,
                                    position: this._configuration.ToasterPosition
                                });

                            },
                            () => {
                            });
    }

    ngOnInit() {        

        this.audioService.getState()
            .subscribe(state => {
                this.state = state;
            });

        const apiUrl = this._configuration.SoundCloudApi;

        // apiUrl += '&offset=' + this.offset; // apiUrl += '&limit=' + this.pageSize;
        this._dataservice
            .getAllOutside<any>(apiUrl)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.loading = false;
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }

                    // console.log('Test'); // console.log(resp.track_count);
                    this.tracksCount = resp.track_count;

                    // console.log(resp.tracks);
                    const dummyArr = [];
                    for (let i = 0; i < resp.tracks.length; ++i) { // console.log(resp.tracks[i]);
                        dummyArr[i] = resp.tracks[i];
                    }
                    this.tracks = dummyArr; // this.tracks = Object.assign({}, resp.tracks);

                    //resp.tracks.sort(compareValues('created_at', 'desc')); // console.log(resp.tracks);
                    
                    this.loading = false;
                    // this.testData.push(...resp.podcasts);
                    // this.showButton=resp.podcasts.length>9;
                    // for(var i=0;i<this.testData.length;i++)
                    // {
                    //   this.testData[i].url=this.sanitizer.bypassSecurityTrustResourceUrl(this.testData[i].url);
                    // }

                    this.tracksAll = resp.tracks.reverse();
                    this.tracksPaginate = resp.tracks.slice((this.pageToLoadNext - 1) * this.pageSize, (this.pageToLoadNext) * this.pageSize);

                    this.audioService.changeAllFiles(this.tracksPaginate);
                    // setTimeout(() => {
                    //     for (let i = 0; i < this.pageSize; i++) { //this.state.AllFiles.length

                    //         // this.state.AllFiles[i].audio
                    //         //  console.log(this.state.AllFiles[i].id);
                    //         this.state.AllFiles[i].loading = true;
                    //         const wave = this.setWave(i);

                    //         //wave.load(this.state.AllFiles[i].stream_url+'?client_id=b23455855ab96a4556cbd0a98397ae8c',spikes);
                    //         wave.load(this.state.AllFiles[i].stream_url + '?client_id=b23455855ab96a4556cbd0a98397ae8c');
                          
                    //         //wave.on("ready", () => this.zone.run(() => this.state.AllFiles[i].loading = false));
                    //         //wave.on("play", () => this.zone.run(() => wave.load(this.state.AllFiles[i].stream_url+'?client_id=b23455855ab96a4556cbd0a98397ae8c')));
                    //         //wave.load(this.state.AllFiles[i].stream_url+'?client_id=b23455855ab96a4556cbd0a98397ae8c');
                    //         // var abc = this;
                    //         //  document.getElementById('waveform'+i).addEventListener('click', function(e) {
                    //         //   //console.log('anchor');
                              
                    //         //   abc.configureLoad(e,i);
                              

                    //         // });

                    //         // d.wave = wave;
                    //         this.surfer.push(wave);
                    //     }
                    //     this.audioService.AssignWaveSurfer(this.surfer);
                    // }, 10000);
                    setTimeout(() => {
                      this.GenerateWaveForm(0, this.pageSize);
                  }, 3000);
                  
                    this.loadVotes();
                    
                    this.jsonPeaksFromAssets(0).subscribe(
                      peaks => {
                        this.defaultPeaksJson = peaks.data;
                      },
                      error => {
                        console.log(error);
                      }
                    );
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.loading = false;
                },
                () => {
                });

        // function for dynamic sorting
        function compareValues(key, order = 'asc') {
            return function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }

                const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
    }

    simpleClone(obj: any) {
        return Object.assign({}, obj);
    }
    
    loadMore() {
        // console.log('this.offset ~ ' + this.offset);

        this.pageToLoadNext++; // this.offset = (this.pageToLoadNext - 1) * this.pageSize + 1;
        this.offset = (this.pageSize * this.pageToLoadNext) - this.pageSize;

        // console.log('this.offset ~ ' + this.offset);
        // console.log('this.pageSize ~ ' + this.pageSize);
        // console.log('this.pageToLoadNext ~ ' + this.pageToLoadNext);

        // console.log(this.tracksAll);
        // console.log(this.tracksPaginate);
        const tracksPaginateNext = this.tracksAll.slice((this.pageToLoadNext - 1) * this.pageSize, (this.pageToLoadNext) * this.pageSize);
        // console.log(this.tracksPaginate);

        const merged = [this.tracksPaginate, tracksPaginateNext]; //  console.log(merged);
        const mergedTracks = [].concat.apply([], merged);
        this.tracksPaginate = mergedTracks;
        this.audioService.changeAllFiles(mergedTracks);
        let pageEndIndex = this.offset + this.pageSize;
        this.GenerateWaveForm(this.offset, pageEndIndex);
        
    }

    configureLoad(e, i) {

        const {index} = this.state.currentFile;
        if (i == index) {
            // console.log(e)
            // console.log(index);
            const seconds = e.offsetX / (this.state.waves[index].mediaContainer.childNodes[0].offsetWidth / this.state.duration);
            // console.log("loaded")
            // let change = (this.state.waves[index].mediaContainer.childNodes[0].offsetWidth/this.state.duration)*e.clientX;

            this.audioService.seekTo(seconds);
        }


        // let index = this.state.currentFile.index;
        //     let div = (this.state.duration/this.state.waves[index].mediaContainer.childNodes[0].offsetWidth);

        //     let current = Math.round(this.state.currentTime);
        //     let rev = (this.state.waves[index].mediaContainer.childNodes[0].offsetWidth/this.state.duration)*(this.state.currentTime)
        //     let elem = document.getElementById("waveform"+index);
        //      elem.children[0].children[0].style.width=(rev)+"px";
    }

    /*ngAfterViewInit(): void {}*/

    PlayWaveSurfer(index: number) {
        console.log(this.state.waves[index]);
        this.state.waves[index].playPause();
    }

    playit(index: number) {
        if (this.state.playing){
            this.audioService.pause();
            this.state.playing = false;
            this.state.footerPlaying = false;
        }else{
            this.openFile(this.state.AllFiles[index], index);
            this.audioService.play();
            this.state.playing = true;
        }
         
        // this.testData[index].wave.playPause();
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
      barHeight: 5,
      barGap: 4, 
      backend: 'MediaElement'
      // scrollParent: true,
      //forceDecode: true
      //height: 100
      // mediaType: 'audio',
      // partialRender: true,
      // splitChannels: true
    });
  }

    setDuration(i: number) {

        const duration = this.state.AllFiles[i].duration;

        const h = Math.floor(duration / 3600);
        const m = Math.floor(duration % 3600 / 60);
        const s = Math.floor(duration % 3600 % 60);

        const hDisplay = h > 0 ? h + (h == 1 ? ':' : ':') : '';
        const mDisplay = m > 0 ? m + (m == 1 ? ':' : ':') : '';
        const sDisplay = s > 0 ? s + (s == 1 ? '' : '') : '';

        return hDisplay + mDisplay + sDisplay;

        // console.log(duration);
        // if (duration > 0) {
        //   const minutes = Math.floor(duration / 60);
        //   const seconds = Math.floor(duration % 60);
        //   return minutes + ":" + seconds;
        // } else return "00:00";
    }

    millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
    }
}
