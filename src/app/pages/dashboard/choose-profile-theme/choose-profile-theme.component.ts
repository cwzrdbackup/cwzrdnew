import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef, NbToastrService, NbThemeService } from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataservice/utility.dataservice.component';
import {ApiService} from '../../dataservice/apiservice.component';

@Component({
    selector: 'app-choose-profile-theme',
    templateUrl: './choose-profile-theme.component.html',
    styleUrls: ['./choose-profile-theme.component.scss']
})
export class ChooseProfileThemeComponent implements OnInit {
    isSaving = false;
    images = [];

    themeOptions= [];
    themeNumber: any;

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
                private _configuration: Configuration,
                private themeService: NbThemeService) {
    }

    ngOnInit() {
        this.getPurchasedAvatars();

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
    }

    changeTheme(themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
        localStorage.setItem(this._configuration.ProfileTheme, themeKey);
        this.selected = themeKey;
        console.log(this.selected);
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
        // this.isSaving = true;

        // const _dataModel = JSON.stringify({theme_id: 31/*, userId: this._passingDataservice._currentUser.userId*/});

        // this._dataservice
        //     .postCall<any>(this._configuration.SaveUserProfileApi, _dataModel)
        //     .subscribe(resp => { console.log(resp);
        //             if (resp.status === this._configuration.ResponseStatusError) {
        //                 this.isSaving = false;
        //                 this.toastrService.show(this._configuration.ErrorFetchingContent, '',
        //                 {
        //                     status: this._configuration.ToasterStatusError,
        //                     duration: this._configuration.ToasterDuration,
        //                     position: this._configuration.ToasterPosition
        //                 });
        //                 return;
        //             }
        //             setTimeout(() => { // console.log(resp);
        //                 this.isSaving = false;

        //                 this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        //                 this._router.onSameUrlNavigation = 'reload';
        //                 this._router.navigate(['/dashboard']).then();

        //                 this.ref.close(this.selected); console.log(this.selected);
        //             }, 1000);
        //         },
        //         error => {
        //             console.log(error);
        //             this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        //             {
        //                 status: this._configuration.ToasterStatusError,
        //                 duration: this._configuration.ToasterDuration,
        //                 position: this._configuration.ToasterPosition
        //             });
        //             this.isSaving = false;
        //         },
        //         () => {
        //         });
            this.themeNumber = this.themeOptions.filter(x=>x.theme===this.selected)[0].id;   
            if (this.selected) {
                this._dataservice
                    .postCall<any>(this._configuration.UpdateNameValueApi, {
                        name: 'theme_id',
                        value: this.selected
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


    /*selectedImageSet(img) {
        console.log(img);
    }*/

}
