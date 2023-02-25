import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ChooseProfileImgComponent } from './choose-profile-img/choose-profile-img.component';
import { ChooseHeaderImgComponent } from './choose-header-img/choose-header-img.component';
import { DataService } from './../dataservice/utility.dataservice.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../dataservice/apiservice.component';
import { Configuration } from './../dataservice/app.constant.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    alertModalMessage: string = '';
    profileImg: string = '';
    headerImg: string = '';
    loading: boolean = true;
    loadingProfile: boolean = true;
    public edit: any = '';
    public textareaCharsMax = 300;
    windowWidth: number;
    showStats = true;
    profileDocuments: any = [];
    wizData = [
        {
            name: 'Michael Alonso',
            username: 'Michael.alonso',
            userImage: './assets/AvatarsPremium/Premium2.png',
            userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
            wizTime: '52 minutes ago',
        },
        {
            name: 'Olivier Volvic',
            username: 'Olivier_volvic',
            userImage: './assets/AvatarsPremium/Premium3.png',
            userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
            wizTime: '1 hour ago'
        },
        {
            name: 'AlexBenson',
            username: 'Alexbenson',
            userImage: './assets/AvatarsPremium/Premium4.png',
            userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
            wizTime: '2 hours ago'
        },
        {
            name: 'Sanjar Parmar',
            username: 'Sanjay_parmar14',
            userImage: './assets/AvatarsPremium/Premium5.png',
            userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
            wizTime: '4 hours ago'
        },
        {
            name: 'Jen Trades',
            username: 'Jentrades101',
            userImage: './assets/AvatarsPremium/Premium6.png',
            userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
            wizTime: '1 day ago'
        },
    ];

    dynamicArray: any = [];
    newDynamic: any = {};
    rankArray: any = [];
    rankImg: any;
    public name: any;
    public error: boolean;
    public sending: boolean = false;
    public invalid: boolean = false;
    public issue: any;

    public bio: any;
    public bioEdit: boolean = false;
    public currentProgress: any;
    public currentRank: any;
    public futureRank: any;
    public nextRankRequirement: any;

    public _traders: any[];
    public _profit: any[];
    public _pips: any[];
    public _favored: any[];
    public _loss: any;
    public _success: any;
    public savingBio: any;
    public totalProfit: any;
    public timeSpent: any;
    public totalPips: any;
    topNotes = [];
    technicalForm = new FormGroup({
        'name': new FormControl('', [Validators.required]),
        'issue': new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    });

    constructor(private dialog: NbDialogService, private _dataservice: ApiService, private _router: Router, private router: Router,
        private route: ActivatedRoute,
        private _passingDataservice: DataService, private _configuration: Configuration, private toastrService: NbToastrService) {
    }

    ngOnInit(): void {
        this.windowWidth = window.innerWidth;
        this.dynamicArray = [];
        const p_img = localStorage.getItem(this._configuration.ProfileImageKey);
        p_img ? this.profileImg = p_img : '';
        const h_img = localStorage.getItem(this._configuration.HeaderImageKey);
        h_img ? this.headerImg = h_img : '';

        this.rankArray = [
            {
                id: "Alchemist", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Alchemist.png"
            },
            {
                id: "Enchanter", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Enchanter.png"
            },
            {
                id: "Explorer", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Explorer.png"
            },
            {
                id: "Grand Sorcerer", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Grand Sorcerer.png"
            },
            {
                id: "Legendary WZRD", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Legendary WZRD.png"
            },
            {
                id: "Magician", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Magician.png"
            },
            {
                id: "Master WZRD", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Master WZRD.png"
            },
            {
                id: "Sorcerer", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Sorcerer.png"
            },
            {
                id: "WZRD", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/WZRD.png"
            },
            {
                id: "Warlock", rankTitle: "https://d308fakbqebk7c.cloudfront.net/ranks-book/Warlock.png"
            },
        ]

        this.dynamicArray = [
            {
                name: 'Michael Alonso',
                username: 'Michael.alonso',
                userImage: './assets/AvatarsPremium/Premium2.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '52 minutes ago',
            },
            {
                name: 'Olivier Volvic',
                username: 'Olivier_volvic',
                userImage: './assets/AvatarsPremium/Premium3.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 hour ago'
            },
            {
                name: 'AlexBenson',
                username: 'Alexbenson',
                userImage: './assets/AvatarsPremium/Premium4.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '2 hours ago'
            },
            {
                name: 'Sanjar Parmar',
                username: 'Sanjay_parmar14',
                userImage: './assets/AvatarsPremium/Premium5.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '4 hours ago'
            },
            {
                name: 'Jen Trades',
                username: 'Jentrades101',
                userImage: './assets/AvatarsPremium/Premium6.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
        ];

        this._dataservice
            .postCall<any>(this._configuration.GetProfileApi, {})
            .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.loadingProfile = false;
                    this.alertModalMessage = resp.message;
                    $('#alertModal').modal('show');
                    return;
                }

                this.sending = false;
                this.bio = resp.bio;

                console.log(this.bio);
                if (this.bio.profile_pic && this.bio.profile_pic !== '') {
                    this.profileImg = this.bio.profile_pic;
                } else {
                    this.profileImg = '/assets/profile/profile-img-1.png';
                }

                if (this.bio.profile_header_pic && this.bio.profile_header_pic !== '') {
                    this.headerImg = this.bio.profile_header_pic;
                } else {
                    this.headerImg = '/assets/profile/HeaderDefault.png';
                }

                this.currentProgress = resp.currentProgress;
                this.currentRank = resp.currentRank;
                this.futureRank = resp.futureRank;
                this.nextRankRequirement = resp.nextRankRequirement;
                this.rankImg=this.rankArray.filter(x=>x.id==this.currentRank)[0];
                
                this._traders = resp.trades.reverse();
                this._profit = resp.profit;

                this.totalProfit = this._profit.length > 0 ? this._profit.reduce((x, y) => x + y) : 0;
                this._pips = resp.pips == null ? [] : resp.pips;
                this.totalPips = this._pips.length > 0 ? this._pips.reduce((x, y) => x + y.TotalNumber, 0) : 0;
                if (isNaN(this.totalPips) || Number.isNaN(this.totalPips)) {
                    this.totalPips = 0;
                }

                this._favored = resp.position;
                this._loss = this._profit && this._profit.length && this._profit.length > 0 ? this._profit.filter(x => x <= 0) : [];

                this._success = this._profit && this._profit.length && this._profit.length > 0 ? this._profit.filter(x => x > 0) : [];

                this.timeSpent = resp.timeSpent;

                this.topNotes = resp.topNotes;
                this.loadingProfile = false;
                if (this.topNotes) {
                    this.topNotes = this.topNotes.sort(function (a, b) {
                        if (!b.dateCreated) {
                            return -1;
                        }
                        return ((new Date(b.dateCreated).getTime()) - (new Date(a.dateCreated).getTime()));
                    });
                    if (this.topNotes.length > 0) {
                        this.profileDocuments = this.topNotes.filter((val, index) => index < 3);
                    }
                }
                console.log('top notes', this.topNotes);
                // this.topNotes = [];
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

    ngAfterViewInit(): void {
        setTimeout(() => this.loading = false, 500);
    }


    async chooseProfileImg() {
        const dialog = this.dialog.open(ChooseProfileImgComponent, {
            context: {
                selected: this.profileImg
            }
        });
        const res = await dialog.onClose.toPromise();
        if (res) {
            this.profileImg = res;
            this.saveImage('profile-image', res);
            this._router.routeReuseStrategy.shouldReuseRoute = () => false;
            this._router.onSameUrlNavigation = 'reload';
            this._router.navigate(['/profile/']).then();
        }
    }

    gcd(a, b) {
        if (b > a) {
            let temp = a;
            a = b;
            b = temp;
        }
        while (b != 0) {
            let m = a % b;
            a = b;
            b = m;
        }
        return a;
    }

    /* ratio is to get the gcd and divide each component by the gcd, then return a string with the typical colon-separated value */
    ratio(x, y) {
        let c = this.gcd(x, y);
        return '' + (x / c) + ':' + (y / c);
    }

    saveImage(key, url) {
        localStorage.setItem(key, url);
    }

    changeBio = () => {
        this.bioEdit = true;
        this.edit = this.bio.bio;
    };

    saveBio = () => {
        this.savingBio = true;
        this._dataservice
            .postCall<any>(this._configuration.SaveProfileBioApi, { bio: this.edit })
            .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.savingBio = false;
                    this.alertModalMessage = resp.message;
                    $('#alertModal').modal('show');
                    return;
                }

                this.savingBio = false;
                this.bio.bio = this.edit;
                this.edit = '';

                this.bioEdit = false;
            },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                    this.savingBio = false;
                },
                () => {
                });
    };

    addRow() {
        this.loading = true;
        setTimeout(() => this.loading = false, 1000);
        this.dynamicArray = [];
        this.dynamicArray = [
            {
                name: 'Michael Alonso',
                username: 'Olivier_volvic',
                userImage: './assets/AvatarsPremium/Premium3.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
            {
                name: 'Olivier Volvic',
                username: 'Alexbenson',
                userImage: './assets/AvatarsPremium/Premium4.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
            {
                name: 'AlexBenson',
                username: 'Michael.alonso',
                userImage: './assets/AvatarsPremium/Premium2.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
            {
                name: 'Sanjar Parmar',
                username: 'Jentrades101',
                userImage: './assets/AvatarsPremium/Premium6.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
            {
                name: 'Jen Trades',
                username: 'Sanjay_parmar14',
                userImage: './assets/AvatarsPremium/Premium5.png',
                userWiz: 'XRP TO THE MOON! WE WILL SEE $100 SOON, TIME TO LOAD UP!!!',
                wizTime: '1 day ago'
            },
        ];
        console.log(this.dynamicArray);
        return true;
    }

    async chooseHeaderImg() {
        const dialog = this.dialog.open(ChooseHeaderImgComponent, {
            context: {
                selected: this.headerImg,
                level: 1
            }
        });
        const res = await dialog.onClose.toPromise();
        if (res) {
            this.headerImg = res;
            this.saveImage('header-image', res);
        }
    }

    get isMbScreen() {
        return this.windowWidth < 576;
    }

    technicalHelp = () => {

        this.error = false;
        if (this.technicalForm.valid) {
            this.sending = true;

            let name = this.technicalForm.controls['name'].value;
            let issue = this.technicalForm.controls['issue'].value;

            this._dataservice
                .postCall<any>(this._configuration.TechnicalSupportApi, { name: name, issue: issue })
                .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.sending = false;
                        this.alertModalMessage = resp.message;
                        $('#alertModal').modal('show');
                        return;
                    }

                    this.sending = false;

                    this.alertModalMessage = resp.message;
                    $('#alertModal').modal('show');
                    this.technicalForm = new FormGroup({
                        'name': new FormControl('', [Validators.required]),
                        'issue': new FormControl('', [Validators.required, Validators.maxLength(1000)]),
                    });
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
}
