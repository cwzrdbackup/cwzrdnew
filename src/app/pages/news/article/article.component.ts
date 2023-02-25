import { Configuration } from './../../dataservice/app.constant.component';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import {ApiService} from './../../dataservice/apiservice.component';
import {DataService} from  './../../dataservice/utility.dataservice.component';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
declare var $: any;

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  alertModalMessage: string = '';
  loading: boolean = true;
  loadingAnArticle: boolean = true;
  loadingLatestNews: boolean = true;
  commentsLoading: boolean;
  cload: boolean;
  comments: any[] = [];
  showButton = true;
  articleId: any;
  loadingNextCounter: any = 1;
  article: any;
  name: any;
  profileImg: any;
  episodeComments: any[] = [];
  totalComments: number = 0;
  episode: any;
  replyId: any;
  pageSize = 10;
  videoUrl: any;
  pageToLoadNext = 1;
  data: { [index: string] : any } = {};
  orderBy: string = 'default';
  comment: string;
  commentLoading: boolean = false;
  buttonLoading: boolean = false;
  selectedItemFormControl = new FormControl();
  submitted = false;
  error = '';
  shareButtonsDisplay: any[] = [
    { 'image': 'face', 'shareName': 'facebook' },
    { 'image': 'twitter', 'shareName': 'twitter' },
    { 'image': 'plane', 'shareName': 'telegram' },
    { 'image': 'mail', 'shareName': 'email' },
  ];

  commentForm = new FormGroup({
    'comment': new FormControl('', [Validators.required])

  });

  replyForm: FormGroup;
  selectedItem : any;
  avtarImg : string;
  articles: any[] = [];
  filteredArticles: any[] = [];
  testComments = [
    {name: 'Apollo', msg: ' Sonet graece aeterno id sed, cu quo sumo dictas, solum consequat eu qui.'},
    {name: 'Frankie', msg: ' Suas fastidii id ius, ei rationibus consetetur vix, tollit doming perfecto eu has. Sonet graece aeterno id sed, cu quo sumo dictas, solum consequat eu qui. Per epicuri iudicabit cu. Prima ludus verterem per ut, duo eu nostro vocibus.'},
    {name: 'Otis', msg: 'Te quando ignota volutpat sea, deserunt euripidis mel et, vis ei saperet comprehensam. Inani detracto appetere ea usu.'},
  ]

  constructor(private _dataservice : ApiService, private _router : Router, private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice : DataService,
    private sanitizer: DomSanitizer,
    private toastrService: NbToastrService,
    private _configuration: Configuration) { }

  ngOnInit() {
  this.avtarImg = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
  this.articleId = this.route.snapshot.paramMap.get('id');
  this.loadMore();
  this.name = JSON.parse(localStorage.getItem(this._configuration.UserKey)).name;
  this.profileImg = localStorage.getItem(this._configuration.ProfileImgKey);
  this.getAnArticle(this.articleId);

  }

  getAnArticle(newsId?: any) {
    this.loading = true;
    this.loadingAnArticle = true;
    this._dataservice
    .postCall<any>(this._configuration.GetSingleShopifyArticleApi, JSON.stringify({article_id: newsId
    }))
    .subscribe(resp => {
      if (resp.status === this._configuration.ResponseStatusError) {
        this.loading = false;
        this.loadingAnArticle = false;
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
        return;
      }
      this.article = resp.article;
      this.loading = false;
      this.loadingAnArticle = false;
    },
     error => {
       console.log(error);
       this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
       this.loading = false;
     },
     () => {

   });
   this.loadNext();
  }

  updateNewsContent(newsId: any) {
    this.articleId = newsId;
    this.pageToLoadNext = 1;
    this.getAnArticle(this.articleId);
    this.filteredArticles = this.articles.filter(a => a.id !== +this.articleId);
  }

  loadMore = () => {
    this.loading = true;
    this.loadingLatestNews = true;
    this._dataservice
      .postCall<any>(this._configuration.GetShopifyArticlesApi, JSON.stringify({pageNo: this.loadingNextCounter,
        since_id: null
      }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.loading = false;
          this.loadingLatestNews = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
        resp.articles.sort((val1, val2) => {
          return new Date (val2.created_at).getTime() - new Date(val1.created_at).getTime()
        })
        this.articles.push(...resp.articles);
        this.filteredArticles = this.articles.filter(a => a.id !== +this.articleId);
        if (this.loadingNextCounter === 1) {

        }
        this.showButton = resp.articles.length > 9;
        this.loadingNextCounter++;
        this.loading = false;
        this.loadingLatestNews = false;

      },
       error => {
         console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
         this.loading = false;
         this.loadingLatestNews = false;

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

  addComment = () => {
    if (this.commentForm.controls['comment'].value) {
      this.commentLoading = true;

      this._dataservice
      .postCall<any>(this._configuration.AddNewEpisodeCommentApi, JSON.stringify({episodeId: this.articleId,
      comment: this.commentForm.controls['comment'].value}))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.commentLoading = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
        resp.episodeComment['user'] = this.name;
        resp.episodeComment['profileImg'] = this.profileImg;
        resp.episodeComment['replies'] = [];
        resp.episodeComment['replyForm'] = new FormGroup({
          'reply': new FormControl('', [Validators.required])

        });


        this.episodeComments.unshift(resp.episodeComment);
        this.totalComments += 1;

        this.commentForm.setValue({
          comment: ''
        });
        this.commentLoading = false;
      },
       error => {
         console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
         this.commentLoading = false;
       },
       () => {

     });

    }
  }

  likeComment = (comment) => {
    this.commentLoading = true;
    this._dataservice
      .postCall<any>(this._configuration.LikeEpisodeCommentApi, JSON.stringify({ commentId: comment.id }))
      .subscribe(resp => {

        if (resp.status === this._configuration.ResponseStatusError) {
          this.commentLoading = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
        if (resp.message == 'You have already liked') {
          this.alertModalMessage = resp.message;
          $('#alertModal').modal('show');
        } else {
          if (isNaN(comment.totalLikes)) {
            comment.totalLikes = 1;
          } else {
            comment.totalLikes = comment.totalLikes + 1;
          }
        }
        this.commentLoading = false;
      },
        error => {
          console.log(error);
          this.toastrService.show(this._configuration.ErrorFetchingResult, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          this.commentLoading = false;
        },
        () => { });
  }

  dislikeComment = (comment) => {
    this.commentLoading = true;
    this._dataservice
    .postCall<any>(this._configuration.DislikeEpisodeCommentApi, JSON.stringify({commentId: comment.id}))
    .subscribe(resp => {
      if (resp.status === this._configuration.ResponseStatusError) {
        this.commentLoading = false;
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});

        return;
      }
      comment.totalDislikes = comment.totalDislikes + 1;
      this.commentLoading = false;
    },
     error => {
       console.log(error);
      this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
       this.commentLoading = false;
     },
     () => {});

}

  loadNext = () => {
    this.loading = true;
    this._dataservice
      .postCall<any>(this._configuration.GetEpisodeCommentsListApi, JSON.stringify({articleId: this.articleId,
      orderBy: this.orderBy,
      'pageNo': this.pageToLoadNext}))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.loading = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
          this.episodeComments = resp.episodeComments; //.push(...resp.episodeComments);
          this.totalComments = resp.episodeComments.length;
          for (var i = 0; i < this.episodeComments.length; i++) {

            this.episodeComments[i].replyForm = new FormGroup({
              'reply': new FormControl('', [Validators.required])

            });
            this.totalComments += this.episodeComments[i].replies ? this.episodeComments[i].replies.length : 0;
          }
          this.episode = resp.episode;

          this.showButton = resp.episodeComments.length > 9;
          this.loading = false;
          this.pageToLoadNext++;
      },
       error => {
         console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingResult, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
         this.loading = false;
       },
       () => {

     });
  }
  loadmoreNextBtn = () => {
      this.buttonLoading = true;
      this._dataservice
      .postCall<any>(this._configuration.GetEpisodeCommentsListApi, JSON.stringify({articleId: this.articleId,
      orderBy: this.orderBy,
      'pageNo': this.pageToLoadNext}))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.buttonLoading = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
          this.episodeComments.push(...resp.episodeComments);

          this.showButton = resp.episodeComments.length > 9;
          this.buttonLoading = false;
          this.pageToLoadNext++;
      },
       error => {
         console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingResult, '',
           { status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
         this.buttonLoading = false;
       },
       () => {});
  }

  mailChimp = () => {
    // console.log("this.data.email: ", this.data.email)
    if (!this.data.email) {
      this.alertModalMessage = 'Please enter email address';
      $('#alertModal').modal('show');
      return;
    }

    this._dataservice
      .postCall<any>(this._configuration.SubscribeUserEmailApi, JSON.stringify({
        email: this.data.email
      }))
      .subscribe(resp => {
        // console.log("MAILCHIMP SUCCESS :", resp)
        if (resp.status === this._configuration.ResponseStatusError) {
          this.toastrService.show(resp.message, '',
           { status: this._configuration.ToasterStatusWarning,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
          return;
        }
        this.toastrService.show(this.data.email + ' : ' + resp.message, '',
           { status: this._configuration.ToasterStatusSuccess,
            duration: this._configuration.ToasterDuration ,
            position: this._configuration.ToasterPosition});
        this.loading = false;
        // // this.data.email = "";
      },
        error => {
          this.toastrService.show(this._configuration.SomethingWrong, '',
          { status: this._configuration.ToasterStatusError,
           duration: this._configuration.ToasterDuration ,
           position: this._configuration.ToasterPosition});

          this.loading = false;
        },
        () => {
        });
  }

  changeOrder = () => {
    this.toastrService.show(this._configuration.OrderedChange, '',
    { status: this._configuration.ToasterStatusInfo,
     duration: this._configuration.ToasterDuration ,
     position: this._configuration.ToasterPosition});

  }
  reply = (comment) => {
    this.replyId = comment.id;
  }
  addReply = (comment) => {


    if (!comment.replyForm.controls['reply'].value)
      return;

    this.commentLoading = true;

    this._dataservice
    .postCall<any>(this._configuration.AddNewCommentReplyApi, JSON.stringify({id: comment.id,
    reply: comment.replyForm.controls['reply'].value}))
    .subscribe(resp => {
      if (resp.status === this._configuration.ResponseStatusError) {
        this.commentLoading = false;
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
        { status: this._configuration.ToasterStatusError,
         duration: this._configuration.ToasterDuration ,
         position: this._configuration.ToasterPosition});
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
      this.totalComments += 1;
    },
     error => {
       console.log(error);
      this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        { status: this._configuration.ToasterStatusError,
         duration: this._configuration.ToasterDuration ,
         position: this._configuration.ToasterPosition});

       this.commentLoading = false;
     },
     () => {

   });

  }

  likeReply = (comment, reply) => {
    this.commentLoading = true;
    this._dataservice
    .postCall<any>(this._configuration.LikeReplyByIdApi, JSON.stringify({commentId: comment.id, id: reply.id}))
    .subscribe(resp => {
      if (resp.status === this._configuration.ResponseStatusError) {
        this.commentLoading = false;
        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
        { status: this._configuration.ToasterStatusError,
         duration: this._configuration.ToasterDuration ,
         position: this._configuration.ToasterPosition});

        return;
      }
      reply.likes = reply.likes + 1;
      this.commentLoading = false;
    },
     error => {
       console.log(error);
      this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        { status: this._configuration.ToasterStatusError,
         duration: this._configuration.ToasterDuration ,
         position: this._configuration.ToasterPosition});

       this.commentLoading = false;
     },
     () => {});

}

}
