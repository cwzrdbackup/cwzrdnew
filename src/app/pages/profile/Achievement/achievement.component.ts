import { Configuration } from './../../dataservice/app.constant.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { AddEventComponent } from './components/add-event/add-event.component';

import { DataService } from '../../dataservice/utility.dataservice.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../dataservice/apiservice.component';
declare var $: any;


const URL = "/assets/Achievement/";

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  page: any;
  alertModalMessage: string = '';

  pages = ["page1.html", "page2.html", "page3.html"];

  currentPage = 0;

  isMobile: boolean = false;

  private pageNumberInput: number;

  private inputVar: number;
  public totalNumber: number;
  public totalAchievements: number = 0;
  public achievements: any;
  achievementsDetails: any;
  public sending: boolean;
  pageNo = -1;
  achievementsArr = [];
  mainLoading:any;
  achievementDetailId: number;
  achievementDetailObj: any;
  maximized = false;
  rankArray: any = [];
  rankImg: any;
  currentRank = '';
  isAlreadyClicked = false;
  private stickerAlignment = ['left', 'right', 'start', 'center'];
  pageOneDisplay:boolean = true;
  pageTwoDisplay:boolean = false;

  windowWidth: number;
  randomStickerStyle = Array.from({length: 10}, () => this.stickerAlignment[Math.floor(Math.random()*this.stickerAlignment.length)]);;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }  

  constructor(private http: HttpClient,
    private dialog: NbDialogService, private _dataservice: ApiService, private _router: Router, private router: Router,
    private route: ActivatedRoute,
    private toastrService: NbToastrService,
    private _configuration: Configuration,
    private _passingDataservice: DataService) { }


  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    console.log(this.isXsScreen);

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

    this.sending = true;
    this._dataservice
      .postCall<any>(this._configuration.GetProfileAchievementsApi, {})
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.sending = false;
          this.alertModalMessage = resp.message;
          $('#alertModal').modal('show');
          return;
        }

        this.achievements = resp.achievements;
        this.achievementsDetails = resp.achievements;
        this.currentRank = resp.currentRank;
        console.log("this.achievementsDetails", this.achievementsDetails);
        this.rankImg=this.rankArray.filter(x=>x.id==this.currentRank)[0];

        this.totalNumber = this.achievements.length;

        this.totalAchievements = this.achievements.filter(x => x.isDone == 1).length;
        console.log(this.achievements);
        this.achievementDataArrange();


        this.sending = false;
      },
        error => {
          console.log(error);
          this.sending = false;
          this.toastrService.show(this._configuration.ErrorFetchingResult, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });

        },
        () => {

        });


    this.loadPage();

    this.inputVar = 1;

    const input = document.getElementById("pageBox");
    let func = (e) => this.keyUp(e);
    input.onfocus = () => {
      window.addEventListener("keyup", func, true)
    }
    input.onblur = () => {
      window.removeEventListener("keyup", func, true);
    }
  }

  achievementDataArrange() {

    const arraySets1 = [];
    while (this.achievements.length > 0) {
      const chunksArrays = this.achievements.splice(0, 10);
      arraySets1.push(chunksArrays);
      console.log(arraySets1);

    }
    while (arraySets1.length > 0) {
      const chunksarrays = arraySets1.splice(0, 2);
      this.achievementsArr.push(chunksarrays);
    }
    for (let i = 0; i < this.achievementsArr.length; i++) {
      for (let j = 0; j < this.achievementsArr[i].length; j++) {
        this.achievementsArr[i][j].bgImage = i + i + j + 1 + '.jpg';
        for (let k = 0; k < this.achievementsArr[i][j].length; k++) {
          this.achievementsDetails.push(this.achievementsArr[i][j][k]);
        }
      }
    }
  }
  navigationNext() {
    if (this.pageNo === this.achievementsArr.length - 1 && this.pageTwoDisplay == false) {
      this.pageOneDisplay = false;
      this.pageTwoDisplay = true;
    } else if (this.pageNo !== this.achievementsArr.length - 1 && this.isXsScreen) {
      if (this.pageOneDisplay) {
        this.pageOneDisplay = false;
        this.pageTwoDisplay = true;
      } else {
        this.randomStickerStyle = Array.from({length: 10}, () => this.stickerAlignment[Math.floor(Math.random()*this.stickerAlignment.length)]);
        this.pageNo++;
        this.pageOneDisplay = true;
        this.pageTwoDisplay = false;
      }
    } else if (this.pageNo === this.achievementsArr.length - 1) {
      return
    } else {
      this.randomStickerStyle = Array.from({length: 10}, () => this.stickerAlignment[Math.floor(Math.random()*this.stickerAlignment.length)]);
      this.pageNo++;
    }
  }
  navigationPrev() {
    if (this.pageNo === -1 && this.pageOneDisplay == false ) {
      this.pageOneDisplay = true;
      this.pageTwoDisplay = false;
    } else if (this.pageNo !== -1 && this.isXsScreen) {
      if (this.pageTwoDisplay) {
        this.pageOneDisplay = true;
        this.pageTwoDisplay = false;
      } else {
        this.randomStickerStyle = Array.from({length: 10}, () => this.stickerAlignment[Math.floor(Math.random()*this.stickerAlignment.length)]);
        this.pageNo--;
        this.pageOneDisplay = false;
        this.pageTwoDisplay = true;
      }
    } else if (this.pageNo === -1) {
      return
    } else {
      this.pageOneDisplay = true;
      this.randomStickerStyle = Array.from({length: 10}, () => this.stickerAlignment[Math.floor(Math.random()*this.stickerAlignment.length)]);
      this.pageNo--;
    }
  }
  achievementDetail(achievementDetail) {
    this.achievementDetailObj = achievementDetail;
    this.achievementDetailId = achievementDetail.id;
  }
  achievementDetailnavigate(navType) {
    switch (navType) {
      case 'next':
        if (this.achievementDetailId !== this.achievements.length) {
          this.achievementDetailId++;
        }
        break;
      case 'prev':
        if (this.achievementDetailId !== 1) {
          this.achievementDetailId--;
        }
        break;
    }
    console.log(this.achievementDetailId);

    for (let i = 0; i < this.achievementsDetails.length; i++) {
      if (this.achievementsDetails[i].id === this.achievementDetailId) {
        this.achievementDetailObj = this.achievementsDetails[i];
      }
    }
   
    console.log(this.achievementDetailObj);

  }
  ngAfterViewInit(): void {

    // (<HTMLInputElement>document.getElementById("pageBoxMax")).addEventListener("keypress", function (evt) {
    //   if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
    //     evt.preventDefault();
    //   }
    // });

    // $("#tableContents").hover(function () {
    //   $("#tableContents").attr({ "src": "./assets/tableofcontentsgreen.svg" })
    //   $("#tableContents").css({ "cursor": "pointer" })
    // }, function () {
    //   $("#tableContents").attr("src", "./assets/tableofcontentspurple.svg")
    // });

    // $("#tableContents").click(function () {
    //   $(".tableOfContentsContainer").slideToggle();
    // });

    // $("#bookmark").click(function () {
    //   $("#bookmark").attr({ "src": "./assets/bookmarkgreen.svg" });
    // });

    // $("#bookmark").hover(function () {
    //   $("#bookmark").attr({ "src": "./assets/bookmarkgreen.svg" })
    //   $("#bookmark").css({ "cursor": "pointer" })
    // }, function () {
    //   $("#bookmark").attr("src", "./assets/bookmarkpurple.svg")
    // });
    // $("#expand").hover(function () {
    //   $("#expand").attr({ "src": "./assets/maximizegreen.svg" })
    //   $("#expand").css({ "cursor": "pointer" })
    // }, function () {
    //   $("#expand").attr("src", "./assets/maximizepurple.svg")
    // });

    // $("#expand").click(function () {
    //   console.log("hello");
    // });

    const input = document.getElementById("todo-input");
    let func = (e) => this.keyUp(e);
    input.onfocus = () => {
      window.addEventListener("keyup", func, true)
    }
    input.onblur = () => {
      window.removeEventListener("keyup", func, true);
    }

  }



  keyUp(e) {
    if (e.keyCode === 13) {
      //	  this.pageNumberInput = ((<HTMLInputElement> document.getElementById("pageBox")).value - 1);
      this.currentPage = this.pageNumberInput;
      this.loadPage();
    }
  }

  loadPage() {
    this.http.get(URL + this.pages[this.currentPage], {
      responseType: "text",
      headers: new HttpHeaders()
        .set("Access-Control-Allow-Origin", "*")
        .set("Content-type", "text/html")
    }).subscribe(res => {
      this.page = res
    })

  }

  maximize = () => {
    this.maximized = !this.maximized;
  };

  next() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage += 1;
      this.loadPage();
      this.inputVar = this.currentPage + 1;

    }
  }

  prev() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.loadPage();
      this.inputVar = this.currentPage + 1;
    }
  }

  addEvent() {
    $(".book-alignment").css("display", "none");
    const ref = this.dialog.open(AddEventComponent);
    $("#minimizeMax").click(function () {
      ref.close();
    });
    ref.onClose.subscribe(res => {
      $(".tableOfContentsContainer").hide();
      $(".book-alignment").css("display", "block");
      $(".scrollable-container").css({
        "position": "relative",
        "z-index": "99999",
      });
      if (res) {

      }
    });
  }

  setRandomStyle(pos) {
    const randomStyle = {
      'text-align': `${this.randomStickerStyle[pos]}`
    };
    return randomStyle
  }

  openSticker(achievement, $event) {
    $event.preventDefault();
    $event.stopPropagation();
    if (!this.isAlreadyClicked) {
      this.isAlreadyClicked = true;
      setTimeout(() => {
        this.isAlreadyClicked = false;
      }, 7030 );
      this._dataservice.showAchievements([achievement]);
    }
  }
}
