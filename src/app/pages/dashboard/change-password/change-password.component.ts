import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef, NbToastrService, NbThemeService } from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataservice/utility.dataservice.component';
import {ApiService} from '../../dataservice/apiservice.component';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class changePasswordComponent implements OnInit {
    isSaving = false;
    images = [];

    themeOptions= [];

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

    changePassForm = new FormGroup({
        currentPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', Validators.required),
    });
    userDetails;
    isSubmit = 'SUBMIT';
    isError;

    constructor(private ref: NbDialogRef<any>, private _dataservice: ApiService,
                private _router: Router, private router: Router, private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private toastrService: NbToastrService,
                private _configuration: Configuration,
                private themeService: NbThemeService) {
    }

    ngOnInit() {
        this.getPurchasedAvatars();

        this._dataservice
            .postCall<any>(this._configuration.GetUserApi, {})
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) { 
                        //this.loading = false;
                    }
                    console.log(resp)
                    this.userDetails = resp.user;
                    //this.location = this.userDetails.country;
                    //this.changeLocationForm.controls['location'].setValue(this.location);
                    //this.is_2fa = (resp.user.is_2fa===0)?false:true;
                    //this.twoFAType = resp.user.twofa_type;
                    // if (this.twoFAType != null) {
                    //     console.log(this.twoFAType);
                    //     this.showOutsideBtn = false;
                    // }
                    // if (resp.user.country_code) {
                    //     this.countryCode = resp.user.country_code;
                    // } else {
                    //     this.countryCode = (this.countries.filter( c => c.name === this.location ))[0].code;
                    // }
                    // this.phoneNumber = resp.user.phone_number;
                    // this.is_loader = true;
                    // this.gender = (this.userDetails.gender === 0 || this.userDetails.gender === 2) ? 2 : 1;
                    // this.theme_id = resp.user.theme_id;
                    // this.profileImg = resp.user.profile_pic;
                    // this.profileHeaderImg = resp.user.profile_header_pic;
                    // this.loading = false;
                },
                error => {
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    // this.is_loader = true;
                    // this.loading = false;
                },
                () => {
                    // this.is_loader = true;
                    // this.loading = false;
                });

        this.themeOptions = [
            {theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30},
            {theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31},
            {theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53},
            {theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32},
            {theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81},
            //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
            {theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35},
            {theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41},
            {theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42},
            //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
            {theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46},
            //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
            //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
            {theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49},
            {theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52},
            {theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54},
            {theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55},
            {theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56},
            {theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64},
            {theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44},
            {theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69},
            {theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34},
            //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
            //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
            {theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73},
            {theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82},
            {theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83},
            {theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85},
            {theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90},
            {theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91},
            {theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92},
        ]
    }

    changeTheme(themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
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

        const _dataModel = JSON.stringify({theme_id: this.selected/*, userId: this._passingDataservice._currentUser.userId*/});

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

    changePasswordSubmit() {
        //this.isSubmit = 'Loading...';
        //console.log(this.changePassForm.controls['currentPassword'].value);
        if (this.changePassForm.controls['currentPassword'].value && this.changePassForm.controls['newPassword'].value){
            this._dataservice
                .postCall<any>(this._configuration.ChangePasswordApi, {
                    newPassword: this.changePassForm.controls['newPassword'].value,
                    currentPassword: this.changePassForm.controls['currentPassword'].value,
                    email: this.userDetails.email
                })
                .subscribe(resp => {
                        if (resp.status === 'SUCCESS') {
                            this.isSubmit = 'SUBMIT';
                            this.router.navigateByUrl('/login');
                            return;
                        }
                        this.isSubmit = 'SUBMIT';
                        this.isError = resp.message
                        return;
                    },
                    error => {
                        this.isSubmit = 'SUBMIT';
                        alert('An error occured while fetching the result.');
                    },
                    () => {
                    });
        } else {
            this.isSubmit = 'SUBMIT';
            this.isError = "All field is required"
        }
    }

    close() {
        this.ref.close();
    }
    /*selectedImageSet(img) {
        console.log(img);
    }*/

}
