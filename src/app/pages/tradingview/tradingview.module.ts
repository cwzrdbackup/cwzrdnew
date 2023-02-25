import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tradingViewComponent } from './tradingview.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: tradingViewComponent}
]

@NgModule({
  declarations: [tradingViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
	HttpClientModule,
	HeaderModule,
	NbTabsetModule
  ]
})
export class tradingviewModule { }
