(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-book-book-module~pages-calculator-calculator-module~pages-course-course-module~pages-d~db7e05cf"],{

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flexCenter\">\n\n\t<div routerLink=\"/dashboard\" class=\"logo-dashboard\"></div>\n\t<span style=\"flex: 1 auto;\"></span>\n\t<nb-actions size=\"large\" *ngIf=\"isLargeScreen\">\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/dashboard\"><div class=\"new-badge\">New</div>Dashboard</nb-action>\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/wzrd-contributors\"><div class=\"new-badge\">New</div>WZRD Contributors</nb-action> -->\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/course\">Course</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/library\"><div class=\"new-badge\">New</div>Library</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/examination\"><div class=\"new-badge\">New</div>Examinations</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/traders-hub\"><div class=\"new-badge\">New</div>Trader's Hub</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/charts\">Charts</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/portfolio\"><div class=\"new-badge\">New</div>Portfolio</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/trade-tracker\"><div class=\"new-badge\">New</div>Trade Tracker</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/journal\">Journal</nb-action>\n\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/position-size-calculator\">Calculator</nb-action>\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/trade-tracker\"><div class=\"new-badge\" *ngIf=\"showBadgeTracker\">New</div>Trade Tracker</nb-action> -->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/technicals\"><div class=\"new-badge\">New</div>Technicals</nb-action> -->\n\t\t<nb-action class=\"whiteColor dropdown dropdown-extra\" style=\"cursor: auto !important\"><span\n\t\t\t\tclass=\"dropbtn pr-0\"><div class=\"new-badge\">New</div>Technicals</span>\n\t\t\t<div class=\"dropdown-content dropdown-content-extra\">\n\t\t\t\t<nb-action routerLink=\"/technicals/cryptocurrency\" class=\"link whiteColor\">Cryptocurrency</nb-action>\n\t\t\t\t<nb-action routerLink=\"/technicals/forex\" class=\"link whiteColor\">Forex</nb-action>\n\t\t\t</div>\n\t\t\t<div class=\"dropdown-overlay\"></div>\n\t\t\t<div class=\"dropdown-arrow-up dropdown-arrow-up-extra\"></div>\n\t\t</nb-action>\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/WZRD-wednesdays\">WZRD Wednesdays</nb-action> -->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/podcasts\">Podcasts</nb-action> -->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/news\">News</nb-action> -->\n\t\t<!--<nb-action class=\"header-link whiteColor cap\">WizMe</nb-action>-->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\" routerLink=\"/battle-of-wzrds\">Battle of WZRDs</nb-action> -->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap\">WZRD Marketplace</nb-action> -->\n\t\t<!-- <nb-action class=\"header-link whiteColor cap notification header-link-hover\">\n\t\t\t<app-notifications></app-notifications>\n\t\t</nb-action> -->\n\t\t<nb-action class=\"whiteColor dropdown\" style=\"cursor: auto !important\">\n\t\t\t<div class=\"new-badge-name\">New</div>\n\t\t\t<span\n\t\t\t\tclass=\"dropbtn\">{{name| titlecase}}</span><span><img class=\"profile-header\"\n\t\t\t\t\tsrc=\"{{profileImage}}\"></span>\t\t\t\n\t\t\t<div class=\"dropdown-content\">\n\t\t\t\t<nb-action routerLink=\"/profile\" class=\"link whiteColor\">Profile</nb-action>\n\t\t\t\t<nb-action routerLink=\"/settings\" class=\"link whiteColor\"><div class=\"new-badge settings-align\">New</div>Settings</nb-action>\n\t\t\t\t<nb-action (click)=\"logout()\" class=\"link whiteColor\">Log Out</nb-action>\n\t\t\t</div>\n\t\t\t<div class=\"dropdown-overlay\"></div>\n\t\t\t<div class=\"dropdown-arrow-up\"></div>\n\t\t</nb-action>\n\t</nb-actions>\n\t<nb-actions size=\"medium\" *ngIf=\"!isLargeScreen\">\n\t\t<nb-action (click)=\"toogleSidebar()\" icon=\"nb-menu\" style=\"padding: 0;\"></nb-action>\n\t</nb-actions>\n</div>\n\n<nb-sidebar right fixed tag=\"right\" state=\"collapsed\" *ngIf=\"!isLargeScreen\">\n\t<nb-actions size=\"medium\" class=\"py-2\">\n\t\t<nb-action (click)=\"toogleSidebar()\" icon=\"nb-close\" class=\"p-0\"></nb-action>\n\t</nb-actions>\n\t<nb-list>\n\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/dashboard\"><div class=\"new-badge\">New</div>Dashboard</nb-list-item>\n\t\t\n\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('education')\" >Education <span [ngClass]=\"educationSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t<!-- <nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/wzrd-contributors\"><div class=\"new-badge\">New</div>WZRD Contributors</nb-list-item> -->\n\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/course\">Course</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/library\"><div class=\"new-badge\">New</div>Library</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/examination\"><div class=\"new-badge\">New</div>Examinations</nb-list-item>\n\t\t\n\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('trader')\" >Traders Essentials <span [ngClass]=\"traderSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/traders-hub\"><div class=\"new-badge\">New</div>Trader's Hub</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/charts\">Charts</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/portfolio\"><div class=\"new-badge\">New</div>Portfolio</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/journal\">Journal</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/trade-tracker\"><div class=\"new-badge\">New</div>Trade Tracker</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/position-size-calculator\">Calculator</nb-list-item>\n\t\t\t<!-- <nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/trade-tracker\"><div class=\"new-badge\" *ngIf=\"showTradeTracker\">New</div>Trade Tracker</nb-list-item> -->\n\t\t\n\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('material')\" >Materials <span [ngClass]=\"materialSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/technicals\"><div class=\"new-badge\">New</div>Technicals</nb-list-item>\n\t\t\t<!-- <nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/WZRD-wednesdays\">WZRD Wednesdays</nb-list-item> -->\n\t\t\t<!-- <nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/podcasts\">Podcast</nb-list-item> -->\n\t\t\t<!-- <nb-list-item class=\"link whiteColor cap\" routerLink=\"/news\">News</nb-list-item> -->\n\t\t\t<!-- <nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/news\">News</nb-list-item> -->\n\n\t\t<!--<nb-list-item class=\"link whiteColor cap\">WizMe</nb-list-item>-->\n\t\t<!-- <nb-list-item class=\"link whiteColor cap\" routerLink=\"/battle-of-wzrds\">Battle of WZRDs</nb-list-item> -->\n\n\t\t<!-- <nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('wzrd')\" >WZRD Marketplace  <span [ngClass]=\"wzrdMarketPlaceSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >New</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Popular</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Trending</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >News</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Avatars</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Headers</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >WizCoins</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Order History</nb-list-item>\n\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >My Account</nb-list-item> -->\n\n\t\t<!-- <nb-list-item class=\"link whiteColor cap\"><a href=\"https://wzrd.store\" target=\"_blank\">WZRD Store</a></nb-list-item> -->\n\t\t<!-- <nb-list-item class=\"link whiteColor cap\"><app-notifications></app-notifications></nb-list-item> -->\n\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/profile\">Profile</nb-list-item>\n\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/settings\"><div class=\"new-badge\">New</div>Settings</nb-list-item>\n\t\t<nb-list-item class=\"link whiteColor cap\" style=\"margin-bottom: 150px\" (click)=\"logout()\">Logout</nb-list-item>\n\t\t<!-- <nb-list-item><span class=\"usernameBottom\">{{name| titlecase}}</span><span><img class=\"profile-header-bottom\" src=\"./assets/profile/cryptowzrd_logo.png\"></span></nb-list-item> -->\n\t</nb-list>\n</nb-sidebar>\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebar, router, apiService, _configuration) {
        this.sidebar = sidebar;
        this.router = router;
        this.apiService = apiService;
        this._configuration = _configuration;
        this.isLargeScreen = false;
        this.isMediumScreen = false;
        this.educationSubMenu = false;
        this.traderSubMenu = false;
        this.materialSubMenu = false;
        this.wzrdMarketPlaceSubMenu = false;
        this.showBadgeLibrary = false;
        this.showBadgeTradersHub = false;
        this.showBadgePortfolio = false;
        // showBadge: boolean = false;
        this.links = [
            { link: 'dashboard', title: 'Dashboard' },
            { link: 'library', title: 'Library' },
            { link: 'examinations', title: 'Examinations' },
            { link: 'traders-hub', title: 'Trader\'s Hub' },
            { link: 'charts', title: 'Charts' },
            { link: 'portfolio', title: 'Portfolio' },
            { link: 'journal', title: 'Journal' },
            { link: 'technicals', title: 'Technicals' },
            { link: 'WZRD-wednesdays', title: 'WZRD Wednesdays' },
            { link: 'podcasts', title: 'Podcasts' },
            { link: 'news', title: 'News' },
            { link: 'WizMe', title: 'WizMe' },
            // { link: 'WZRD-book', title: 'WZRD Book' },
            { link: 'battle-of-wzrds', title: 'Battle of WZRDs' },
        ];
        this.title = '';
        this.profileImage = '';
        this.profileImage = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
        /*console.log('this.profileImage~' + this.profileImage);
        console.log(localStorage.getItem(this._configuration.profileImageKey));*/
    }
    HeaderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.checkRouteForMenu();
                this.setScreen(window.innerWidth);
                this.url = this.router.url.split('/');
                this.title = this.url[this.url.length - 1].replace('-', ' ');
                this.showBadgeLibrary = localStorage.getItem(this._configuration.showBadgeTKey2) ? false : true;
                this.showBadgeTradersHub = localStorage.getItem(this._configuration.showBadge2) ? false : true;
                this.showBadgePortfolio = localStorage.getItem(this._configuration.showBadge3) ? false : true;
                item = localStorage.getItem(this._configuration.NameKey);
                this.name = item;
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.toogleSidebar = function () {
        this.sidebar.toggle(false, 'right');
    };
    HeaderComponent.prototype.backLink = function () {
        var link = this.url[this.url.length - 2];
        return link ? "/" + link : '/dashboard';
    };
    HeaderComponent.prototype.resize = function (e) {
        this.setScreen(e.innerWidth);
    };
    HeaderComponent.prototype.setScreen = function (width) {
        this.isLargeScreen = width >= 1366 ? true : false;
        this.isMediumScreen = width >= 768 ? true : false;
    };
    HeaderComponent.prototype.toggleSubMenu = function (subMenu) {
        switch (subMenu) {
            case 'education':
                this.educationSubMenu = !this.educationSubMenu;
                break;
            case 'trader':
                this.traderSubMenu = !this.traderSubMenu;
                break;
            case 'material':
                this.materialSubMenu = !this.materialSubMenu;
                break;
            case 'wzrd':
                this.wzrdMarketPlaceSubMenu = !this.wzrdMarketPlaceSubMenu;
                break;
            default:
                break;
        }
    };
    HeaderComponent.prototype.checkRouteForMenu = function () {
        if (this.router.url.includes('course') ||
            this.router.url.includes('library') ||
            this.router.url.includes('examination')) {
            this.educationSubMenu = true;
        }
        else if (this.router.url.includes('traders-hub') ||
            this.router.url.includes('charts') ||
            this.router.url.includes('portfolio') ||
            this.router.url.includes('journal')) {
            this.traderSubMenu = true;
        }
        else if (this.router.url.includes('technical') ||
            this.router.url.includes('WZRD-wednesdays') ||
            this.router.url.includes('podcast') ||
            this.router.url.includes('news')) {
            this.materialSubMenu = true;
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.apiService.logoutUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "resize", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/header/header.module.ts ***!
  \***********************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _notificationDropDown_notificationDropDown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notificationDropDown/notificationDropDown.module */ "./src/app/pages/notificationDropDown/notificationDropDown.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
//import { ThemeSwitcherListComponent } from '../theme-switcher/themes-switcher-list/themes-switcher-list.component';


var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
                _notificationDropDown_notificationDropDown_module__WEBPACK_IMPORTED_MODULE_4__["NotificationDropDownModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());

//add ThemeSwitcherComponent, ThemeSwitcherListComponent to declarations


/***/ }),

/***/ "./src/app/pages/notificationDropDown/notificationDropDown.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/notificationDropDown/notificationDropDown.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-action class=\"header-link whiteColor cap notification\" *ngIf=\"isLargeScreen\">\n  <i class=\"fal fa-bell notificationSymbol\" aria-hidden=\"true\">\n    <div class=\"notificationNumber\">{{notificationCount}}</div>\n  </i>\n  <div class=\"notification-overlay\" *ngIf=\"notificationCount > 0\"></div>\n  <div class=\"notification-arrow-up\" *ngIf=\"notificationCount > 0\"></div>\n  <div class=\"item\" *ngIf=\"notificationCount > 0\"></div>\n  <nb-card class=\"notification-content\" style=\"display: none;\" *ngIf=\"notificationCount > 0\">\n    <nb-card-header class=\"nb-notification-header flex-vertical\">\n      <div class=\"notificationHeaderLeft\">Notifications</div>\n      <div class=\"notificationHeaderRight\" (click)=\"readAllNotificationClick()\"><a class=\"header-link\">Mark all read</a>\n      </div>\n    </nb-card-header>\n    <nb-card-body class=\"p-0 notification-body\">\n      <div *ngFor=\"let notification of notifications\" class=\"my-1 center-noti\">\n        <div class=\"col-12 p-0\">\n          <div [className]=\"'notificationRoundContainer center-noti battleofwizards-notification-' + notification.type\">\n            <div class=\"notificationInnerContainer\">\n              <div class=\"flex-vertical\">\n                <div class=\"col-3 text-center pr-0\">\n                  <img class=\"notificationIcon\" src=\"{{notification.image}}\" />\n                </div>\n                <div class=\"col-9\">\n                  <div class=\"notificationTitle\">\n                    {{notification.title}}\n                  </div>\n                  <div class=\"notificationDescription\">\n                    {{notification.message}}\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"notificationTime\">\n              {{moment(notification.dateCreated).fromNow()}}\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti4.png\" /></p>\n      <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti5.png\" /></p>\n      <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti6.png\" /></p>\n      <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti7.png\" /></p>\n      <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti3.png\" /></p>\n      <p class=\"notificationRow\"><img class=\"notificationsBar\" src=\"../../../assets/noti4.png\" /></p> -->\n    </nb-card-body>\n    <nb-card-footer class=\"text-center nb-notification-footer\">\n      <a class=\"header-link-hover p-0 see-all-size\" [routerLink]=\"['/notifications']\">See all notifications</a>\n    </nb-card-footer>\n  </nb-card>\n</nb-action>\n\n<nb-action *ngIf=\"!isLargeScreen\">\n  <div class=\"noti-text\" [routerLink]=\"['/notifications']\">\n    Notifications\n    <div class=\"notificationNumberMobile\">{{notificationCount}}</div>\n  </div>\n</nb-action>"

/***/ }),

/***/ "./src/app/pages/notificationDropDown/notificationDropDown.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/notificationDropDown/notificationDropDown.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/notificationDropDown/notificationDropDown.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/notificationDropDown/notificationDropDown.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropDownComponent", function() { return NotificationDropDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var NotificationDropDownComponent = /** @class */ (function () {
    function NotificationDropDownComponent(_dataservice, _passingDataservice, _notificationService, toastrService, _configuration) {
        this._dataservice = _dataservice;
        this._passingDataservice = _passingDataservice;
        this._notificationService = _notificationService;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_7__;
        this.isLargeScreen = false;
        this.isMediumScreen = false;
        this.user = this._passingDataservice.getCurrentUser();
    }
    NotificationDropDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("notification loaded!!!");
        this.setScreen(window.innerWidth);
        this._dataservice
            .getAll(this._configuration.GetAllNotificationsApi + this.user.userId)
            .subscribe(function (resp) {
            _this.notifications = _this.attachImagesToNotifications(resp.notifications);
            _this.notificationCount = _this.notifications.length;
            console.log(_this.notifications);
        });
        this._notificationService.subscribeToAllNotifications()
            .subscribe(function (resp) {
            console.log(resp);
        });
        this._notificationService.subscribeToNewNotifications()
            .subscribe(function (resp) {
            console.log(resp);
            _this.notifications.push(resp.notification);
            _this.notifications = _this.attachImagesToNotifications(_this.notifications);
            _this.notificationCount = _this.notifications.length;
        });
    };
    NotificationDropDownComponent.prototype.resize = function (e) {
        this.setScreen(e.innerWidth);
    };
    NotificationDropDownComponent.prototype.setScreen = function (width) {
        this.isLargeScreen = width >= 1366 ? true : false;
        this.isMediumScreen = width >= 768 ? true : false;
    };
    NotificationDropDownComponent.prototype.readAllNotificationClick = function () {
        var _this = this;
        console.log("read notification clicked!");
        this._dataservice
            .postCall(this._configuration.MarkAllNotificationsReadApi + this.user.userId, this.user)
            .subscribe(function (resp) {
            _this.toastrService.show(_this._configuration.NotificationReadSuccessfully, '', {
                status: _this._configuration.ToasterStatusSuccess,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            console.log(resp);
        });
    };
    NotificationDropDownComponent.prototype.attachImagesToNotifications = function (notifications) {
        return notifications.map(function (notification) {
            switch (notification.type) {
                case "1":
                    notification.image = "https://d308fakbqebk7c.cloudfront.net/cryptowzrd_logo_christmas_hat.png";
                    break;
                case "2":
                    notification.image = "https://cdn.shopify.com/s/files/1/0270/7842/6702/files/battle_of_wzrds_logo_homepage.png?5704";
                    break;
                case "3":
                    notification.image = "./assets/podcast_logo_150.png";
                    break;
                case "4":
                    notification.image = "./assets/wzrd_marketplace_logo_150.png";
                    break;
                case "5":
                    notification.image = "./assets/wzrd_wednesdays_logo_150.png";
                    break;
                default:
                    notification.image = "./assets/cryptowzrd_logo_150.png";
                    break;
            }
            return notification;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NotificationDropDownComponent.prototype, "resize", null);
    NotificationDropDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notificationDropDown.component.html */ "./src/app/pages/notificationDropDown/notificationDropDown.component.html"),
            styles: [__webpack_require__(/*! ./notificationDropDown.component.scss */ "./src/app/pages/notificationDropDown/notificationDropDown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_2__["Configuration"]])
    ], NotificationDropDownComponent);
    return NotificationDropDownComponent;
}());



/***/ }),

/***/ "./src/app/pages/notificationDropDown/notificationDropDown.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/notificationDropDown/notificationDropDown.module.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationDropDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropDownModule", function() { return NotificationDropDownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notificationDropDown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationDropDown.component */ "./src/app/pages/notificationDropDown/notificationDropDown.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");





//import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
//import { ThemeSwitcherListComponent } from '../theme-switcher/themes-switcher-list/themes-switcher-list.component';

var NotificationDropDownModule = /** @class */ (function () {
    function NotificationDropDownModule() {
    }
    NotificationDropDownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notificationDropDown_component__WEBPACK_IMPORTED_MODULE_3__["NotificationDropDownComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [_notificationDropDown_component__WEBPACK_IMPORTED_MODULE_3__["NotificationDropDownComponent"]],
        })
    ], NotificationDropDownModule);
    return NotificationDropDownModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-book-book-module~pages-calculator-calculator-module~pages-course-course-module~pages-d~db7e05cf.js.map