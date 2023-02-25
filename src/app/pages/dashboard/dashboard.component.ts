import { Configuration } from './../dataservice/app.constant.component';
import { Component, OnInit, ViewChild, HostListener, ElementRef, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService, NbSidebarService, NbDialogService, NbThemeService } from '@nebular/theme';
import { CustomDayCellComponent } from './components/custom-day-cell/custom-day-cell.component';
import { ApiService } from '../dataservice/apiservice.component';
import { DataService } from '../dataservice/utility.dataservice.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ChooseProfileImgComponent } from './choose-profile-img/choose-profile-img.component';
import { ChooseHeaderImgComponent } from './choose-header-img/choose-header-img.component';
import { ChooseProfileThemeComponent } from './choose-profile-theme/choose-profile-theme.component';
import { changePasswordComponent } from './change-password/change-password.component';
import { changeCountryComponent } from './change-country/change-country.component';

import moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';
import linkifyStr from 'linkifyjs/string';
import { LearningReportComponent } from './learning-report/learning-report.component';

import { HttpClient } from '@angular/common/http';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
declare var $: any;
@Pipe({ name: 'linkify' })

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [CustomDayCellComponent],
})
export class DashboardComponent implements OnInit, PipeTransform {
  @ViewChild(LearningReportComponent) child: LearningReportComponent;
  @ViewChild('deleteDialog') deleteDialog: TemplateRef<any>;

  profileImg: string = '';
  headerImg: string = '';
  theme_id: any;
  userEmail: string = '';
  userCountry: string = '';

  themeName: any;
  themeOptions;

  alertModalMessage: string = '';
  public _today: any;
  public twitter_link: any;
  public article: any;
  public twitter_feed: any;
  public time: any;
  public lesson: any;
  public nextUncompleteLesson: any;
  public examPercentage: any;
  public coursePercentage: any;
  public bookPercent: any;
  public loading: boolean;
  public upcomingLoading: boolean;
  public todoLoading: boolean;
  public addEventLoading: boolean = true;
  public userEventLoading: boolean = true;
  public currentDate: string;
  public progress: any;
  public vimeoBroadcastInfo: any = {
    url: '',
    isLive: 0,
  };
  public todaysQuote: any;
  date = new Date();
  windowWidth: number;
  dayCellComponent = CustomDayCellComponent;
  public upcomingEvents = [];
  //public userEvents:any;
  public todolist: any;
  allTodosSelected = false;
  todoSelected = false;
  public realTime: any;
  public userLocation: boolean = false;

  public dates = [
  ]
  userEvents = []


  today: number = Date.now();

  loadingProgress: number = 3;
  width: number;


  settings: WeatherSettings = {
    location: {
      cityName: 'London',
    },
    scale: TemperatureScale.CELCIUS,
  };
  weatherData: [];

  showWelcome: boolean = false;

  userEventsLoaded: boolean = false;
  eventsloaded: boolean = false;
  quotesLoading = false;
  showNew = false;
  name: any;

  @ViewChild('welcomePage') welcomePage: ElementRef;

  constructor(private toast: NbToastrService, private sidebar: NbSidebarService,
    private _dataservice: ApiService, private _router: Router, private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private _passingDataservice: DataService,
    private dialog: NbDialogService,
    private _configuration: Configuration,
    private themeService: NbThemeService
  ) { }
  transform(str: string): string {
    return str ? linkifyStr(str, { target: '_system' }) : str;
  }

  changeTheme(themeKey) {
    //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
    this.themeService.changeTheme(themeKey);
    console.log(themeKey);
  }
  ngOnInit(): void {

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

    // let item = localStorage.getItem(this._configuration.NameKey);
    // this.name = item;
    // let themeName = localStorage.getItem(this._configuration.ProfileTheme);
    // console.log(themeName);
    // this.themeService.changeTheme(themeName);

    const p_img = localStorage.getItem(this._configuration.ProfileImageKey);
    p_img ? this.profileImg = p_img : '';
    const h_img = localStorage.getItem(this._configuration.HeaderImageKey);
    h_img ? this.headerImg = h_img : '';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.settings = {
          location: {
            // cityName: 'London',
            latLng: {
              lat: latitude,
              lng: longitude
            }
          },
          backgroundColor: '#3d3780',
          color: '#ffffff',
          width: 'auto',
          height: 'auto',
          showWind: false,
          scale: TemperatureScale.CELCIUS,
          forecastMode: ForecastMode.DETAILED,
          showDetails: false,
          showForecast: true,
          layout: WeatherLayout.WIDE,
          language: 'en'
        };
        this.userLocation = true;
      }, (err) => console.log(err));
    } else {
      console.log("No support for geolocation")
    }

    realTime: new Date();
    this.windowWidth = window.innerWidth;
    this.addEventLoading = true;
    this.showWelcome = localStorage.getItem(this._configuration.ShowWelcomeKey) ? false : true;
    localStorage.setItem(this._configuration.ShowWelcomeKey, 'false');
    //this.showNew = localStorage.getItem(this._configuration.showBadgeTKey2) ? false : true;
    //localStorage.setItem(this._configuration.showBadgeTKey2, 'false');
    console.log(localStorage.getItem(this._configuration.showBadgeTKey2));

    setInterval(() => {
      this.realTime = new Date();
    }, 1000);

    this.quotesLoading = true;
    this._dataservice
      .getAll<any>(this._configuration.GetTodaysQuote)
      .subscribe(
        resp => {
          // console.log("USER LOCATION: ", resp)
          this.quotesLoading = false;
          if (resp.status === this._configuration.ResponseStatusError) {
            // alert("There was a problem fetching the content");
            return;
          }
          this.todaysQuote = resp.currentQuoteData;
          this.loading = false;
        },
        error => {
          // alert("An error occured while geting user location");
          this.todoLoading = false;
        },
        () => {
        });

    this.width = window.innerWidth;
    this.loading = true;
    this.upcomingLoading = true;
    this.todoLoading = true;
    this._dataservice
      .postCall<any>(this._configuration.GetTodoListApi, {})
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.todoLoading = false;
          // alert("There was a problem fetching the content");
          return;
        }
        setTimeout(() => {
          this.todolist = resp.todos;
          this.todolist = this.todolist.map(todo => {
            return { ...todo, selected: false };
          });
          this.todoLoading = false;
        }, 1000);

      },
        error => {
          console.log(error);
          // alert(this._configuration.ErrorFetchingResult);
          this.todoLoading = false;
        },
        () => {

        });
    //  

    this._dataservice
            .postCall<any>(this._configuration.GetUserApi, {})
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) { 
                        this.loading = false;
                    }
                    console.log(resp)                    
                    this.theme_id = resp.user.theme_id;
                    this.profileImg = resp.user.profile_pic;
                    this.userEmail = resp.user.email;
                    this.userCountry = resp.user.country;
                    this.headerImg = resp.user.profile_header_pic;
                    this.loading = false;
                    this.themeName = this.themeOptions.filter(x=>x.id===this.theme_id)[0].theme;
                    this.themeService.changeTheme(this.themeName);
                },
                error => {
                    // this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    // {
                    //     status: this._configuration.ToasterStatusError,
                    //     duration: this._configuration.ToasterDuration,
                    //     position: this._configuration.ToasterPosition
                    // });
                    this.loading = false;
                },
                () => {
                    this.loading = false;
                });

    this._dataservice
      .postCall<any>(this._configuration.GetUserBookProgress, { bookId: 1 })
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          // alert("There was a problem fetching the content");
          this.loadingProgress--;
          return;
        }
        this.bookPercent = resp.userBookPageProgressList.length == 0 ? 0 :

          Math.round((resp.userBookPageProgressList.filter(x => { return x.isCompleted === true }).length / resp.userBookPageProgressList.length) * 100);
        this.loadingProgress--;

      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.todoLoading = false;
          this.loadingProgress--;
        },
        () => {

        });

    this._dataservice
      .postCall<any>(this._configuration.GetChaptersList, { pageNo: 1 })
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          //alert("There was a problem fetching the content");
          this.loadingProgress--;
          return;
        }

        this.coursePercentage = parseFloat(resp.courseAverage);

        // needed timeout as circular svg was not rendering properly.
        setTimeout(() => {
          this.loadingProgress--;
        }, 1500);

      },
        error => {
          console.log(error);
          //alert(this._configuration.ErrorFetchingResult);
          this.loadingProgress--;
          this.todoLoading = false;
        },
        () => {

        });
    this._dataservice
      .getAll<any>(this._configuration.GetExaminationsListApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {


          //alert("There was a problem fetching the content");
          this.loadingProgress--;
          return;
        }
        this.examPercentage = resp.average || 0;
        this.loadingProgress--;


      },
        error => {
          console.log(error);
          //alert(this._configuration.ErrorFetchingResult);
          this.todoLoading = false;
          this.loadingProgress--;
        },
        () => {

        });
    //Get Twitter Feed

    this._dataservice
      .getAll<any>(this._configuration.GetTwitterPostApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          console.log("error twitter");
          // alert("There was a problem fetching the content");
          return;
        }
        console.log("resp");
        console.log(resp);
        this.twitter_feed = resp.sent[0].data;
        this.twitter_link = resp.sent[0].link;
        this.time = resp.sent[0].created_at;
        console.log(this.twitter_feed);
      },
        error => {
          console.log(error);
          //alert(this._configuration.ErrorFetchingResult);
          this.todoLoading = false;
        },
        () => {

        });

    // Get Upcoming Events List
    this._dataservice
      .getAll<any>(this._configuration.GetEventsListApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.upcomingLoading = false;
          //alert("There was a problem fetching the content");
          return;
        }
        console.log('events', resp.events);
        this.upcomingEvents = resp.events;
        this.addUpcomingEventsToCal();
        this.upcomingLoading = false;
      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.upcomingLoading = false;
        },
        () => {

        });

    // Get User Events List
    var currentMonth = moment(new Date()).format('MM');
    var currentYear = moment(new Date).format("YYYY");
    this.userEventLoading = true;
    this._dataservice
      .postCall<any>(this._configuration.GetUserEventsListApi, JSON.stringify({ month: currentMonth, year: currentYear }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.userEventLoading = false;
          this.toast.show(this._configuration.ErrorFetchingContent, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }

        this.userEvents = resp.userEvents;
        this.performDateUpdate();
        // (async () => {

        //   await this.performDateUpdate();
        // })();
        // this.performDateUpdate();
        this.dayCellComponent.setDates(this.dates);
        // this.dayCellComponent.
        this.userEventLoading = false;

      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.userEventLoading = false;
        },
        () => {

        });

    // GET Article

    this._dataservice
      .postCall<any>(this._configuration.GetShopifyArticlesApi, JSON.stringify({
        pageNo: 1,
        since_id: null
      }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.loading = false;
          this.toast.show(this._configuration.ErrorFetchingContent, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }
        console.log(resp.articles[0])
        this.article = resp.articles[0];

      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.loading = false;
        },
        () => {

        });

    // GET Lesson
    //  chapter/getLesson

    this._dataservice
      .getAll<any>(this._configuration.GetChapterLessonApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.loading = false;
          this.toast.show(this._configuration.ErrorLoadingLessons, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }

        this.lesson = resp.lesson == null ? { ChapterName: "Chapter 01", LessonId: 100011, ChapterId: 100001 } : resp.lesson;
        // console.log(this.lesson)
        // console.log('lessoned')


      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.loading = false;
        },
        () => {

        });

    // GET getNextUncompleteLesson
    // chapter/getNextUncompleteLesson
    this._dataservice
      .getAll<any>(this._configuration.GetNextUncompleteLessonApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.loading = false;
          this.toast.show(this._configuration.ErrorLoadingLessons, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }

        this.nextUncompleteLesson = resp.lesson == null ? { ChapterName: "Chapter 01", LessonId: 100011, ChapterId: 100001 } : resp.lesson;
        console.log("lesson", this.nextUncompleteLesson);
        // console.log(this.nextUncompleteLesson)
        // console.log('getNextUncompleteLesson')
      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.loading = false;
        },
        () => {

        });

    this._dataservice
      .getAll<any>(this._configuration.GetProgressByLastSevenDaysApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.userEventLoading = false;
          this.toast.show(this._configuration.ErrorLoadingData, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }

        this.progress = {
          course: resp.course.length == 0 ? [{
            dayName: "Wednesday",
            progress: 0
          }] : resp.course, book: resp.book.length == 0 ? [{
            dayName: "Wednesday",
            progress: 0
          }] : resp.book, exam: resp.exam == 0 ? [{
            dayName: "Wednesday",
            progress: 0
          }] : resp.exam
        };

        //  this.child.makeFix();

      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.userEventLoading = false;
        },
        () => {

        });

    this._dataservice
      .getAll<any>(this._configuration.GetVimeoBroadcastInfoApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          return;
        }

        this.vimeoBroadcastInfo = resp.vimeoInfo;
      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.userEventLoading = false;
        },
        () => {

        });

        this._dataservice
      .getAll<any>("dashboard/getVimeoBroadcastInfo")
      .subscribe(resp => {
        if (resp.status === 'ERROR') {
          return;
        }

        this.vimeoBroadcastInfo = resp.vimeoInfo;
      },
        error => {
          console.log(error);
          // this.toast.show("An error occured while fetching the result.", '',
          //   {
          //     status: this._configuration.ToasterStatusError,
          //     duration: this._configuration.ToasterDuration,
          //    position: this._configuration.ToasterPosition
          //   });
          //  this.userEventLoading = false;
         },
         () => {
 
         });

    // Perform Today 
    //

    //  this._dataservice
    //   .getAllOutside<any>("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=9c69759a6d8c6cb2fb6bfd02141ae440")
    //   .subscribe(resp => {
    //     console.log(resp)
    //     if(resp.status===this._configuration.ResponseStatusError)
    //     {
    //       this.loading=false;
    //       alert("There was a problem fetching the content");
    //       return;
    //     }
    //     console.log(resp)


    //   },
    //    error => {
    //      console.log(error);
    //      alert(this._configuration.ErrorFetchingResult);
    //      this.loading=false;
    //    },
    //    () => {

    //  });

    this.date = new Date();

    this.currentDate = moment(this.date).format('YYYY-MM');
    this._today = moment(this.date).format('dddd');
    console.log(this._today.substring(0, 3));
    console.log('today');


  }

  addUpcomingEventsToCal() {
    const eventsUser = [...this.userEvents];

    Array.prototype.push.apply(eventsUser, this.upcomingEvents);

    let newUpdatedEvents = eventsUser;
    this.dates = [];
    let newDates = [];
    for (var i = 0; i < newUpdatedEvents.length; i++) {
      let m = moment(newUpdatedEvents[i].eventDate).format('MM/DD/YYYY');

      let isExists = this.isInArray(newDates, new Date(m));

      if (!isExists) {
        newDates.push(new Date(m));
      }
    }
    this.dates = newDates;
    this.dayCellComponent.setDates(this.dates);
  }

  getChapter() {
    console.log(this.lesson)
    return 'chapter' + this.lesson.ChapterId.substring(5, 6);
  }

  isInArray(array, value) {
    return !!array.find(item => { return item.getTime() == value.getTime() });
  }

  async performDateUpdate() {
    for (var i = 0; i < this.userEvents.length; i++) {
      let m = moment(this.userEvents[i].eventDate).format('MM/DD/YYYY');

      let isExists = this.isInArray(this.dates, new Date(m));

      if (!isExists) {
        console.log('updated dates', m);
        this.dates.push(new Date(m));
      }

    }
  }
  async performDateUpdateAdmin() {
    for (var i = 0; i < this.userEvents.length; i++) {
      let m = moment(this.userEvents[i].eventDate).format('MM/DD/YYYY');

      let isExists = this.isInArray(this.dates, new Date(m));

      if (!isExists) {
        this.dates.push(new Date(m));
      }
    }
  }
  getMonth(date: Date) {
    return moment(date).format('MMM');
  }
  getDayNumber(date: Date) {
    return moment(date).format("DD");
  }
  getDayName(date: Date) {
    return moment(date).format("dddd").substring(0, 3);
  }
  // dateSelected(e: Date) {
  //   const idx = this.dates.findIndex(d => d.toDateString() === e.toDateString());
  //   if (idx >= 0) {
  //     this.toast.info(this.userEvents[idx].title, "Event");
  //   }
  // }
  formatTime(time: any, format: string = 'MMMM Do YYYY, h:mm:ss a') {

    return moment(time).fromNow();
    // return moment.utc(time).format(format);
  }

  dateSelected(e: Date) {
    var results = this.userEvents.filter(function (entry) { return moment(entry.eventDate).format('DD/MM/YYYY') === moment(e).format('DD/MM/YYYY'); });

    results.forEach((item, index) => {
      const location = item.location == 'N/A' ? 'Event' : item.location;
      this.toast.info(item.title, moment(item.eventDate).format('DD/MM/YYYY'), { icon: 'calendar-toastr-icon' });
      const toast = document.querySelector("nb-toast:last-child");
      if (!moment(e).isBefore(moment(), 'day')) {
        const edit = document.createElement("i");
        edit.classList.add("nb-edit", "edit");
        toast.appendChild(edit);

        edit.onclick = () => {
          // this.editEvent(this.dates[index], item, index)
          console.log(item)
          this.editEvent(item.eventDate, item, index)
        };
      }

    });

    let resultsAdmin = this.upcomingEvents.filter(function (entry) { return moment(entry.eventDate).format('DD/MM/YYYY') === moment(e).format('DD/MM/YYYY'); });

    resultsAdmin.forEach((item, index) => {
      const location = item.location == 'N/A' ? 'Event' : item.location;
      this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });
    });
    // if (this.currentDate === moment(e).format('YYYY-MM')) {

    //   var results = this.userEvents.filter(function (entry) { return moment(entry.eventDate).format('YYYY-MM-DD') === moment(e).format('YYYY-MM-DD'); });

    //   results.forEach((item, index) => {
    //     const location = item.location == 'N/A' ? 'Event' : item.location;
    //     this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });;
    //     console.log('item', item);
    //     const toast = document.querySelector("nb-toast:last-child");
    //     if (!moment(e).isBefore(moment(), 'day')) {
    //       const edit = document.createElement("i");
    //       edit.classList.add("nb-edit", "edit");
    //       toast.appendChild(edit);

    //       edit.onclick = () => {
    //         // this.editEvent(this.dates[index], item, index)
    //         this.editEvent(item.eventDate, item, index)
    //       };
    //     }

    //   });

    //   let resultsAdmin = this.upcomingEvents.filter(function (entry) { return moment(entry.eventDate).format('YYYY-MM-DD') === moment(e).format('YYYY-MM-DD'); });

    //   resultsAdmin.forEach((item, index) => {
    //     const location = item.location == 'N/A' ? 'Event' : item.location;
    //     this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });
    //   });
    //   return;
    // }
    // console.log('again dates');
    // // Get User Events List
    // var currentMonth = moment(e).format('MM');
    // var currentYear = moment(e).format("YYYY");
    // // this.userEventLoading = true;
    // this._dataservice
    //   // .getAll<any>("userEvent/list")
    //   .postCall<any>("userEvent/list", JSON.stringify({ month: currentMonth, year: currentYear }))
    //   .subscribe(resp => {
    //     if (resp.status === this._configuration.ResponseStatusError && resp.message !== 'No user event found in database.') {

    //       this.userEventLoading = false;
    //       alert("There was a problem fetching the content");
    //       return;
    //     }

    //     this.userEvents = resp.userEvents;
    //     this.userEventLoading = false;
    //     this.performDateUpdate();
    //     // (async () => {
    //     //   await this.performDateUpdate();
    //     // })();
    //     // this.performDateUpdate();

    //     this.dayCellComponent.setDates(this.dates);


    //   },
    //     error => {
    //       console.log(error);
    //       alert(this._configuration.ErrorFetchingResult);
    //       this.userEventLoading = false;
    //     },
    //     () => {

    //     });
    // this.date = e;
    // this.currentDate = moment(e).format('YYYY-MM');


  }
  toggle(checked: boolean, note: any) {

    //note.isDone=note.isDone===1?0:1;
    let isDone = note.isDone === 1 ? 0 : 1;
    this.todoLoading = true;
    this._dataservice
      .postCall<any>(this._configuration.UpdateTodoApi, JSON.stringify({ id: note.id, value: isDone }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.todoLoading = false;
          this.toast.show(this._configuration.ErrorMakingNotes, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });

          return;
        }
        setTimeout(() => {
          note.isDone = note.isDone === 1 ? 0 : 1;
          this.todoLoading = false;
        }, 1000);
        if (resp.achievement) {
          for (var i = 0; i < resp.achievement; i++) {
            this.toast.info(resp.achievement[i].achievement, "Achievement");
          }
        }


      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.todoLoading = false;
        },
        () => {

        });


  }

  addNote(note) {
    // this.toDo.unshift(note);
    this.onKeydown('s', note);
  }

  deleteNote(note) {

    this.todoLoading = true;
    this._dataservice
      .postCall<any>(this._configuration.DeleteTodoApi, JSON.stringify({ id: note.id }))
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {

          this.todoLoading = false;
          this.alertModalMessage = 'There was a problem deleting the note.';
          $('#alertModal').modal('show');
          return;
        }

        setTimeout(() => {
          this.todolist = this.todolist.filter(n => n !== note);
          this.checkAllTodosSelected();
          this.todoLoading = false;
        }, 1000);
        if (resp.achievement) {
          for (var i = 0; i < resp.achievement; i++) {
            this.toast.info(resp.achievement[i].achievement, "Achievement");
          }
        }



      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          this.todoLoading = false;
        },
        () => {

        });
  }

  selectAllNotes() {
    this.todolist.forEach(element => {
      element.selected = true;
    });
    this.allTodosSelected = true;
  }

  deselectAllNotes() {
    this.todolist.forEach(element => {
      element.selected = false;
    });
    this.allTodosSelected = false;
    this.todoSelected = false;
  }

  checkAllTodosSelected() {

    const unselectedTodos = this.todolist.filter(todo => {
      return todo.selected === false;
    });

    if (unselectedTodos && unselectedTodos.length > 0) {
      this.allTodosSelected = false
    } else {
      this.allTodosSelected = true;
    }

    if (unselectedTodos.length === this.todolist.length) {
      this.todoSelected = false;
    } else {
      this.todoSelected = true;
    }
  }
  deselectAllSelectedNotes(note) {

    const todosToDelete = note.filter(a => a.selected === true);
    if (todosToDelete.length === 0) {
      this.alertModalMessage = 'Please select a note to delete.';
      $('#alertModal').modal('show');
    }

    this.openConfirmation(this.deleteDialog, note, todosToDelete);
  }

  openConfirmation(dialog: TemplateRef<any>, note, todosToDelete) {
    this.dialog.open(dialog, { context: '' })
    .onClose.subscribe(result => {
        if (result === 'yes') {
            this.deleteAllNotes(note, todosToDelete);
        };
    });
  }

  deleteAllNotes(note, todosToDelete) {

    this.todoLoading = true;

    const todosToDeleteIds = todosToDelete.map(todo => {
      return todo.id;
    });
    let todosDeleteObj = {};
    todosDeleteObj = { id: todosToDeleteIds };
    
      this._dataservice
        .postCall<any>(this._configuration.DeleteAllTodoApi, todosDeleteObj)
        .subscribe(resp => {
          if (resp.status === this._configuration.ResponseStatusError) {
            this.todoLoading = false;
            this.alertModalMessage = 'There was a problem deleting the notes.';
            $('#alertModal').modal('show');
            return;
          }
          this._dataservice
            .postCall<any>(this._configuration.GetTodoListApi, {})
            .subscribe(resp => {
              if (resp.status === this._configuration.ResponseStatusError) {

                this.todoLoading = false;
                this.toast.show(this._configuration.ErrorFetchingContent, '',
                  {
                    status: this._configuration.ToasterStatusError,
                    duration: this._configuration.ToasterDuration,
                    position: this._configuration.ToasterPosition
                  });
                return;
              }
              setTimeout(() => {
                this.todolist = resp.todos;
                this.todolist = this.todolist.map(todo => {
                  return { ...todo, selected: false };
                });
                this.allTodosSelected = false;
                this.todoSelected = false;
                this.todoLoading = false;
              }, 1000);


            },
              error => {
                console.log(error);
                alert(this._configuration.ErrorFetchingResult);
                this.todoLoading = false;
              },
              () => {

              });
          setTimeout(() => {
            this.todolist = this.todolist.filter(n => n !== note);
            this.todoLoading = false;
          }, 1000);
          if (resp.achievement) {
            for (var i = 0; i < resp.achievement; i++) {
              this.toast.info(resp.achievement[i].achievement, "Achievement");
            }
          }

        },
          error => {
            console.log(error);
            this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
              {
                status: this._configuration.ToasterStatusError,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
              });
            this.todoLoading = false;
          },
          () => {

          });

  }

  goTo() {
    this.sidebar.toggle(false, 'right');
  }
  onKeydown(down, val) {
    // alert("It needs a bit of work.")
    // console.log(val);
    if (val != '') {
      this.todoLoading = true;
      this._dataservice
        .postCall<any>(this._configuration.AddNewTodoApi, JSON.stringify({ description: val }))
        .subscribe(resp => {
          if (resp.status === this._configuration.ResponseStatusError) {

            this.todoLoading = false;
            this.alertModalMessage = 'There was a problem deleting the note.';
            $('#alertModal').modal('show');
            return;
          }

          resp.todo.selected = false;
          this.todolist.unshift(resp.todo);
          this.checkAllTodosSelected();
          this.todoLoading = false;

          if (resp.achievement) {
            for (var i = 0; i < resp.achievement; i++) {
              this.toast.info(resp.achievement[i].achievement, "Achievement");
            }
          }

        },
          error => {
            console.log(error);
            this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
              {
                status: this._configuration.ToasterStatusError,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
              });
            this.todoLoading = false;
          },
          () => {

          });
    } else {
      this.alertModalMessage = 'Please enter some text to add an item in your to do list.';
      $('#alertModal').modal('show');
    }

  }

  ngAfterViewInit(): void {



    const input = document.getElementById("todo-input");
    let func = (e) => this.keyUp(e);
    input.onfocus = () => {
      window.addEventListener("keyup", func, true)
    }
    input.onblur = () => {
      window.removeEventListener("keyup", func, true);
    }
    const title = document.querySelector(".title");
    title.addEventListener("click", () => {
      this.date = new Date();
    })
  }

  keyUp(e) {
    if (e.keyCode === 13) {
      document.getElementById("todo-button").click();
    }
  }
  addEvent() {
    const ref = this.dialog.open(AddEventComponent, {});
    ref.onClose.subscribe(res => {
      if (res) {
        const date = res.date;
        let eventDate = moment(res.date).format('YYYY-MM-DD');
        console.log(eventDate);
        this.userEventLoading = true;

        this._dataservice
          .postCall<any>(this._configuration.AddNewUserEventApi, JSON.stringify({
            eventDate: eventDate,
            startTime: "05:00",
            endTime: "06:00",
            title: res.event,
            location: "N/A"
          }))
          .subscribe(resp => {
            if (resp.status === this._configuration.ResponseStatusError) {

              this.userEventLoading = false;
              // alert("There was a problem adding event");
              this.alertModalMessage = resp.message;
              $('#alertModal').modal('show');
              return;
            }

            let day = moment(resp.event.eventDate).format('DD');
            let month = moment(resp.event.eventDate).format('MM');
            let year = moment(resp.event.eventDate).format('YYYY');
            let m = new Date(month + "/" + day + "/" + year);

            let isExists = this.isInArray(this.dates, new Date(m));

            if (!isExists) {
              this.dates.push(new Date(m));
            }

            this.userEvents.push(resp.event)
            this.addUpcomingEventsToCal();

            this.date = new Date();
            this.userEventLoading = false;
            if (resp.achievement) {
              for (var i = 0; i < resp.achievement; i++) {
                this.toast.info(resp.achievement[i].achievement, "Achievement");
              }
            }
            // this.dates.push(new Date(date));
            // this.events.push(res.event);
            // this.dayCellComponent.setDates(this.dates);
            // this.date = new Date();


          },
            error => {
              console.log(error);
              this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
                {
                  status: this._configuration.ToasterStatusError,
                  duration: this._configuration.ToasterDuration,
                  position: this._configuration.ToasterPosition
                });
              this.userEventLoading = false;
            },
            () => {

            });

        // this.dates.push(new Date(date));
        // this.events.push(res.event);
        // this.dayCellComponent.setDates(this.dates);
        // this.date = new Date();
      }
      this.toast.info(res.event, moment(res.date).format('DD/MM/YYYY'), { icon: 'calendar-toastr-icon' });
      const toast = document.querySelector("nb-toast");
    });
  }
  editEvent(date, ev, idx) {

    const ref = this.dialog.open(EditEventComponent, {
      context: {
        date: date,
        event: ev.title
      }
    });
    ref.onClose.subscribe(res => {
      if (res) {
        // for(var i=0;i<this.userEvents.length;i++)
        // {
        //   console.log(moment(this.userEvents[i].eventDate).format('YYYY-MM-DD'))
        // }
        // let event = this.userEvents.filter((e,i)=>moment(e.eventDate).format('YYYY-MM-DD')===moment(date).format('YYYY-MM-DD'))[0];
        let event = ev;

        if (res.type === "save") {
          // this.dates[idx] = res.date;
          // this.events[idx] = res.event;

          this.userEventLoading = true;
          this._dataservice
            .postCall<any>(this._configuration.UpdateUserEventApi, JSON.stringify({
              id: event.id,
              title: res.event, location: event.location, eventDate: moment(res.date).format('DD/MM/YYYY')
            }))
            .subscribe(resp => {
              if (resp.status === this._configuration.ResponseStatusError) {
                this.userEventLoading = false;
                this.alertModalMessage = 'There was a problem updating the event.';
                $('#alertModal').modal('show');
                return;
              }
              this.userEventLoading = false;
              this.userEvents = this.userEvents.filter(x => x !== event);

              let day = moment(res.date).format('DD');
              let month = moment(res.date).format('MM');
              let year = moment(res.date).format('YYYY');

              event.eventDate = year + "-" + month + "-" + day + "T00:00:00.000Z";
              event.title = res.event;

              this.dates = this.dates.filter((d, i) => i !== idx);

              this.userEvents.push(event);


              // this.dates.push(new Date(month+"/"+day+"/"+year));

              let m = new Date(month + "/" + day + "/" + year)

              // let isExists = this.dates.includes(new Date(m));
              let isExists = this.isInArray(this.dates, new Date(m));

              if (!isExists) {
                this.dates.push(new Date(m));
              }

              //this.date = new Date();

              this.dayCellComponent.setDates(this.dates);

              this.addUpcomingEventsToCal();

              if (resp.achievement)
                this.toast.info(resp.achievement, "Achievement");
            },
              error => {
                console.log(error);
                this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
                  {
                    status: this._configuration.ToasterStatusError,
                    duration: this._configuration.ToasterDuration,
                    position: this._configuration.ToasterPosition
                  });
                this.userEventLoading = false;
              },
              () => {

              });
        }
        if (res.type === "delete") {

          // console.log(event.eventDate);
          // return false;
          this.userEventLoading = true;

          this._dataservice
            .postCall<any>(this._configuration.DeleteUserEventApi, JSON.stringify({ id: event.id }))
            .subscribe(resp => {
              if (resp.status === this._configuration.ResponseStatusError) {
                this.userEventLoading = false;
                this.alertModalMessage = 'There was a problem deleting the event.';
                $('#alertModal').modal('show');
                return;
              }

              // this.userEvents.splice(event);
              const newUpdatedEvents = this.userEvents.filter(x => x !== event)
              this.userEvents = newUpdatedEvents;

              // this.dates = this.dates.filter((d, i) => i !== idx);

              this.dates = [];
              let newDates = [];
              for (var i = 0; i < newUpdatedEvents.length; i++) {
                let m = moment(newUpdatedEvents[i].eventDate).format('DD/MM/YYYY');

                let isExists = this.isInArray(newDates, new Date(m));

                if (!isExists) {
                  newDates.push(new Date(m));
                }
              }

              this.dayCellComponent.setDates(newDates);

              this.addUpcomingEventsToCal();

              this.userEventLoading = false;
              this.date = new Date();
              if (resp.achievement) {
                for (var i = 0; i < resp.achievement; i++) {
                  this.toast.info(resp.achievement[i].achievement, "Achievement");
                }
              }
            },
              error => {
                console.log(error);
                this.toast.show(this._configuration.ErrorWorkingOnRequest, '',
                  {
                    status: this._configuration.ToasterStatusError,
                    duration: this._configuration.ToasterDuration,
                    position: this._configuration.ToasterPosition
                  });
                this.userEventLoading = false;
              },
              () => {

              });

          // this.dates = this.dates.filter((d, i) => i !== idx);
          // this.events = this.events.filter((e, i) => i !== idx);
        }


      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }

  getCircularChartStroke(strokeColor) {
    return `url(${window.location.href}#${strokeColor})`;
  }
  routeToCurrentExamination() {
    this._dataservice
      .getAll<any>(this._configuration.GetCurrentExamApi)
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError) {
          this.toast.show(this._configuration.ErrorFetchingContent, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });
          return;
        }
        if (resp.currentExamId > 0 && !resp.completed) {
          this.router.navigateByUrl(`/examination/${resp.currentExamId}`);
        }
        else {
          this.router.navigateByUrl(`/examination`);
        }
      },
        error => {
          console.log(error);
          this.toast.show(this._configuration.ErrorFetchingResult, '',
            {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
            });

        },
        () => {

        });
  }

  saveImage(key, url) {
    localStorage.setItem(key, url);
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
    }
  }
  async chooseProfileTheme() {
    const dialog = this.dialog.open(ChooseProfileThemeComponent, {
        context: {
            selected: this.theme_id
        }
    });
    const res = await dialog.onClose.toPromise();
    if (res) {
         this.theme_id = res;
         this.saveImage('themeId', res);
    }
  }

  async changePassword() {
    const dialog = this.dialog.open(changePasswordComponent, {
        context: {
            selected: this.theme_id
        }
    });
    const res = await dialog.onClose.toPromise();
    if (res) {
         this.theme_id = res;
         this.saveImage('themeId', res);
    }    
  }  

  async changeCountry() {
    const dialog = this.dialog.open(changeCountryComponent, {
        context: {
            selected: this.theme_id
        }
    });
    const res = await dialog.onClose.toPromise();
    if (res) {
         this.theme_id = res;
         this.saveImage('themeId', res);
    }    
  }  

  closeWelcome() {
    this.welcomePage.nativeElement.className = 'display-none';
  }

}
