import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../dataservice/apiservice.component';
import { NbToastrService } from '@nebular/theme';
import { Configuration } from '../../dataservice/app.constant.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class livepageComponent implements OnInit {

  public vimeoBroadcastInfo: any = {
    url: '',
    isLive: 0,
  };
  loading = true;

  constructor(private _dataservice: ApiService, private toast: NbToastrService,
              private _configuration: Configuration, private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this._dataservice
      .getAll<any>(this._configuration.GetVimeoBroadcastInfoApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          return;
        }

        this.vimeoBroadcastInfo = resp.vimeoInfo;
        this.vimeoBroadcastInfo.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.vimeoBroadcastInfo.url);
        this.loading = false;
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
  }

}
