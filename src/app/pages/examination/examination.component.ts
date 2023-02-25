import { NbToastrService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../dataservice/apiservice.component';
import {DataService} from '../dataservice/utility.dataservice.component';

@Component({
    selector: 'app-examination',
    templateUrl: './examination.component.html',
    styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {
    sending = false;
    public _exams: any[];
    public _percent: number;
    public _lastExamId: null;
    public examTotal;

    constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private toastrService: NbToastrService,
                private _configuration: Configuration) {
    }


    ngOnInit() {

        console.log(this._passingDataservice._currentUser);
        // const _usermodel = JSON.stringify({userId: this._passingDataservice._currentUser.userId});

        this.sending = true;
        this._dataservice
            .getAll<any>(this._configuration.GetExaminationsListApi)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.sending = false;
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    setTimeout(() => {
                        this._exams = resp.examinations;
                        this.examTotal = this._exams.length;
                        this._percent = resp.average || 0;
                        this._lastExamId = resp.lastExamId;
                        this.sending = false;
                    }, 1000);
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                    this.sending = false;
                },
                () => {

                });

    }

}
