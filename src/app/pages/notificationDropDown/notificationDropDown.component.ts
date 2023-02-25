import { NbToastrService } from '@nebular/theme';
import { Configuration } from './../dataservice/app.constant.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../dataservice/apiservice.component';
import { DataService } from '../dataservice/utility.dataservice.component';
import { NotificationService } from '../../services/notifications.service';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notificationDropDown.component.html',
  styleUrls: ['./notificationDropDown.component.scss']
})
export class NotificationDropDownComponent implements OnInit {
  public notifications: Array<any>;
  public moment: any = moment;
  public notificationCount: Number;
  private user: any;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  constructor(
    private _dataservice: ApiService,
    private _passingDataservice: DataService,
    private _notificationService: NotificationService,
    private toastrService: NbToastrService,
    private _configuration: Configuration
  ) {
    this.user = this._passingDataservice.getCurrentUser();
  }

  ngOnInit() {
    console.log("notification loaded!!!")
    this.setScreen(window.innerWidth);
    this._dataservice
      .getAll<any>(this._configuration.GetAllNotificationsApi + this.user.userId)
      .subscribe(resp => {
        this.notifications = this.attachImagesToNotifications(resp.notifications);
        this.notificationCount = this.notifications.length;
        console.log(this.notifications)
      });
    this._notificationService.subscribeToAllNotifications()
      .subscribe(resp => {
        console.log(resp);
      })
    this._notificationService.subscribeToNewNotifications()
      .subscribe(resp => {
        console.log(resp);
        this.notifications.push(resp.notification);
        this.notifications = this.attachImagesToNotifications(this.notifications);
        this.notificationCount = this.notifications.length;
      })

  }

  @HostListener('window:resize', ['$event.target']) resize(e) {
    this.setScreen(e.innerWidth);
  }

  setScreen(width: number) {
      this.isLargeScreen = width >= 1366 ? true : false;
      this.isMediumScreen = width >= 768 ? true : false;
  }

  readAllNotificationClick() {
    console.log("read notification clicked!")
    this._dataservice
      .postCall<any>(this._configuration.MarkAllNotificationsReadApi + this.user.userId, this.user)
      .subscribe(resp => {
        this.toastrService.show(this._configuration.NotificationReadSuccessfully, '',
        {
            status: this._configuration.ToasterStatusSuccess,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
        console.log(resp);
      });
  }
  private attachImagesToNotifications(notifications: Array<any>) {    
    return notifications.map(notification => {
      switch (notification.type) {
        case "1":
          notification.image = "https://d308fakbqebk7c.cloudfront.net/cryptowzrd_logo_christmas_hat.png"
          break;
        case "2":
          notification.image = "https://cdn.shopify.com/s/files/1/0270/7842/6702/files/battle_of_wzrds_logo_homepage.png?5704"
          break;
        case "3":
          notification.image = "./assets/podcast_logo_150.png"
          break;
        case "4":
          notification.image = "./assets/wzrd_marketplace_logo_150.png"
          break;
        case "5":
          notification.image = "./assets/wzrd_wednesdays_logo_150.png"
          break;
        default:
          notification.image = "./assets/cryptowzrd_logo_150.png"
          break;
      }
      return notification;
    });
  }
}
