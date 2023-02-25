import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { CoutriesService } from './../../services/coutries.service';
import {HttpClientModule} from '@angular/common/http';
import {
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule, NbSidebarModule,
  NbSpinnerModule,
  NbSelectModule,
} from "@nebular/theme";
import {SecurityComponent} from "./security.component";
import {HeaderModule} from "../header/header.module";

const routes: Routes = [
  {path: '', component: SecurityComponent}
];

@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    HttpClientModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    HeaderModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbCalendarModule,
    NbActionsModule,
    NbSidebarModule,
    NbSelectModule,
    NbSpinnerModule
  ],
  providers: [CoutriesService]
})
export class SecurityModule { }
