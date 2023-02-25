import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Configuration } from './app.constant.component';

@Injectable()
export class DataService {
    private userUrlSource = new BehaviorSubject<string>('');
    currentUrl = this.userUrlSource.asObservable();

    private userStatus = new BehaviorSubject<boolean>(false);
    currentStatus = this.userStatus.asObservable();

    private userName = new BehaviorSubject<string>('');
    currentUser = this.userName.asObservable();

    private userId = new BehaviorSubject<number>(0);
    currentUserId = this.userId.asObservable();

    private userInitials = new BehaviorSubject<any>(null);
    currentUserInitials = this.userInitials.asObservable();

    private userPhone = new BehaviorSubject<number>(0);
    currentUserPhoneNo = this.userPhone.asObservable();

    private userCountry = new BehaviorSubject<number>(0);
    currentUserCountry = this.userCountry.asObservable();

    public _currentUser: any;

    constructor(private _configuration: Configuration) {
        let user= localStorage.getItem(this._configuration.UserKey);
        if(user)
        this._currentUser = JSON.parse(localStorage.getItem(this._configuration.UserKey));
        else
        this._currentUser=null;
    }

    getCurrentUser() {
        return this._currentUser;
    }

    setData(url: string) {
        this.userUrlSource.next(url);
    }

    setUserStatus(val: boolean) {
        this.userStatus.next(val);
    }

    setUser(val: string) {
        this.userName.next(val);
    }

    setUserId(val: number) {
        this.userId.next(val);
    }

    setCountryId(val: number) {
        this.userCountry.next(val);
    }

    setInitials(val: any) {
        this.userInitials.next(val);
    }

    setPhoneNumber(val: number) {
        this.userPhone.next(val);
    }
}
