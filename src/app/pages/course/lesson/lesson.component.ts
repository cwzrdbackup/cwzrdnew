import { PreviewPdfComponent } from './../../../components/preview-pdf/preview-pdf.component';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Router,ActivatedRoute } from '@angular/router';
import { Observable, of } from "rxjs";
import {Configuration} from './../../dataservice/app.constant.component';
import {ApiService} from '../../dataservice/apiservice.component';
import {DataService} from  '../../dataservice/utility.dataservice.component';
import { NbToastrService, NbSidebarService, NbDialogService } from '@nebular/theme';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  baseURL:string;
  lesson: string;
  chapter:string;
  notesLoading=false;
  loading:boolean;
  data:any;
  notes:any[];
  videoUrl:any;
  isCompleted:boolean=false;
  noteForm = new FormGroup({
    'note': new FormControl('', [Validators.required])
  })
  constructor(private toast: NbToastrService, private _dataservice: ApiService, private _router: Router, private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice: DataService,
    private sanitizer: DomSanitizer, private _configuration: Configuration,
    private dialogService: NbDialogService) { }

  ngOnInit() {
    this.baseURL=this._configuration.Server;
    this.lesson = this.route.snapshot.paramMap.get("lesson");
    this.chapter=this.route.snapshot.paramMap.get("chapter");
    this.loadData();
    console.log(this.lesson,this.chapter);
  }
  loadData=()=>{
    this.loading=true;
    this._dataservice
      .postCall<any>(this._configuration.GetChapterLessonById, JSON.stringify({LessonId:this.lesson,ChapterId:this.chapter}))
      .subscribe(resp => {
        console.log(resp)
        if(resp.status===this._configuration.ResponseStatusError)
        {
          
          this.loading=false;
          this.toast.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }

        this.isCompleted = resp.chapterLesson.isComplete;
        console.log("Test",this.isCompleted);
        this.data=resp.chapterLesson;
        this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'+this.data.videoUrl+'?title=0&byline=0&portrait=0');
      //  console.log(resp.chapterLesson.notes.reverse());
        console.log(resp.chapterLesson.notes);
        console.log('notes')
        this.notes=resp.chapterLesson.notes==null?[]:(resp.chapterLesson.notes.notes==null?[]:resp.chapterLesson.notes.notes);
        this.noteForm.setValue({
          note: this.notes && this.notes.length > 0 ? this.notes[0].note : '',
        });
        

          this.loading=false; 
        
      },
       error => {
         console.log(error);
         this.toast.show(this._configuration.ErrorFetchingResult, '',
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
  addNote=()=>
  {
    //alert(this.noteForm.controls['note'].value);
    if(this.noteForm.controls['note'].value.trim())
    {
      this.notesLoading=true;
    this._dataservice
      .postCall<any>(this._configuration.AddNewLessonNoteApi, JSON.stringify({id:this.lesson,note:this.noteForm.controls['note'].value}))
      .subscribe(resp => {
        if(resp.status===this._configuration.ResponseStatusError)
        { 
          this.notesLoading=false;
          this.toast.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
          this.toast.success("Notes saved successfully", "Successfully Saved")
          let newNote={id:resp.id,note:this.noteForm.controls['note'].value};
          this.notes.unshift(newNote);
          this.notesLoading=false; 
          this.noteForm.setValue({
            note: newNote.note,
          });
      },
       error => {
         console.log(error);
         this.toast.show(this._configuration.ErrorFetchingResult, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
         this.notesLoading=false;
       },
       () => {
        
     });
    }
  }
  navigate=(id)=>{
    this.toast.show(id, '',
          {
              status: this._configuration.ToasterStatusInfo,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
  }

  goNext=()=>{
    this._router.navigate(['course/chapter',this.chapter, 'lesson',this.data.nextLessonId]);
    this.lesson=this.data.nextLessonId;
    this.loadData();
  }

  fakeValidateUserData() {
   
    let result =[];

    for(var i=0;i<this.notes.length;i++)
    {
      result.push(this.notes[i].note);
    }
    
    return of(
      result.join("\r\n\n")

    );
  }

  dynamicDownloadTxt(fileName) {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: fileName,
        text: res
      });
    });

  }
  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  completeLesson=()=>{
    this.loading=true;
    this._dataservice
      .postCall<any>(this._configuration.CompleteLessonApi, JSON.stringify({lessonId:this.lesson}))
      .subscribe(resp => {
        if(resp.status===this._configuration.ResponseStatusError)
        { 

          this.loading=false;
          this.toast.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
        this.isCompleted=true;
        console.log(resp);
        if(resp.achievement)    //           this.toast.info(resp.achievement, "Achievement");
        for(var i=0;i<resp.achievement;i++)
        {
         
          //           this.toast.info(resp.achievement, "Achievement");
          for(var i=0;i<resp.achievement;i++)
          {
            this.toast.info(resp.achievement[i].achievement, "Achievement");
          }
        }
        this.loading=false; 
      
        this.toast.info("You have successfully completed \"" + this.data.title + "\"", "Lesson Complete", {icon:'lesson-complete-toastr-icon'})
        this.loading=false; 
      if (resp.certificateAvailable) {
        this.previewDownloadPdf(null,  this.baseURL+'getUserCertificate');
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
        this.loading=false;
      },
      () => {
        
      });
  }

  previewDownloadPdf(event, pdfSrc: string) {
      this.dialogService.open(PreviewPdfComponent, {
        context: { pdfSrc, isCertitficatePdf: true }
      });
    }
}
