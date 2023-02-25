import { NbToastrService, NbThemeService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import { Component, OnInit } from '@angular/core';
import {CoutriesService} from "../../services/coutries.service";
import {ApiService} from "../dataservice/apiservice.component";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
    loading: boolean = true;
    countries;
    twoFAType;
    is_2fa = false;
    countryCode = '+1';
    phoneNumber;
    errorMsg;
    successMsg;
    width;
    is_loader = false;
    isShowChangePass = false;
    isShowGender = false;
    isShowLocation = false;
    profileImg = '';
    profileHeaderImg = '';
    themeOptions: any[];
    showMoreThemes = false;
    themeClicked = false;

    showOutsideBtn = false;

    isSubmit = 'SUBMIT';
    isError;
    userDetails;

    gender;
    location;
    evolve;
    platform;
    themes;
    theme_id;
    locations;
    themeSet;

    changePassForm = new FormGroup({
        currentPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', Validators.required),
    });

    changeGenderForm = new FormGroup({
        gender: new FormControl('', Validators.required)
    });

    changeLocationForm = new FormGroup({
        location: new FormControl('', Validators.required)
    });

    constructor(private country: CoutriesService, private _dataservice: ApiService, private router: Router,
        private toastrService: NbToastrService, private _configuration: Configuration, private themeService: NbThemeService) { }

        // changeTheme(input) {
        //     //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        //     this.themeService.changeTheme(input);
        //     console.log(input);
        // }
        changeTheme(themeKey) {
            //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
            this.themeService.changeTheme(themeKey);
            this.themeClicked = true;
        }
    ngOnInit() {
        
        console.log(this.twoFAType);
        if (this.is_2fa) {
            this.showOutsideBtn = false;
        }
        
        // this.themeOptions = [
        //     {theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30},
        //     {theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31},
        //     {theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53},
        //     {theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32},
        //     {theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81},
        //     //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
        //     {theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35},
        //     {theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41},
        //     {theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42},
        //     //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
        //     // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
        //     {theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46},
        //     //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
        //     //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
        //     {theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49},
        //     {theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52},
        //     {theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54},
        //     {theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55},
        //     {theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56},
        //     {theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64},
        //     {theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44},
        //     {theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69},
        //     {theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34},
        //     //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
        //     //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
        //     {theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73},
        //     {theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82},
        //     {theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83},
        //     {theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85},
        //     {theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90},
        //     {theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91},
        //     {theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92},
        // ]

        this.themeOptions = [
            {theme: "Far_Above", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/30.jpg", id: 30},
            {theme: "Vortex", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/31.jpg", id: 31},
            {theme: "Smiley", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/53.jpg", id: 53},
            {theme: "Fireball", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/32.jpg", id: 32},
            {theme: "Purging", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/81.jpg", id: 81},
            //{theme: "Hex_World", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/33.jpg"},            
            {theme: "Connection", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/35.jpg", id: 35},
            {theme: "Enchanted_Dream", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/41.jpg", id: 41},
            {theme: "Infinity", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/42.jpg", id: 42},
            //{theme: "Pirate", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/45.jpg"},
            {theme: "United_Colours", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/46.jpg", id: 46},
            //{theme: "Palm_Trees", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/47.jpg"},
            //{theme: "Analyst", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/48.jpg"},
            {theme: "Voltage", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/49.jpg", id: 49},
            {theme: "Overload", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/52.jpg", id: 52},
            {theme: "Internal_Traces", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/54.jpg", id: 54},
            {theme: "Isolated", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/55.jpg", id: 55},
            {theme: "Land_of_Promises", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/56.jpg", id: 56},
            {theme: "Towers_of_Wizardry", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/64.jpg", id: 64},
            {theme: "Tron", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/44.jpg", id: 44},
            {theme: "Planets", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/69.jpg", id: 69},
            {theme: "Formula_of_Life", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/34.jpg", id: 34},
            //{theme: "Bloodline", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/70.jpg"},
            //{theme: "Ghost_Town", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/71.jpg"},
            {theme: "Meteor", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/73.jpg", id: 73},
            {theme: "Predator", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/82.jpg", id: 82},
            {theme: "Lava", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/83.jpg", id: 83},
            {theme: "Witches", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/85.jpg", id: 85},
            {theme: "Candy", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/90.jpg", id: 90},
            {theme: "Mother_Nature", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/91.jpg", id: 91},
            {theme: "Mystic", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/92.jpg", id: 92},
        ]
        
        console.log(this.themeOptions.length);
        this.countries = this.country.getCountries();
        this.countries = this.countries.countries;
        this.locations = this.countries.map ( (c) => {
        return c.name;
        });


        this.loading = true;
        this._dataservice
            .postCall<any>(this._configuration.GetUserApi, {})
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) { 
                        this.loading = false;
                    }
                    console.log(resp)
                    this.userDetails = resp.user;
                    this.location = this.userDetails.country;
                    this.changeLocationForm.controls['location'].setValue(this.location);
                    this.is_2fa = (resp.user.is_2fa===0)?false:true;
                    this.twoFAType = resp.user.twofa_type;
                    if (this.twoFAType != null) {
                        console.log(this.twoFAType);
                        this.showOutsideBtn = false;
                    }
                    if (resp.user.country_code) {
                        this.countryCode = resp.user.country_code;
                    } else {
                        this.countryCode = (this.countries.filter( c => c.name === this.location ))[0].code;
                    }
                    this.phoneNumber = resp.user.phone_number;
                    this.is_loader = true;
                    this.gender = (this.userDetails.gender === 0 || this.userDetails.gender === 2) ? 2 : 1;
                    this.theme_id = resp.user.theme_id;
                    this.profileImg = resp.user.profile_pic;
                    this.profileHeaderImg = resp.user.profile_header_pic;
                    this.loading = false;                    
                    this.themeSet = this.themeOptions.filter(x=>x.id===this.theme_id)[0].theme;                    
                    this.themeService.changeTheme(this.themeSet);
                    
                },
                error => {
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.is_loader = true;
                    this.loading = false;
                },
                () => {
                    this.is_loader = true;
                    this.loading = false;
                });

        this.getEvolve();
        this.plafFormUpdate();
        this.getThemes();

    }

    showThemeSelector(){
        this.showMoreThemes = true;
    }
    closeTheme(){
        this.showMoreThemes = false;
    }

    getEvolve() {
        this._dataservice
            .getAll('getEvolvePlatformVersion?type=0')
            .subscribe(resp => {
                    this.evolve = resp;
                    this.evolve = this.evolve.data;
                    if (this.evolve.status === this._configuration.ResponseStatusError) { return; }
                },
                error => {
                    //alert('An error occured while fetching the result.');
                },
                () => {

                });
    }

    onChangeTheme(){

    }

    plafFormUpdate() {
        this._dataservice
            .getAll('getEvolvePlatformVersion?type=1')
            .subscribe(resp => {
                    this.platform = resp;
                    this.platform = this.platform.data;

                    if (this.platform.status === this._configuration.ResponseStatusError) { return; }
                },
                error => {
                    //alert('An error occured while fetching the result.');
                },
                () => {

                });
    }

    getThemes(){
        this._dataservice
            .getAll('userPurchase/getThemes')
            .subscribe(resp => {
                    this.themes = resp;
                    this.themes = this.themes.themes;
                    console.log(resp)
                    if (this.platform.status === this._configuration.ResponseStatusError) { return; }
                },
                error => {
                    //alert('An error occured while fetching the result.');
                },
                () => {

                });
    }

    updateTheme(args) {
        if (args.value) {
            this._dataservice
                .postCall<any>(this._configuration.UpdateNameValueApi, {
                    name: 'theme_id',
                    value: args.value
                })
                .subscribe(resp => {
                        if (resp.status === 'SUCCESS') {
                            return;
                        }
                    },
                    error => {

                    },
                    () => {
                    });
        }
    }

    changeLocationShow() {
        this.isShowLocation = true;
    }

    changeLocationCancel(){
        this.isShowLocation = false;
    }

    changeLocationSubmit(){
        if (this.changeLocationForm.controls['location'].value){
            this._dataservice
                .postCall<any>(this._configuration.UpdateNameValueApi, {
                    name: 'country',
                    value: this.changeLocationForm.controls['location'].value
                })
                .subscribe(resp => {
                        if (resp.status === 'SUCCESS') {
                            this.location = this.changeLocationForm.controls['location'].value;
                            this.countryCode = (this.countries.filter( c => c.name === this.location ))[0].code;
                            this.isShowLocation = false;
                            return;
                        }
                        this.isError = resp.message
                        return;
                    },
                    error => {
                        this.isError = 'An error occured while fetching the result.';
                    },
                    () => {
                    });
        } else {
            this.isError = 'Please enter location';
        }
    }

    changeGender() {
        this.isShowGender = true;
    }
    genderCancel() {
        this.isShowGender = false;
    }
    genderSubmit() {
        if (this.changeGenderForm.controls['gender'].value){
            this._dataservice
                .postCall<any>(this._configuration.UpdateNameValueApi, {
                    name: 'gender',
                    value: this.changeGenderForm.controls['gender'].value
                })
                .subscribe(resp => {
                        if (resp.status === 'SUCCESS') {
                            this.gender = (this.changeGenderForm.controls['gender'].value===2)?0:1;
                            this.isShowGender = false;
                            return;
                        }
                        this.isError = resp.message
                        return;
                    },
                    error => {
                        this.isError = 'An error occured while fetching the result.';
                    },
                    () => {
                    });
        } else {
            this.isError = 'Please select gender';
        }

    }


    changePasswordShow(){
        this.isShowChangePass = true;
    }

    changePasswordSubmit() {
        this.isSubmit = 'Loading...';
        console.log(this.changePassForm.controls['currentPassword'].value);
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
                        //alert('An error occured while fetching the result.');
                    },
                    () => {
                    });
        } else {
            this.isSubmit = 'SUBMIT';
            this.isError = "All field is required"
        }
    }

    changePasswordCancel() {
        this.isShowChangePass = false;
    }



    onSelectionChange(entry) {
        this.twoFAType = entry;
    }

    toggleVisibility(e) {
        console.log(this.is_2fa);
    }

    updateSettings() {
        this.is_loader = false;
        let param = {
            is_2fa: this.is_2fa,
            twofa_type: this.twoFAType,
            phone_number: this.phoneNumber,
            country_code: this.countryCode
        };

        this._dataservice
            .postCall<any>(this._configuration.UpdateUserSettingsApi, param)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.errorMsg = resp.message;
                        this.is_loader = true;
                        return;
                    }
                    this.successMsg = "2FA settings updated successfully";
                    this.is_loader = true;
                },
                error => {
                    this.errorMsg = 'An error occured while fetching the result.';
                    this.is_loader = true;
                },
                () => {
                    this.is_loader = true;
                });


    }

}
