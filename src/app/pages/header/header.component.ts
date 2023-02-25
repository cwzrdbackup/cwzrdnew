import {Component, HostListener, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {Router} from '@angular/router';
import { ApiService } from '../dataservice/apiservice.component';
import { Configuration } from '../dataservice/app.constant.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isLargeScreen: boolean = false;
    isMediumScreen: boolean = false;
    educationSubMenu: boolean = false;
    traderSubMenu: boolean = false;
    materialSubMenu: boolean = false;
    wzrdMarketPlaceSubMenu: boolean = false;
    name: any;
    showBadgeLibrary = false;
    showBadgeTradersHub = false;
    showBadgePortfolio = false;

    // showBadge: boolean = false;
    links = [
    { link: 'dashboard', title: 'Dashboard' },
        {link: 'library', title: 'Library'},
        {link: 'examinations', title: 'Examinations'},
        {link: 'traders-hub', title: 'Trader\'s Hub'},
        {link: 'charts', title: 'Charts'},
        {link: 'portfolio', title: 'Portfolio'},
        {link: 'journal', title: 'Journal'},
        {link: 'technicals', title: 'Technicals'},
        {link: 'WZRD-wednesdays', title: 'WZRD Wednesdays'},
        {link: 'podcasts', title: 'Podcasts'},
        {link: 'news', title: 'News'},
        {link: 'WizMe', title: 'WizMe'},
        // { link: 'WZRD-book', title: 'WZRD Book' },
        {link: 'battle-of-wzrds', title: 'Battle of WZRDs'},
        // { link: 'marketplace', title: 'WZRD Marketplace' },
        // { link: 'https://wzrd.store', title: 'WZRD Store' },
    ];

    title: string = '';
    url: string[];
    profileImage: string = '';

    constructor(private sidebar: NbSidebarService, private router: Router, private apiService: ApiService, private _configuration: Configuration) {
        this.profileImage = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
        /*console.log('this.profileImage~' + this.profileImage);
        console.log(localStorage.getItem(this._configuration.profileImageKey));*/
    }

    async ngOnInit() {

        this.checkRouteForMenu();
        this.setScreen(window.innerWidth);
        this.url = this.router.url.split('/');
        this.title = this.url[this.url.length - 1].replace('-', ' ');

        this.showBadgeLibrary = localStorage.getItem(this._configuration.showBadgeTKey2) ? false : true;
        this.showBadgeTradersHub = localStorage.getItem(this._configuration.showBadge2) ? false : true;
        this.showBadgePortfolio = localStorage.getItem(this._configuration.showBadge3) ? false : true;

        let item = localStorage.getItem(this._configuration.NameKey);
        this.name = item;

        // this.showBadge = localStorage.getItem(this._configuration.showBadgeKey) ? false : true;
        // localStorage.setItem(this._configuration.showBadgeKey, 'false');
        // console.log(this.showBadge);

    }

    toogleSidebar() {
        this.sidebar.toggle(false, 'right');
    }

    backLink() {
        const link = this.url[this.url.length - 2];

        return link ? `/${link}` : '/dashboard';
    }

    @HostListener('window:resize', ['$event.target']) resize(e) {
        this.setScreen(e.innerWidth);
    }

    setScreen(width: number) {
        this.isLargeScreen = width >= 1366 ? true : false;
        this.isMediumScreen = width >= 768 ? true : false;

    }
    toggleSubMenu(subMenu) {
        switch (subMenu) {
            case 'education' :
                this.educationSubMenu = !this.educationSubMenu;
                break;
            case 'trader' :
                this.traderSubMenu = !this.traderSubMenu;
                break;
            case 'material' :
                this.materialSubMenu = !this.materialSubMenu;
                break;
            case 'wzrd' :
                this.wzrdMarketPlaceSubMenu = !this.wzrdMarketPlaceSubMenu;
                break;
            default:
            break;
        }
    }
    checkRouteForMenu() {
        if (
          this.router.url.includes('course') ||
          this.router.url.includes('library') ||
          this.router.url.includes('examination')
        ) {
          this.educationSubMenu = true;
        } else if (
          this.router.url.includes('traders-hub') ||
          this.router.url.includes('charts') ||
          this.router.url.includes('portfolio') ||
          this.router.url.includes('journal')
        ) {
          this.traderSubMenu = true;
        } else if (
          this.router.url.includes('technical') ||
          this.router.url.includes('WZRD-wednesdays') ||
          this.router.url.includes('podcast') ||
          this.router.url.includes('news')
        ) {
          this.materialSubMenu = true;
        }
    }

    logout() {
        this.apiService.logoutUser();
    }
}
