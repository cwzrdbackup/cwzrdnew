import { NbToastrService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../dataservice/apiservice.component';
import { DataService } from '../dataservice/utility.dataservice.component';
import * as moment from 'moment';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class notificationsComponent implements OnInit {

  loading: boolean = true;
  public notifications: any;
  public moment: any = moment;
  public notificationCount: Number;
  private user: any;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  constructor(private _dataservice: ApiService, private _passingDataservice: DataService,
    private toastrService: NbToastrService,
    private _configuration: Configuration) {
    this.user = this._passingDataservice.getCurrentUser();
  }

  ngOnInit() {
    this._dataservice
      .getAll<any>(this._configuration.GetAllNotificationsApi + this.user.userId)
      .subscribe(resp => {
        this.notifications = resp.notifications.map(notification => {
          switch (notification.type) {
            case '1':
              notification.image = "https://d308fakbqebk7c.cloudfront.net/cryptowzrd_logo_christmas_hat.png"
          break;
            case "2":
              notification.image = "https://cdn.shopify.com/s/files/1/0270/7842/6702/files/battle_of_wzrds_logo_homepage.png?5704"
              break;
            case '3':
              notification.image = './assets/podcast_logo_150.png';
              break;
            case '4':
              notification.image = './assets/wzrd_marketplace_logo_150.png';
              break;
            case '5':
              notification.image = './assets/wzrd_wednesdays_logo_150.png';
              break;
              default:
                  notification.image = './assets/cryptowzrd_logo_150.png';
                  break;
          }
          return notification;
        });
        this.notificationCount = resp.notifications.length;
      });
  }

  @HostListener('window:resize', ['$event.target']) resize(e) {
    this.setScreen(e.innerWidth);
  }

  setScreen(width: number) {
    this.isLargeScreen = width >= 1366 ? true : false;
    this.isMediumScreen = width >= 768 ? true : false;
  }

  readAllNotificationClick() {
    this._dataservice
      .postCall<any>(this._configuration.MarkAllNotificationsReadApi + this.user.userId, this.user)
      .subscribe(resp => {
        console.log(resp);
        this.toastrService.show(this._configuration.NotificationReadSuccessfully, '',
        {
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
      });
  }
  ngAfterViewInit(): void {
  }
}
