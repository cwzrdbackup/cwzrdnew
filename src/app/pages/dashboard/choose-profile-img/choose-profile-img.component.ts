import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataservice/utility.dataservice.component';
import {ApiService} from '../../dataservice/apiservice.component';

@Component({
    selector: 'app-choose-profile-img',
    templateUrl: './choose-profile-img.component.html',
    styleUrls: ['./choose-profile-img.component.scss']
})
export class ChooseProfileImgComponent implements OnInit {
    isSaving = false;
    images = [];

    // images = [
    //     '/assets/Avatars/1.png',
    //     '/assets/Avatars/2.png',
    //     '/assets/Avatars/3.png',
    //     '/assets/Avatars/4.png',
    //     '/assets/Avatars/5.png',
    //     '/assets/Avatars/6.png',
    //     '/assets/Avatars/7.png',
    //     '/assets/Avatars/8.png',
    //     '/assets/Avatars/9.png',
    //     '/assets/Avatars/10.png',
    //     '/assets/Avatars/11.png',
    //     '/assets/Avatars/12.png',
    //     '/assets/Avatars/13.png',
    //     '/assets/Avatars/14.png',
    //     '/assets/Avatars/15.png',
    //     '/assets/Avatars/16.png',
    //     '/assets/Avatars/17.png',
    //     '/assets/Avatars/18.png',
    //     '/assets/Avatars/19.png',
    //     '/assets/Avatars/20.png',
    //     '/assets/Avatars/21.png',
    //     '/assets/Avatars/22.png',
    // ];

    @Input() selected = '';

    constructor(private ref: NbDialogRef<any>, private _dataservice: ApiService,
                private _router: Router, private router: Router, private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private toastrService: NbToastrService,
                private _configuration: Configuration) {
    }

    ngOnInit() {
        this.getPurchasedAvatars();
    }

    getPurchasedAvatars(){
        this._dataservice.getAll('userPurchase/getAvatars').subscribe(
            resp=>{
                if (resp['status'] === this._configuration.ResponseStatusError) {
                    alert(resp['message']);
                    return;
                }
                this.images = resp['avatars'];                
            }
        )
    }

    apply() {
        this.isSaving = true;

        const _dataModel = JSON.stringify({profile_pic: this.selected/*, userId: this._passingDataservice._currentUser.userId*/});

        this._dataservice
            .postCall<any>(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(resp => { console.log(resp);
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.isSaving = false;
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    setTimeout(() => { // console.log(resp);
                        this.isSaving = false;

                        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                        this._router.onSameUrlNavigation = 'reload';
                        this._router.navigate(['/dashboard']).then();

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

    /*selectedImageSet(img) {
        console.log(img);
    }*/

}
