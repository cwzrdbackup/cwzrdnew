import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { UserLoginVM } from "../../models/UserViewModels/UserLoginVM";
import { Router } from "@angular/router";
import { ApiService } from "./apiservice.component";
import { Observable, throwError, from } from "rxjs";
import { map, tap, flatMap, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Configuration } from './app.constant.component';


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    token: string;
    data;
    constructor(private router: Router, private apiService: ApiService, private _configuration: Configuration) {
        this.token = localStorage.getItem(this._configuration.AccessTokenKey);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(map((event: any) => {
            if (event.body && event.body.hasOwnProperty('achievement')) {
                this.apiService.showAchievements(event.body.achievement);
            }
            if (event.body && event.body.rank) {
                this.apiService.showRanks(event.body.rank);
            }
            return event;
        } ), catchError((error) => {
            if (error.status === 200) {
                return;
            }

            if (error.status === 404 && req.url.toLowerCase().includes('.json')) {
                return next.handle(req);
            }

            if (req.url.toLowerCase().includes('refreshtoken') && error.status === 401) {
                this.isPublicRoute() ? null : this.apiService.logoutUser();
                return next.handle(req);
            }
            if (error.status === 401) {
                return this.apiService.getRefreshToken().flatMap(
                    (data: any) => {
                        this.data = data;

                        if (data.status == 'SUCCESS') {
                            localStorage.setItem(this._configuration.AccessTokenKey, this.data.token);
                            req = req.clone({
                                setHeaders: {
                                    'Authorization': 'Bearer ' + this.data.token
                                }
                            });
                            return next.handle(req).toPromise().then(data => {
                                return data;
                            });
                        }
                    }
                );
            }
        }));
    }

    public isPublicRoute() {
        const currentRoute = this.router.url.toLowerCase();
        ['login', 'forgot-password', 'reset-password', 'signup'].forEach(route => {
            if (currentRoute.includes(route)) {
                return true;
            }
        });
        return false;
    }
}
