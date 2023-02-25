import { Component, OnInit, HostListener } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from '../dataservice/app.constant.component';

@Component({
  selector: 'app-header-live',
  templateUrl: './liveHeader.component.html',
  styleUrls: ['./liveHeader.component.scss']
})
export class HeaderComponent implements OnInit {

  isLargeScreen: boolean = false;
  name: any;
  links = [
    { link: 'dashboard', title: 'Dashboard' }, 
	{ link: 'course', title: 'Course' },       
    { link: 'library', title: 'Library' },	
	{ link: 'examinations', title: 'Examinations' },
	{ link: 'traders-hub', title: 'Trader\'s Hub' },
	{ link: 'tradingview', title: 'Charts' },	
	{ link: 'portfolio', title: 'Portfolio' },
	{ link: 'journal', title: 'Journal' },
	{ link: 'technicals', title: 'Technicals' },		
	{ link: 'WZRD-wednesdays', title: 'WZRD Wednesdays' },
	{ link: 'podcasts', title: 'Podcasts' },
	// { link: 'news', title: 'News' },		
	//{ link: 'WizMe', title: 'WizMe' },	
	//{ link: 'WZRD-book', title: 'WZRD Book' },  
	{ link: 'battle-of-wzrds', title: 'Battle of WZRDs' },	 
  ]
  
  title: string = "";
  url: string[];
  profileImage: string = '';

  constructor(private sidebar: NbSidebarService, private router: Router, private _configuration: Configuration) {
    this.profileImage = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
  }

  async ngOnInit() {
    this.setScreen(window.innerWidth);
    this.url = this.router.url.split("/");
    this.title = this.url[this.url.length - 1].replace("-", " ");

    let item = localStorage.getItem(this._configuration.NameKey);
    this.name = item;
  }

  toogleSidebar() {
    this.sidebar.toggle(false, 'right');
  }

  backLink() {
    const link = this.url[this.url.length - 2];

    return link ? `/${link}`:'/dashboard';
  }

  @HostListener("window:resize", ['$event.target']) resize(e) {
    this.setScreen(e.innerWidth);
  }

  setScreen(width: number) {
    this.isLargeScreen = width >= 1366 ? true : false;
  }
}
