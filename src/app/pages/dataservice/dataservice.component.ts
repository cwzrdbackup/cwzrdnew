import { map } from 'rxjs/operators';

import {ApiService} from './apiservice.component';
import { Injectable} from '@angular/core';
import {DataService} from '../dataservice/utility.dataservice.component';
import { Configuration } from './app.constant.component';

@Injectable()
export class UserDataService {
public _userInitials: any;


constructor(private _apiService: ApiService, private _dataService: DataService, private _configuration: Configuration) { }


getinformationUsers() {
    return new Promise((resolve, reject) => {
        this._apiService.getAll<any>(this._configuration.GetUserInformationApi)
          .subscribe(
                 data => {
                     resolve(data);
              },
                error => {
                    const showWelcome = localStorage.getItem(this._configuration.ShowWelcomeKey);
                    localStorage.clear();
                    showWelcome ? localStorage.setItem(this._configuration.ShowWelcomeKey, 'false') : null;
                     this._dataService.setUserStatus(false);
                     reject(error);
                },
            );
      });

}

userInitails(){
    const _version = '0.1';
    return new Promise((resolve, reject) => {
        this._apiService.getbyString<any>(this._configuration.GetInitialSettingsApi, _version)
          .subscribe(
                 data => {
                     resolve(data);
              },
                error => {
                    const showWelcome = localStorage.getItem(this._configuration.ShowWelcomeKey);
                    localStorage.clear();
                    showWelcome ? localStorage.setItem(this._configuration.ShowWelcomeKey, 'false') : null;
                     this._dataService.setUserStatus(false);
                     reject(error);
                },
            );
      });

}

}
