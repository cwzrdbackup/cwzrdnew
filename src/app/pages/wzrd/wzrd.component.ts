import { NbToastrService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {ApiService} from '../dataservice/apiservice.component';
import {DataService} from '../dataservice/utility.dataservice.component';

@Component({
    selector: 'app-wzrd',
    templateUrl: './wzrd.component.html',
    styleUrls: ['./wzrd.component.scss']
})
export class WzrdComponent implements OnInit {
    showButton = true;
    testData: any[] = [];
    pageSize = 10;
    pageToLoadNext = 1;
    loading = true;
    public vimeoURL: string;
    videoData: any;

    constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private sanitizer: DomSanitizer,
                private toastrService: NbToastrService,
                private _configuration: Configuration) {
    }

    ngOnInit() {
        this._dataservice.getVimeoVideos().subscribe(res => {
            // console.log(res);
            this.videoData = res;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });

        /*this._dataservice
            .getAll<any>('wzdrEpisode/getList')
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.loading = false;
                        alert('There was a problem fetching the content');
                        return;
                    }
                    this.testData.push(...resp.episodes.reverse());
                    this.showButton = resp.episodes.length > 9;
                    // for(var i=0;i<this.testData.length;i++)
                    // {
                    //   this.testData[i].videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.testData[i].url);
                    // }
                    this.loading = false;
                    this.pageToLoadNext++;
                },
                error => {
                    console.log(error);
                    alert('An error occured while fetching the result.');
                    this.loading = false;
                },
                () => {});*/
    }

    removeSubstringFromString() {

    }

    // ,JSON.stringify({pageNo:this.pageToLoadNext})
    loadNext() {
        this._dataservice
            .getAll<any>(this._configuration.GetEpisodesList)
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
                    this.testData.push(...resp.episodes);
                    console.log(this.testData);
                    this.showButton = resp.episodes.length > 9;
                    // for(var i=0;i<this.testData.length;i++)
                    // {
                    //   this.testData[i].videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.testData[i].url);
                    // }

                    this.loading = false;
                    this.pageToLoadNext++;
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
}
