import { Configuration } from './../../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Router,ActivatedRoute } from '@angular/router';

import {ApiService} from '../../dataservice/apiservice.component';
import {DataService} from  '../../dataservice/utility.dataservice.component';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class resumeComponent implements OnInit {
  chapter:string;

  cloudfrontURL: string = "https://d308fakbqebk7c.cloudfront.net/course/heroes/"
  
  dataArry =[ 
    { id:100001,title1: "Chapter one", title2: "ACQUIRING THE ENCHANTED KNOWLEDGE", title3: "24 LESSONS | ANIMATED FORMAT | 1 H 48 M 21 S | 2020", title4: "Even the greatest of WZRDs once started from the ground up, but that doesn’t mean it needs to be a tough process. Take a dive into the first chapter of the WZRD Course and fast track your education with the hidden knowledge that will take your understanding of cryptocurrencies and blockchain technology to the next tier.", number: "One", hero: this.cloudfrontURL + "1.jpg"},

   { id:100002,title1: "Chapter two", title2: "It's All In Your Head, Wizard", title3: "10 lessons | One to one format | 1 H 36 M | 2020", title4: "Now that you’ve acquired the enchanted knowledge, it’s understandable that you may have a few questions in mind. Chapter 2 takes all of the confusion away by breaking down the most common traps, questions and mistakes an aspiring WZRD has into 10 powerful thought-provoking lessons. Fail to prepare, prepare to fail.", number: "Two", hero: this.cloudfrontURL + "2.jpg"},
 
   { id:100003,title1: "Chapter three", title2: "TECHNICAL WIZARDRY", title3: "27 LESSONS | TECHNICAL ANALYSIS | 9 H 30 M 30 S | 2020", title4: "Wave goodbye to Technical Analysis and give a warm welcome to Technical Wizardry. This chapter is the largest of them all, packing 27 videos of never-before-seen strategies, hacks and secrets to give you the edge that only the institutional investors have been able to gain. Get ready for an elite state of mind.", number: "Three", hero: this.cloudfrontURL + "3.jpg"},
 
   {id:100004, title1: "Chapter four", title2: "The Reversal Spell", title3: "10 lessons | One to one format | 1 H 36 M | 2020", title4: "Everything you’ve learnt so far has been the foundation for what this chapter will entail. Prepare to be left mind-blown as we go another layer deeper into the carefully-guarded secrets of Technical Wizardry, where everything you once knew is flipped inside out and put to the test in real-life scenarios. There’s no turning back once you discover these magical methods...", number: "Four", hero: this.cloudfrontURL + "4.jpg"},
 
   {id:100005, title1: "Chapter five", title2: "The WZRD Setup", title3: "11 lessons | Tutorials | 4 H 13 M 28 S | 2020", title4: "You’ve now acquired every skill needed to become a profit-generating WZRD, but where do you put all of this knowledge into practise? Throughout this chapter you will be guided through all of the most crucial platforms standing between you and freedom. In a space of 11 videos, you’ll be up and running across all major platforms, enabling you to execute your first trade or investment in with confidence and ease.", number: "Five", hero: this.cloudfrontURL + "5.jpg"},
 
   { id:100006, title1: "Chapter six", title2: "Becoming the bank", title3: "3 lessons | Tutorials | 32 M 5 S | 2020", title4: "Have you ever wondered what it would be like to become your own bank? In this chapter you’ll be learning how to do exactly that thanks to the revolution of blockchain technology. Take matters into your own hands as you’re guided through the process of handling your profits, becoming your own beneficiary and indulging those profits into the real-world, directly from the comfort of your mobile phone.", number: "Six", hero: this.cloudfrontURL + "6.jpg"},
   ]

  loading:boolean;
  percent:any;
  chapters=[];
  chapterLessons=[];
  title:string;
  showButton=false;
  pageToLoadNext=1;
	currChapterInfo:any;
  constructor(private _dataservice : ApiService,private _router : Router,private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice : DataService,
    private sanitizer: DomSanitizer,
    private toastrService: NbToastrService,
    private _configuration: Configuration) { }

  ngOnInit() {
    this.chapter=this.route.snapshot.paramMap.get("chapter");
	this.currChapterInfo=this.dataArry.filter(x=>x.id==parseInt(this.chapter))[0];   

	 this.loadData();
    this.loading=true;
    this._dataservice
      .postCall<any>(this._configuration.GetChaptersList, JSON.stringify({pageNo: this.pageToLoadNext}))
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
          console.log(resp);
          this.chapters.push(...resp.chapters);
          
          this.showButton=resp.chapters.length>99;
          this.loading=false; 
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
         this.loading=false;
       },
       () => {
        
     });
  }
  addVal=(val)=>
  {
  return parseInt(val)+1;
  }
  fetchData=(item)=>{
    // alert(id);
    this._router.navigate(['course/chapter',item.id]);
    this.chapter=item.id;
    this.pageToLoadNext=1;
    this.loadData();
    
  }

  loadData=()=>{
    this.loading=true;
    this._dataservice
      .postCall<any>(this._configuration.GetChapterLessonsList,JSON.stringify({pageNo:this.pageToLoadNext,chapterId:this.chapter}))
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
          console.log(resp);
          this.chapterLessons=resp.chapterLessons;
          this.percent=resp.chapterAverage;
          this.showButton=resp.chapterLessons.length>99;
          this.loading=false; 
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
         this.loading=false;
       },
       () => {
        
     });
  }

}
