import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';
import { NbThemeModule, NbCheckboxComponent, NbToastrModule, NbGlobalLogicalPosition, NbSpinnerModule, NbDialogModule, NbCardModule, NbDatepickerModule, NbThemeService, NbTooltipModule } from '@nebular/theme';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthguardComponent } from './pages/authguard/authguard.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {ApiService,CustomInterceptor} from './dataservice/apiservice.component';

import {ApiService} from './pages/dataservice/apiservice.component';
import {CustomInterceptor} from './pages/dataservice/jwtinterceptor.component';
import {Configuration} from './pages/dataservice/app.constant.component';


import { PreviewPdfModule } from '../app/components/preview-pdf/preview-pdf.module';
import * as $ from 'jquery';

import { UserDataService } from './pages/dataservice/dataservice.component';

import {NotificationService} from './services/notifications.service';

import { DataService } from './pages/dataservice/utility.dataservice.component';
// import {UtilityServicePipe} from './pages/dataservice/utility.service.component';
import { UtilityServicePipe } from './pages/dataservice/utility.service.component';


import {GetFirstLetterPipe, TrimPipe, RoundFigurePipe, SafePipe, GetHoursPipe } from './pages/dataservice/utility.service.component';

import { HttpModule } from '@angular/http';
import { PlayerComponent } from './pages/player/player.component';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment';
import { from } from 'rxjs';
import { RankUpAnimationComponent } from './components/rank-up-animation/rank-up-animation.component';
import { AppImgFallbackDirective } from './app-img-fallback.directive';
import { MainPipe } from './main-pipe.module';

// optional, provides moment-style pipes for date formatting


// import {HttpClientModule} from '@angular/common/http' 
/*export function authInterceptorFactory(router: Router, apiService: ApiService) {
  return new CustomInterceptor(router, apiService);
}*/
@NgModule({
  declarations: [
    AppComponent,
    UtilityServicePipe,
    GetFirstLetterPipe, TrimPipe, RoundFigurePipe, SafePipe,
    GetHoursPipe,
    PlayerComponent,
    RankUpAnimationComponent,
    AppImgFallbackDirective
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NbSpinnerModule,
    NbCardModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PreviewPdfModule,
    NbTooltipModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbDialogModule.forRoot(),
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbToastrModule.forRoot({ destroyByClick: true, duration: 3000, position: NbGlobalLogicalPosition.BOTTOM_END }),
    ElModule.forRoot(),
    MainPipe
  ],
  providers: [
    AuthguardComponent,
    ApiService,
    Configuration,
    UserDataService,
    DataService,
    UtilityServicePipe,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
    NbThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
