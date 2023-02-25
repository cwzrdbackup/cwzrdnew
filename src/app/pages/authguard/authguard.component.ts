import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../dataservice/apiservice.component';

@Injectable()
export class AuthguardComponent implements CanActivate {

    constructor(private router: Router, private apiService: ApiService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.apiService.isLoggedIn()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
