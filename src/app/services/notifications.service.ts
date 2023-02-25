import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../pages/dataservice/app.constant.component';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
    private socket;

    constructor(private _configuration: Configuration) {
        let serverAddress = _configuration.Server;
        this.socket = io(serverAddress + "notifications");
    }

    public subscribeToAllNotifications = () => {
        this.socket.emit('getNotifications', {
            "userId": 100001,
            // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFmcmF6QGdtYWlsLmNvbSIsInVzZXJJZCI6MTAwMDAxLCJpYXQiOjE1NzQ4Njg5MjIsImV4cCI6MTU3NDg3MjUyMn0.yq8FYpvXPGhGbubfM8l4cpGCSV4LrJ2J04_sh9Wwm-Y"
            "token": localStorage.getItem(this._configuration.AccessTokenKey)
        });
        return Observable.create((observer) => {
            this.socket.on('allNotifications', (notifications) => {
                observer.next(notifications);
            });
        });
    }
    public subscribeToNewNotifications = () => {
        return Observable.create((observer) => {
            this.socket.on('new_notification', (notification) => {
                observer.next(notification);
            });
        });
    }
}
