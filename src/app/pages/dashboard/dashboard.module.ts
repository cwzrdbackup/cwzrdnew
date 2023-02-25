import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {  NbCardModule, NbListModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCalendarModule, NbToastrModule,
  NbSpinnerModule,NbDialogModule, NbDatepickerModule,
  NbGlobalLogicalPosition, NbLayoutModule, NbActionsModule, NbSidebarModule, NbSidebarService, NbTooltipModule, NbSelectModule } from '@nebular/theme';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule, Routes } from '@angular/router';
import { CustomDayCellComponent } from './components/custom-day-cell/custom-day-cell.component';
import { ChooseProfileImgComponent } from './choose-profile-img/choose-profile-img.component';
import { ChooseHeaderImgComponent } from './choose-header-img/choose-header-img.component';
import { ChooseProfileThemeComponent } from './choose-profile-theme/choose-profile-theme.component';
import { AddEventComponent } from './add-event/add-event.component';		
import { EditEventComponent } from './edit-event/edit-event.component';
import { livepageComponent } from './livepage/livepage.component';
import { changePasswordComponent } from './change-password/change-password.component';
import { changeCountryComponent } from './change-country/change-country.component';

import { LearningReportComponent } from './learning-report/learning-report.component';		
import { HeaderModule } from '../header/header.module';
import { liveHeaderModule } from '../liveHeader/liveHeader.module';

import { DateSuffix } from './datePipe/datePipe.pipe';
import { ElChildModules } from 'element-angular';

import { HttpClientModule } from '@angular/common/http';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
const OPEN_WEATHER_MAP_API_KEY = "9c69759a6d8c6cb2fb6bfd02141ae440";
const OPEN_WEATHER_MAP_BASE_URL = "https://api.openweathermap.org/data/2.5";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'livepage', component: livepageComponent},
];

@NgModule({
  declarations: [DashboardComponent, CustomDayCellComponent,AddEventComponent, livepageComponent, EditEventComponent, LearningReportComponent, DateSuffix, ChooseProfileImgComponent, ChooseHeaderImgComponent, ChooseProfileThemeComponent, changePasswordComponent, changeCountryComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,    
    NbCheckboxModule,
    NbCalendarModule,
    NbActionsModule,
    NbSidebarModule,
    NbSpinnerModule,
    NbTooltipModule,
    NbSelectModule,
    NbToastrModule.forRoot({ destroyByClick: true, duration: 5000, position: NbGlobalLogicalPosition.BOTTOM_END }),
    NbDialogModule.forChild(),
    NbDatepickerModule.forRoot(),
	  HeaderModule,
    liveHeaderModule,
    ElChildModules.ElCarouselModule,

    HttpClientModule ,
    AngularWeatherWidgetModule.forRoot({
      key: OPEN_WEATHER_MAP_API_KEY,
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: OPEN_WEATHER_MAP_BASE_URL
    })

  ],
  entryComponents: [AddEventComponent, EditEventComponent, ChooseProfileImgComponent, ChooseHeaderImgComponent, ChooseProfileThemeComponent, changePasswordComponent, changeCountryComponent],
  providers: [NbSidebarService]
})
export class DashboardModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard.component';
// import { NbCardModule, NbListModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCalendarModule, 
//   NbToastrModule, NbGlobalLogicalPosition, NbLayoutModule, NbActionsModule, NbSidebarModule,
//    NbDialogModule,
//    NbSpinnerModule,
//    NbDatepickerModule } from '@nebular/theme';
// import { RouterModule, Routes } from '@angular/router';
// import { CustomDayCellComponent } from './components/custom-day-cell/custom-day-cell.component';
// import { AddEventComponent } from './add-event/add-event.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EditEventComponent } from './edit-event/edit-event.component';
// // import { HeaderModule } from '../header/header.module';

// const routes: Routes = [
//   {path: '', component: DashboardComponent}
// ]

// @NgModule({
//   declarations: [DashboardComponent, CustomDayCellComponent, AddEventComponent, EditEventComponent], 
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule.forChild(routes),
//     NbLayoutModule,
//     NbCardModule,
//     NbListModule,
//     NbInputModule,
//     NbSpinnerModule,
//     NbButtonModule,
//     NbCheckboxModule,
//     NbCalendarModule,
//     NbActionsModule,
//     NbSidebarModule,
//     NbDialogModule.forChild(),
//     NbDatepickerModule.forRoot(),
//     NbToastrModule.forRoot({ destroyByClick: true, duration: 3000, position: NbGlobalLogicalPosition.BOTTOM_END }),
//     // HeaderModule
//   ],
//   entryComponents: [AddEventComponent, EditEventComponent]
// })
// export class DashboardModule { }
