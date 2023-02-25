import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../dataservice/utility.dataservice.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../dataservice/apiservice.component';
import { Configuration } from '../../dataservice/app.constant.component';

const URL = "/assets/documents/";
import { chunk } from 'lodash-es'
import { PreviewPdfComponent } from 'src/app/components/preview-pdf/preview-pdf.component';
declare var $: any;

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class documentsComponent implements OnInit {

  testData: any[] = [
  ]
  data: any;
  baseURL: any;
  loading: boolean = true;
  chunkedData: any[] = [];
  carousalSettled = false;
  windowWidth: number;
  dynamicDownload;

  constructor(private _dataservice: ApiService, private _configuration: Configuration,
    private dialogService: NbDialogService, private http: HttpClient, public sanitizer: DomSanitizer,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.baseURL = this._configuration.Server;
    this.loading = true;
    this.getUserDocuments();
  }

  getUserDocuments(){
    this._dataservice
      .postCall<any>(this._configuration.GetUserDocumentsApi, { pageNo: 1 })
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
        this.data = resp.documents;        
        this.data = this.data.sort(function(a, b) {
          if (!b.dateCreated) {
            return -1;
          }
          return  ( (new Date(b.dateCreated).getTime()) - (new Date (a.dateCreated).getTime()));
        });
        if(this.data.length > 0) {
          this.chunkedData = this.chunked(this.data, this.chunkCount);
          console.log(this.chunkedData);
          console.log(this.chunkCount);
        }
        else {
          this.chunkedData = [];
        }
        this.loading = false;
        this.setCarousal();
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

  ngAfterViewInit(): void {
  }

  setCarousal() {
    const carouselLength = $('.carousel-item').length - 1;

    // If there is more than one item
    if (carouselLength) {
      $('.carousel-control-next').removeClass('d-none');
    }

    $('.carousel')
      .carousel({
        interval: 3000,
        wrap: false
      })
      .on('slide.bs.carousel', function (e) {
        this.carousalSettled = true;

        // First one
        if (e.to === 0) {
          $('.carousel-control-prev').addClass('d-none');
          $('.carousel-control-next').removeClass('d-none');
        } // Last one
        else if (e.to === carouselLength) {
          $('.carousel-control-prev').removeClass('d-none');
          $('.carousel-control-next').addClass('d-none');
        } // The rest
        else {
          $('.carousel-control-prev').removeClass('d-none');
          $('.carousel-control-next').removeClass('d-none');
        }
      });
  }

  deleteDocument(progressId, noteId){
    this._dataservice.postCall("chapter/deleteNote", { 'id': progressId, 'noteId': noteId })
      .subscribe((response: any) => {
        if (response.status === this._configuration.ResponseStatusError) {
          this.toastrService.show(this._configuration.ErrorFetchingResult, '',
          {
              status: this._configuration.ToasterStatusSuccess,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
        this.toastrService.show(this._configuration.DocumentDeleted, '',
        {
            status: this._configuration.ToasterStatusSuccess,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
        this.getUserDocuments();
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

  previewDownloadPdf(event, pdfSrc: string = null, downloadPdf: boolean = false, cast = null) {
    event.preventDefault();
    event.stopPropagation();
    
    if (downloadPdf) {
      this.downloadPdf(pdfSrc, cast);
    } else {
      this.dialogService.open(PreviewPdfComponent, {
        context: { pdfSrc, cast }
      })
      .onClose.subscribe(isDeleted => isDeleted && this.getUserDocuments());
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    this.chunkedData = this.chunked(this.data, this.chunkCount);
  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }

  chunked(array: any[], chunkSize) {
    let chunkedArray = chunk(array, chunkSize);
    let lastChunk = chunkedArray[chunkedArray.length - 1];
    if (lastChunk.length !== chunkSize) {
      console.log(lastChunk.length);
      console.log(chunkSize);
      for (let i = 0; i < chunkSize; i++) {
        lastChunk.push({ hidden: true });
      }
    }
    return chunkedArray;
  }

  get chunkCount() {
    if (this.windowWidth < 768) {
      return 1;
    }
    if (this.windowWidth < 1025) {
      return 5;
    }
    return 5;
  }

  get sliderHeight() {
    if (this.windowWidth < 1025) {
      return '25vh';
    }
    return '35vh';
  }

  downloadPdf(pdfSrc: string, cast) {
    this.http.get(pdfSrc, { responseType: 'arraybuffer' })
      .subscribe((response: any) => {
        if (response.status === this._configuration.ResponseStatusError) {
          this.toastrService.show(this._configuration.ErrorFetchingContent, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
        const blob: any = new Blob([(response)], { type: 'application/pdf' });
        const pdfDownloadUrl = window.URL.createObjectURL(blob);
        if (!this.dynamicDownload) {
          this.dynamicDownload = document.createElement('a');
        }
        const element = this.dynamicDownload;
        element.setAttribute('href', pdfDownloadUrl);
        element.setAttribute('download', cast.note);

        const event = new MouseEvent('click');
        element.dispatchEvent(event);
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
}
