import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService, NbThemeService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {ApiService} from '../dataservice/apiservice.component';
import {UserLoginVM} from './../../models/UserViewModels/UserLoginVM';
import {DataService} from '../dataservice/utility.dataservice.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

import { WindowService } from '../../window.service';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';
import { AudioService } from 'src/app/services/audio.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    loginForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required])
    });

    VerficationForm = new FormGroup({
        'digits': new FormControl('', [Validators.required])
    });

    EmailVerficationForm = new FormGroup({
        'code': new FormControl('', [Validators.required])
    });

    sending = false;
    error = false;
    returnUrl: string;
    invalid: boolean;
    windowRef: any;
    result;
    verificationCode: string;
    confirmationResult;
    isShowForm = false;
    recaptchaErr;
    errorTwoFa;
    is_captcha_valid = false;
    is_emailVerificationForm = false;


    deviceInfo = null;
    userData: any = {};
    loadingUserData = true;
    themeSet;
    themeOptions;
    theme_id;
    themeKey = 'cosmic';


    public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    // constructor(private router: Router) { }
    // ngOnInit() {}
    public _usermodel: UserLoginVM = new UserLoginVM();

    constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                public afs: AngularFirestore,   // Inject Firestore service
                public afAuth: AngularFireAuth, // Inject Firebase auth service
                public ngZone: NgZone,
                private win: WindowService,
                private deviceService: DeviceDetectorService,
                private http: HttpClient,
                private apiService: ApiService,
                private toastrService: NbToastrService,
                private _configuration: Configuration,
                private audioService: AudioService,
                private themeService: NbThemeService
    ) {
        if (!firebase.apps.length) {
            firebase.initializeApp(environment.firebase);
        }
    }

    ngOnInit() {

        // console.log(this.themeKey);
        // if (localStorage.getItem(this._configuration.ProfileTheme) != null) {
        //     this.themeKey = localStorage.getItem(this._configuration.ProfileTheme);
        // }
        //console.log(this.themeKey);

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

        if (this.apiService.isLoggedIn()) {
            this._router.navigateByUrl('/dashboard');
            return;
        }

        this.audioService.stopPlayer$.next();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        console.log(this.returnUrl);
        this.invalid = false;

        this.windowRef = this.win.windowRef;
        this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha');
        this.windowRef.recaptchaVerifier.render();
        this.windowRef.recaptchaVerifier.verify().then((res) => {
            this.is_captcha_valid = true;
        });

        this.getUserBrowserData();
        this.getClientaddress();
    }

    getUserBrowserData() {
        this.userData.deviceInfo = this.deviceService.getDeviceInfo();
        this.userData.isMobile = this.deviceService.isMobile();
        this.userData.isTablet = this.deviceService.isTablet();
        this.userData.isDesktopDevice = this.deviceService.isDesktop();
    }

    async getClientaddress() {
        this.userData.ip = '';
        setTimeout(() => {
            this.loadingUserData = false; // wait max for 2 second to get ip address
        }, 2000);
        this.http.get<{ip: string}>('https://jsonip.com')
            .subscribe( data => {
                this.userData.ip = data.ip;
                this.loadingUserData = false;
            }, (err) => {
                this.loadingUserData = false;
            });
    }

    logIn() {
        this.loadingUserData = true;
        if (this.is_captcha_valid) {
            this.recaptchaErr = '';
            if (this.loginForm.valid) {
                this.sending = true;
                this.invalid = false;
                this._usermodel.password = this.loginForm.controls['password'].value;
                this._usermodel.email = this.loginForm.controls['email'].value;
                this._usermodel.userData = this.userData;
                this._dataservice
                    .loginUser<any>(this._configuration.TokenApi, this._usermodel)
                    .subscribe(resp => {
                            if (resp.status === this._configuration.ResponseStatusError) {
                                this.sending = false;
                                this.invalid = true;
                                this.recaptchaErr = 'Invalid username and/or password';
                                this.loadingUserData = false;
                                return;
                            }
                            if (resp.user.is_2fa) {
                                if (resp.user.twofa_type === 'sms') {
                                    this.afAuth.auth.signInWithPhoneNumber(resp.user.country_code + resp.user.phone_number, this.windowRef.recaptchaVerifier)
                                        .then((result) => {
                                            console.log(result);
                                            this.windowRef.userResult = resp;
                                            this.windowRef.confirmationResult = result;
                                            this.isShowForm = true;
                                            this.loadingUserData = false;
                                            return;
                                        }).catch((error) => {
                                        this.recaptchaErr = error;
                                        this.loadingUserData = false;
                                        return;
                                    });
                                } else if (resp.user.twofa_type === 'email') {
                                    this.isShowForm = true;
                                    this.is_emailVerificationForm = true;
                                    this.loadingUserData = false;
                                    this.windowRef.userResult = resp;
                                } else if (resp.user.twofa_type === 'google') {
                                    this.windowRef.userResult = resp;
                                    this.loadingUserData = false;
                                    return this.AuthLogin(new auth.GoogleAuthProvider());
                                } else {
                                    this.loadingUserData = false;
                                }
                            } else {
                                // console.log(this.themeOptions);
                                console.log(resp);
                                //this.theme_id = resp.user.theme_id;
                                //this.themeSet = this.themeOptions.filter(x=>x.id===this.theme_id)[0].theme;                    
                                // this.themeService.changeTheme(this.themeKey);
                                localStorage.setItem(this._configuration.NameKey, resp.user.firstName + ' ' + resp.user.lastName);
                                localStorage.setItem(this._configuration.AccessTokenKey, resp.token);
                                localStorage.setItem(this._configuration.RefreshTokenKey, resp.refreshToken);
                                localStorage.setItem(this._configuration.UserKey, JSON.stringify(resp.user));
                                localStorage.setItem(this._configuration.ProfileTheme, JSON.stringify(resp.user));
                                this.loadingUserData = false;
                                this._passingDataservice.currentUrl.subscribe(url => {
                                    this.router.navigateByUrl(this.returnUrl);
                                    this._passingDataservice.setUserStatus(true);
                                });
                            }
                        },
                        error => {
                            console.log(error);
                            this.toastrService.show(this._configuration.ErrorLoggingIn, '',
                                {
                                    status: this._configuration.ToasterStatusError,
                                    duration: this._configuration.ToasterDuration,
                                    position: this._configuration.ToasterPosition
                                });

                            this.sending = false;
                            this.loadingUserData = false;
                        },
                        () => {
                            //this.loadingUserData = false;
                        });

            } else {
                this.loginForm.controls.email.markAsTouched();
                this.loginForm.controls.password.markAsTouched();
                this.loadingUserData = false;
            }
        } else {
            this.recaptchaErr = 'Invalid captcha';
            this.loadingUserData = false;
        }
    }

    verifyLoginCode() {
        this.loadingUserData = true;
        this.verificationCode = this.VerficationForm.controls['digits'].value;
        if (this.verificationCode && this.verificationCode.toString().length === 6 || this.verificationCode && this.verificationCode.toString().length === 5) {
            this.errorTwoFa = '';
            this.windowRef.confirmationResult
                .confirm(this.verificationCode.toString())
                .then( result => {
                    if (result.user.phoneNumber === ( this.windowRef.userResult.user.country_code + this.windowRef.userResult.user.phone_number ) ){
                        localStorage.setItem(this._configuration.NameKey, this.windowRef.userResult.user.firstName + ' ' + this.windowRef.userResult.user.lastName);
                        localStorage.setItem(this._configuration.AccessTokenKey, this.windowRef.userResult.token);
                        localStorage.setItem(this._configuration.UserKey, JSON.stringify(this.windowRef.userResult.user));
                        localStorage.setItem(this._configuration.RefreshTokenKey, result['refreshToken']);
                        this._passingDataservice.currentUrl.subscribe(url => {
                            this.router.navigateByUrl(this.returnUrl);
                            this._passingDataservice.setUserStatus(true);
                            this.loadingUserData = false;
                        });
                    } else {
                        this.loadingUserData = false;
                        this.errorTwoFa = 'Invalid authentication, please try again.';
                    }
                })
                .catch( error => {
                    this.loadingUserData = false;
                    this.errorTwoFa = error;
                });
        } else {
            this.loadingUserData = false;
            this.errorTwoFa = 'Please enter the full 6-Digit code.';
        }
    }

    verifyEmailLoginCode() {
        this.loadingUserData = true;
        this.verificationCode = this.EmailVerficationForm.controls['code'].value;
        if (this.verificationCode && this.verificationCode.toString().length === 6) {
            let userId = this.windowRef.userResult.user.userId;
            let code = this.verificationCode;
            let param = {
                code: code,
                user_id: userId
            };
            console.log(param);
            this._dataservice
                .VerifyEmailCode<any>(this._configuration.VerifyEmailCodeApi, param)
                .subscribe(resp => {
                        if (resp.status === this._configuration.ResponseStatusError) {
                            this.errorTwoFa = resp.message;
                            this.loadingUserData = false;
                            return;
                        }

                        localStorage.setItem(this._configuration.NameKey, this.windowRef.userResult.user.firstName + ' ' + this.windowRef.userResult.user.lastName);
                        localStorage.setItem(this._configuration.AccessTokenKey, this.windowRef.userResult.token);
                        localStorage.setItem(this._configuration.UserKey, JSON.stringify(this.windowRef.userResult.user));
                        localStorage.setItem(this._configuration.RefreshTokenKey, resp.refreshToken);
                        this._passingDataservice.currentUrl.subscribe(url => {
                            this.router.navigateByUrl(this.returnUrl);
                            this._passingDataservice.setUserStatus(true);
                            this.loadingUserData = false;
                        });
                    },
                    error => {
                        this.toastrService.show(this._configuration.ErrorLoggingIn, '',
                                {
                                    status: this._configuration.ToasterStatusError,
                                    duration: this._configuration.ToasterDuration,
                                    position: this._configuration.ToasterPosition
                                });
                        this.loadingUserData = false;
                    },
                    () => {
                       // this.loadingUserData = false;
                    });

        } else {
            this.loadingUserData = false;
            this.errorTwoFa = 'Please enter the full 6-Digit code.';
        }
    }

    AuthLogin(provider) {
        this.loadingUserData = true;
        this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
                if (result.user.email === this.windowRef.userResult.user.email) {
                    localStorage.setItem(this._configuration.NameKey, this.windowRef.userResult.user.firstName + ' ' + this.windowRef.userResult.user.lastName);
                    localStorage.setItem(this._configuration.AccessTokenKey, this.windowRef.userResult.token);
                    localStorage.setItem(this._configuration.UserKey, JSON.stringify(this.windowRef.userResult.user));
                    localStorage.setItem(this._configuration.UserKey, result['refreshToken']);
                    this._passingDataservice.currentUrl.subscribe(url => {
                        this.router.navigateByUrl(this.returnUrl);
                        this._passingDataservice.setUserStatus(true);
                        this.loadingUserData = false;
                    });
                } else {
                    this.loadingUserData = false;
                    this.recaptchaErr = 'Invalid authentication, please try again.';
                }
            }).catch((error) => {
            this.loadingUserData = false;
            // window.alert(error)
            this.toastrService.show(error, '',
            {
                status: this._configuration.ToasterStatusError,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
            });
        });
    }    

    validateInput(input: FormControl): boolean {
        if (input.touched && input.invalid) {
            return true;
        }
        return false;
    }

    showError(input: FormControl): string {
        if (input.errors.required) {
            return this._configuration.FieldRequired;
        } else if (input.errors.email) {
            return 'You need to enter a valid email.';
        }
    }

    saveLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                    this._dataservice
                        .postCall<any>(this._configuration.SaveUserLocationApi, JSON.stringify({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }))
                        .subscribe(
                            resp => {
                                console.log('USER LOCATION: ', resp);
                                if (resp.status === this._configuration.ResponseStatusError) {
                                    this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                                    {
                                        status: this._configuration.ToasterStatusError,
                                        duration: this._configuration.ToasterDuration,
                                        position: this._configuration.ToasterPosition
                                    });
                                    return;
                                }
                                console.log('User location data is stored in db');
                                resolve({ longitude: position.coords.longitude, latitude: position.coords.latitude });
                            },
                            error => {
                                console.log('USER LOCATION error: ', error);
                                this.toastrService.show(this._configuration.ErrorSavingResult, '',
                                {
                                    status: this._configuration.ToasterStatusError,
                                    duration: this._configuration.ToasterDuration,
                                    position: this._configuration.ToasterPosition
                                });

                                reject(error);
                            },
                            () => {
                            });
                },
                err => {
                    reject(err);
                });
        });
    }
}

