import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { notificationsComponent } from './notifications.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbCheckboxModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: notificationsComponent}
]

@NgModule({
  declarations: [notificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbCheckboxModule,
	  HeaderModule
  ]
})
export class notificationsModule { }
