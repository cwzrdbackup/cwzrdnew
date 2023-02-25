import { NbToastrService, NbDialogService } from '@nebular/theme';
import { Configuration } from './../../dataservice/app.constant.component';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

import {ApiService} from '../../dataservice/apiservice.component';
import {DataService} from '../../dataservice/utility.dataservice.component';

declare var $: any;
@Component({
    selector: 'app-wzrd-video',
    templateUrl: './wzrd-video.component.html',
    styleUrls: ['./wzrd-video.component.scss']
})
export class WzrdVideoComponent implements OnInit {
    showButton = false;
    episodeComments: any[] = [];
    episode: any;
    replyId: any;
    pageSize = 10;
    videoUrl: any;
    videoTitle: any;
    pageToLoadNext = 1;
    loading: boolean = false;
    orderBy: string = 'default';
    name: string;
    profileImg: string;
    comment: string;
    commentLoading: boolean = false;
    buttonLoading: boolean = false;
    selectedItemFormControl = new FormControl();
    alertModalMessage: string = '';
    testComments = [
        {name: 'Apollo', msg: ' Sonet graece aeterno id sed, cu quo sumo dictas, solum consequat eu qui.'},
        {
            name: 'Frankie',
            msg: ' Suas fastidii id ius, ei rationibus consetetur vix, tollit doming perfecto eu has. Sonet graece aeterno id sed, cu quo sumo dictas, solum consequat eu qui. Per epicuri iudicabit cu. Prima ludus verterem per ut, duo eu nostro vocibus.'
        },
        {
            name: 'Otis',
            msg: 'Te quando ignota volutpat sea, deserunt euripidis mel et, vis ei saperet comprehensam. Inani detracto appetere ea usu.'
        },
    ];

    commentForm = new FormGroup({
        'comment': new FormControl('', [Validators.required])
    });
    replyForm: FormGroup;
    selectedItem: any;
    episodeId;
    episodeUrl;
    episodeLikeCount: any;
    episodeIdNext: null;
    videoData: any;
    avtarImg: string;

    constructor(private toast: NbToastrService, private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private sanitizer: DomSanitizer,
                private _configuration: Configuration) {
    }

    ngOnInit() {
        this.avtarImg = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
        this.episodeId = this.route.snapshot.paramMap.get('video');
        this.episodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.episodeId + '?title=0&byline=0&portrait=0');
        this.selectedItem = 'default';
        this.name = JSON.parse(localStorage.getItem(this._configuration.UserKey)).name;
        this.profileImg = localStorage.getItem(this._configuration.ProfileImgKey);
        // console.log(this.name);
        // console.log(this.profileImg);
        this.getVimeoVideoDetails();
        this.wzrdEpisodeLikeCount(this.episodeId);
        this.getVimeoVideo();
        this.loadNext();
    }

    getVimeoVideoDetails() {
        // console.log("getVimeoVideoDetails")
        this._dataservice.getVimeoVideoDetails(this.episodeId).subscribe(res => {
            this.episode = res;
            this.loading = false;
            // console.log(this.episode);
        }, error => {
            // console.log(error);
            this.loading = false;
            this.toast.show(this._configuration.ErrorFetchingVimeoResult, '',
            {
                status: this._configuration.ToasterStatusError,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
            });
        });
    }

    getVimeoVideo() {
        // console.log("getVimeoVideo")
        this._dataservice.getVimeoVideos().subscribe(res => {
            // console.log(res);
            this.videoData = res;
            /*const currentEpisode = this.videoData.data.find(item => {
                console.log(item.uri.split('/videos/')[1]);
                return item.uri.split('/videos/')[1] === this.episodeId;
            });*/
            let nextRowIndex = null;
            for (let i = 0; i < this.videoData.data.length; i++) { // console.log(this.videoData.data[i].uri.split('/videos/')[1]);
                if (this.videoData.data[i].uri.split('/videos/')[1] === this.episodeId) {
                    nextRowIndex = i + 1;
                    break;
                }
            }
            this.episodeIdNext = this.videoData.data[nextRowIndex].uri.split('/videos/')[1]; // console.log(episodeIdNext);
            this.loading = false;
        });
    }

    loadNextEpisode() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/WZRD-wednesdays/' + this.episodeIdNext]).then();
    }

    wzrdEpisodeLikeCount(episodeId) {
        this._dataservice
            .postCall<any>(this._configuration.GetEpisodeLikesCount, JSON.stringify({episodeId: episodeId}))
            .subscribe(resp => {
                    console.log(resp);
                    console.log('response from likes');
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    } else {
                        this.episodeLikeCount = resp.count;
                    }
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                },
                () => {
                });
    }

    episodeLike(episodeId) {
        this._dataservice
            .postCall<any>(this._configuration.GetEpisodeLikes, JSON.stringify({episodeId: episodeId}))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.alertModalMessage = 'You have already liked this video.';
                        $('#alertModal').modal('show');
                        return;
                    } else {
                        console.log(resp);
                        this.episodeLikeCount++;
                    }
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                },
                () => {
                });
    }

    changeOrderBy(event) {
        if (this.orderBy != event) {
            this.orderBy = event;
            this.pageToLoadNext = 1;
            this.loadNext();
        }
    }

    likeIt = (comment) => {
        // alert(JSON.stringify(comment));
        this.toast.show(JSON.stringify(comment), '',
        {
            status: this._configuration.ToasterStatusSuccess,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
    };
    addComment = () => {
        if (this.commentForm.controls['comment'].value) {
            this.commentLoading = true;

            this._dataservice
                .postCall<any>(this._configuration.AddNewEpisodeCommentApi, JSON.stringify({
                    episodeId: this.episodeId,
                    comment: this.commentForm.controls['comment'].value
                }))
                .subscribe(resp => {
                        if (resp.status === this._configuration.ResponseStatusError) {
                            this.commentLoading = false;
                            this.toast.show(this._configuration.ErrorFetchingContent, '',
                            {
                                status: this._configuration.ToasterStatusError,
                                duration: this._configuration.ToasterDuration,
                                position: this._configuration.ToasterPosition
                            });    
                            return;
                        }
                        resp.episodeComment['user'] = this.name;
                        resp.episodeComment['profileImg'] = this.profileImg;
                        resp.episodeComment['replies'] = [];
                        resp.episodeComment['replyForm'] = new FormGroup({
                            'reply': new FormControl('', [Validators.required])
                        });

                        this.episodeComments.unshift(resp.episodeComment);

                        this.commentForm.setValue({
                            comment: ''
                        });
                        this.commentLoading = false;
                        if (resp.achievement) {
                            this.toast.info(resp.achievement, 'Achievement');
                        }
                    },
                    error => {
                        console.log(error);
                        this.toast.show(this._configuration.ErrorFetchingResult, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        this.commentLoading = false;
                    },
                    () => {
                    });
        }
    };
    likeComment = (comment) => {
        this.commentLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.LikeEpisodeCommentApi, JSON.stringify({commentId: comment.id}))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.commentLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    comment.totalLikes = comment.totalLikes + 1;
                    this.commentLoading = false;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.commentLoading = false;
                },
                () => {
                });
    };

    dislikeComment = (comment) => {
        this.commentLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.DislikeEpisodeCommentApi, JSON.stringify({commentId: comment.id}))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.commentLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    comment.totalDislikes = comment.totalDislikes + 1;
                    this.commentLoading = false;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.commentLoading = false;
                },
                () => {
                });
    };

    loadNext = () => {
        this.loading = true;
        this._dataservice
            .postCall<any>(this._configuration.GetEpisodeCommentById, JSON.stringify({
                episodeId: this.episodeId,
                orderBy: this.orderBy,
                'pageNo': this.pageToLoadNext
            }))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.loading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    console.log(resp);
                    this.episodeComments = resp.episodeComments;//.push(...resp.episodeComments);
                    for (var i = 0; i < this.episodeComments.length; i++) {
                        this.episodeComments[i].replyForm = new FormGroup({
                            'reply': new FormControl('', [Validators.required])
                        });
                    }
                    this.episode = resp.episode;
                    // alert(this.episode.videoUrl)
                    /*this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.episode.videoUrl);*/
                    this.showButton = resp.episodeComments.length > 9;
                    this.loading = false;
                    this.pageToLoadNext++;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.loading = false;
                },
                () => {

                });
    };
    loadmoreNextBtn = () => {
        this.buttonLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.GetEpisodeCommentById, JSON.stringify({
                episodeId: this.episodeId,
                orderBy: this.orderBy,
                'pageNo': this.pageToLoadNext
            }))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.buttonLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    this.episodeComments.push(...resp.episodeComments);

                    this.showButton = resp.episodeComments.length > 9;
                    this.buttonLoading = false;
                    this.pageToLoadNext++;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.buttonLoading = false;
                },
                () => {
                });
    };
    changeOrder = () => {
        this.toast.show(this._configuration.OrderedChange, '',
        {
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
    };
    reply = (comment) => {
        this.replyId = comment.id;
    };
    addReply = (comment) => {


        if (!comment.replyForm.controls['reply'].value) {
            return;
        }

        this.commentLoading = true;

        this._dataservice
            .postCall<any>(this._configuration.AddNewCommentReplyApi, JSON.stringify({
                id: comment.id,
                reply: comment.replyForm.controls['reply'].value
            }))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.commentLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    resp.name = this.name;
                    resp.profileImg = this.profileImg;
                    resp.likes = 0;
                    resp.reply = comment.replyForm.controls['reply'].value;
                    comment.replies.unshift(resp);
                    comment.replyForm.setValue({
                        reply: ''
                    });

                    this.commentLoading = false;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.commentLoading = false;
                },
                () => {

                });

    };

    likeReply = (comment, reply) => {
        this.commentLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.LikeReplyByIdApi, JSON.stringify({commentId: comment.id, id: reply.id}))
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.commentLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    reply.likes = reply.likes + 1;
                    this.commentLoading = false;
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.commentLoading = false;
                },
                () => {
                });

    };

}
