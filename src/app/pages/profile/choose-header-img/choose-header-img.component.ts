import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import {ApiService} from './../../dataservice/apiservice.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataservice/utility.dataservice.component';
declare var $: any;

@Component({
    selector: 'app-choose-header-img',
    templateUrl: './choose-header-img.component.html',
    styleUrls: ['./choose-header-img.component.scss']
})
export class ChooseHeaderImgComponent implements OnInit {

    @Input() selected = '';
    @Input() level = 1;
    isSaving = false;
    images = [];
    alertModalMessage: string = '';

    // images = [
    //     {url: '/assets/Headers/1.jpg', level: 1},
    //     {url: '/assets/Headers/2.jpg', level: 1},
    //     {url: '/assets/Headers/3.jpg', level: 1},
    //     {url: '/assets/Headers/4.jpg', level: 1},
    //     {url: '/assets/Headers/5.jpg', level: 1},
    //     {url: '/assets/Headers/6.jpg', level: 1},
    //     {url: '/assets/Headers/7.jpg', level: 1},
    //     {url: '/assets/Headers/8.jpg', level: 1},
    //     {url: '/assets/Headers/9.jpg', level: 1},
    //     {url: '/assets/Headers/10.jpg', level: 1},
    // ];

    constructor(private ref: NbDialogRef<any>, private _dataservice: ApiService,
        private _router: Router, private router: Router, private route: ActivatedRoute,
        private _passingDataservice: DataService,
        private toastrService: NbToastrService,
        private _configuration: Configuration ) {
    }

    ngOnInit() {
        this.getPurchasedHeaders();
    }

    apply() {
        this.isSaving = true;

        const _dataModel = JSON.stringify({profile_header_pic: this.selected/*, userId: this._passingDataservice._currentUser.userId*/});

        this._dataservice
            .postCall<any>(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(resp => { console.log(resp);
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.isSaving = false;
                        this.alertModalMessage = resp.message;
                        $('#alertModal').modal('show');
                        return;
                    }
                    setTimeout(() => { // console.log(resp);
                        this.isSaving = false;

                        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                        this._router.onSameUrlNavigation = 'reload';
                        this._router.navigate(['/profile']).then();

                        this.ref.close(this.selected); console.log(this.selected);
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
                    this.isSaving = false;
                },
                () => {
                });
    }

    getPurchasedHeaders(){
        this._dataservice.getAll('userPurchase/getHeaders').subscribe(
            resp=>{
                if (resp['status'] === this._configuration.ResponseStatusError) {
                    this.alertModalMessage = resp['message'];
                    $('#alertModal').modal('show');
                    return;
                }
                this.images = resp['headers'];
            }
        )
    }
}
