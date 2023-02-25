import { Configuration } from './../../pages/dataservice/app.constant.component';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../pages/dataservice/apiservice.component';
declare var $: any;

@Component({
  selector: 'app-preview-certificate',
  templateUrl: './preview-certificate.component.html',
  styleUrls: ['./preview-certificate.component.scss']
})
export class PreviewCertificateComponent implements OnInit {
  @Input() pdfSrc: string = null;
  @Input() cast: any = {};
  @Input() isCertitficatePdf = false;

  alertModalMessage: string = '';
  innerHtml;
  dataLocalUrl;
  pdfData: any;
  loading = true;
  dynamicDownload;
  pdfArrayBuffer;

  constructor(private _dataservice: ApiService, protected ref: NbDialogRef<PreviewCertificateComponent>, public sanitizer: DomSanitizer, private http: HttpClient,
    private toastrService: NbToastrService,
    private _configuration: Configuration
    ) { }

  ngOnInit() {
    if (this.isCertitficatePdf) {
      this.retrieveCertificatePdf(this.pdfSrc);
    } else {
      this.retrievePdf(this.pdfSrc);
    }
  }
  closeModal(isDeleted = false) {
    this.ref.close(isDeleted);
  }

  deleteDocument(){
    this._dataservice.postCall("chapter/deleteNote", { 'id': this.cast.progressId, 'noteId': this.cast.id })
      .subscribe((response: any) => {
        if (response.status === this._configuration.ResponseStatusError) {
          this.alertModalMessage = response.message;
        $('#alertModal').modal('show');
          return;
        }
        this.toastrService.show(this._configuration.DocumentDeleted, '',
        { status: this._configuration.ToasterStatusSuccess,
          duration: this._configuration.ToasterDuration ,
          position: this._configuration.ToasterPosition});
        this.closeModal(true)
      },
      error => {
        this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        { status: this._configuration.ToasterStatusError,
          duration: this._configuration.ToasterDuration ,
          position: this._configuration.ToasterPosition});
      },
      () => {

      });
  }

  retrievePdf(url) {
    this.http.get(url, { responseType: 'arraybuffer' })
      .subscribe((file: ArrayBuffer) => {
        this.pdfArrayBuffer = file;
        this.pdfData = new Uint8Array(file);
        this.loading = false;
      }, error => {
        console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        { status: this._configuration.ToasterStatusError,
          duration: this._configuration.ToasterDuration ,
          position: this._configuration.ToasterPosition});
        
      },
        () => {

        });
  }
  retrieveCertificatePdf(url) {

    const varr = { responseType: 'arraybuffer' };
    this.http.get(url, {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
        }
      ), responseType: 'arraybuffer'
    }).subscribe((file: ArrayBuffer) => {
      this.pdfArrayBuffer = file;
      this.pdfData = new Uint8Array(file);
      this.loading = false;
    }, error => {
      console.log(error);
      this.toastrService.show(this._configuration.ErrorFetchingResult, '',
      { status: this._configuration.ToasterStatusError,
        duration: this._configuration.ToasterDuration ,
        position: this._configuration.ToasterPosition});
    },
      () => {

      });
  }
  downloadPdf() {
    const blob: any = new Blob([(this.pdfArrayBuffer)], { type: 'application/pdf' });
    const pdfDownloadUrl = window.URL.createObjectURL(blob);
    if (!this.dynamicDownload) {
      this.dynamicDownload = document.createElement('a');
    }
    const element = this.dynamicDownload;
    element.setAttribute('href', pdfDownloadUrl);
    element.setAttribute('download', 'document');

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

}