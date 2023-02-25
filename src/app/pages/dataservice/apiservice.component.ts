import { map, tap, flatMap, catchError } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Configuration } from './app.constant.component';


@Injectable()
export class ApiService {

    public actionUrl: string;
    public loginUrl: string;
    public vimeoURL: string;

    public token: string;

    private _listners = new Subject<any>();
    private _achievements = new Subject<any>();
    private _ranks = new Subject<any>();

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    filter(filterBy: string) {
        this._listners.next(filterBy);
    }

    showAchievementsListener(): Observable<any> {
        return this._achievements.asObservable();
    }

    showAchievements(achievements: any) {
        this._achievements.next(achievements);
    }

    showRanksListener(): Observable<any> {
        return this._ranks.asObservable();
    }

    showRanks(achievements: any) {
        this._ranks.next(achievements);
    }

    constructor(private http: HttpClient, private _configuration: Configuration, private router: Router) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.loginUrl = _configuration.Server + 'auth/authenticateUser';
        this.token = _configuration.VimeoAccessToken;
    }

    public getVimeoVideoDetails<T>(episodeId): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.token
                }
            )
        };
        return this.http.get<T>(this._configuration.VimeoBaseAlbumUrl + '/' + episodeId, _options);
    }

    public getVimeoVideos<T>(): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.token
                }
            )
        };
        return this.http.get<T>(this._configuration.VimeoBaseAlbumUrl + '?per_page=50&sort=date', _options);
    }

    public VerifyEmailCode<T>(apiUrl: any, itemName: any): Observable<T> {
        // let _body = 'email=' +itemName.email+ '&password=' +itemName.password;
        const _body = JSON.stringify(itemName);
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<T>(this.actionUrl + apiUrl, _body, _options);
    }

    public loginUser<T>(apiUrl: any, itemName: any): Observable<T> {
        // let _body = 'email=' +itemName.email+ '&password=' +itemName.password;
        const _body = JSON.stringify({
            email: itemName.email,
            password: itemName.password,
            userData: itemName.userData
        });
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<T>(this.loginUrl, _body, _options);
    }

    public logoutUser(): void {
        const showWelcome = localStorage.getItem(this._configuration.ShowWelcomeKey);
        localStorage.clear();
        showWelcome ? localStorage.setItem(this._configuration.ShowWelcomeKey, 'false') : null;
        this.router.navigateByUrl(`/login`);
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem(this._configuration.AccessTokenKey) &&
                !!localStorage.getItem(this._configuration.RefreshTokenKey) &&
                !!localStorage.getItem(this._configuration.UserKey);
    }

    public forgotApis<T>(apiUrl: any, itemName: any): Observable<T> {
        const _body = JSON.stringify({
            email: itemName
        });
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<T>(this.actionUrl + apiUrl, _body, _options);
    }

    public checkResetToken<T>(apiUrl: any, itemName: any): Observable<T> {
        const _body = JSON.stringify({
            reset_token: itemName
        });
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<T>(this.actionUrl + apiUrl, _body, _options);
    }

    public resetPassword<T>(apiUrl: any, itemName: any): Observable<T> {
        const _body = JSON.stringify({
            reset_token: itemName.reset_token,
            new_password: itemName.new_password,
            new_password_confirmation: itemName.new_password_confirmation
        });
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<T>(this.actionUrl + apiUrl, _body, _options);
    }

    public getVimeoBroadcastInfo<T>(apiUrl: any): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl, _options);
    }

    public getAll<T>(apiUrl: any): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl, _options);
    }

    public getAllOutside<T>(apiUrl: any): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',

                }
            )
        };
        return this.http.get<T>(apiUrl, _options);
    }

    public postCall<T>(apiUrl: any, itemName: any): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };

        return this.http.post<T>(this.actionUrl + apiUrl, itemName, _options);
    }




    public getSingle<T>(apiUrl: any, param: any): Observable<T> {
        return this.http.get<T>(this.actionUrl + apiUrl + '/' + param);
    }

    public getMultipleId<T>(apiUrl: any, param: any): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl + '/' + param, _options);
    }

    public getbyString<T>(apiUrl: any, param: string): Observable<T> {
        return this.http.get<T>(this.actionUrl + apiUrl + '?version=' + param);
    }

    public getbyEmail<T>(apiUrl: any, param: string): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl + '?Email=' + param, _options);
    }

    public getbyNumber<T>(apiUrl: any, param: string): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl + '?phoneNumber=' + param, _options);
    }

    public getbycode<T>(apiUrl: any, param: string): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl + '?code=' + param, _options);
    }

    public getbyPageNumber<T>(apiUrl: any, param: number): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            )
        };
        return this.http.get<T>(this.actionUrl + apiUrl + '?PageNumber=' + param, _options);
    }

    public add<T>(apiUrl: any, itemName: any): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post<T>(this.actionUrl + apiUrl, toAdd);
    }

    public update<T>(apiUrl: any, param: any, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + apiUrl + '/' + param, JSON.stringify(itemToUpdate));
    }

    public delete<T>(apiUrl: any, param: any): Observable<T> {
        return this.http.delete<T>(this.actionUrl + apiUrl + '/' + param);
    }


    public getRefreshToken() {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    refreshtoken: 'Bearer ' + localStorage.getItem(this._configuration.RefreshTokenKey)
                }
            )
        };
        // let user = JSON.parse(localStorage.getItem(this._configuration.UserKey));
        return this.http.post(this.actionUrl + 'refreshToken', null, _options);
        // return data;
    }

    public getPeaksJson<T>(apiUrl: string): Observable<T> {
        const _options = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                }
            )
        };
        return this.http.get<T>(apiUrl, _options);
    }

    public getDocument(apiUrl: any): Observable<any> {
        const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'arraybuffer',
            withCredentials?: boolean
        } = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
                }
            ),
            responseType: 'arraybuffer'
        };
        return this.http.get(apiUrl, options);
    }

}
