import { NbToastrService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import {ApiService} from './../dataservice/apiservice.component';
import {DataService} from './../dataservice/utility.dataservice.component';

import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice: DataService,
    private sanitizer: DomSanitizer,
    private toastrService: NbToastrService,
    private _configuration: Configuration) { }
loading: boolean;
showButton = true;
loadingNextCounter: any = 1;
articles: any[] = [];

today: number = Date.now();

  ngOnInit() {
    this.loadMore();
  }
  loadMore = () => {
    this.loading = true;
    this._dataservice
      .postCall<any>(this._configuration.GetShopifyArticlesApi, JSON.stringify({pageNo: this.loadingNextCounter,
        since_id: null
      }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError)
        {
          this.loading = false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
        this.articles.push(...resp.articles);
        if (this.loadingNextCounter === 1)
        {

        }
        this.showButton = resp.articles.length > 9;
        this.loadingNextCounter++;
        this.loading = false;
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
