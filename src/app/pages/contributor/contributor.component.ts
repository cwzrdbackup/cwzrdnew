import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

import {ApiService} from '../dataservice/apiservice.component';
import {DataService} from  '../dataservice/utility.dataservice.component';
@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class CourseComponent implements OnInit {
  loading:boolean;
  chapter=[];
  percentage;
  showButton=false;
  pageToLoadNext=1;
  courseStatus:any;

  contributors:any[] = [
    {name: 'Billy The WZRD', img:'https://d308fakbqebk7c.cloudfront.net/forex-card.png'},
    {name: 'Martin The WZRD', img:'https://d308fakbqebk7c.cloudfront.net/forex-card.png'},
  ]

  constructor(private _dataservice : ApiService,private _router : Router,private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice : DataService,
    private sanitizer: DomSanitizer,
    private toastrService: NbToastrService,
    private _configuration: Configuration) { }

  ngOnInit() {
    this.loadNext();
  }
  loadNext=()=>{
    this.loading=true;
    this._dataservice
      .postCall<any>(this._configuration.GetChaptersList, JSON.stringify({pageNo:this.pageToLoadNext}))
      .subscribe(resp => {
        if(resp.status===this._configuration.ResponseStatusError)
        {
          
          this.loading=false;
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
          this.chapter.push(...resp.chapters);
          this.showButton=resp.chapters.length>9;
          this.percentage=resp.courseAverage;
          this.courseStatus = resp.courseStatus;
          // for(var i=0;i<this.testData.length;i++)
          // {
          //   this.testData[i].videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.testData[i].url);
          // }
         
          this.loading=false; 
          this.pageToLoadNext++;
      },
       error => {
         this.toastrService.show(this._configuration.ErrorFetchingResult, '',
         {
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
         });
         this.loading=false;
       },
       () => {
        
     });
  }

}
