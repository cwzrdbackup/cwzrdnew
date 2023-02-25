import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDropDownComponent } from './notificationDropDown.component';
import { RouterModule } from '@angular/router';
//import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
//import { ThemeSwitcherListComponent } from '../theme-switcher/themes-switcher-list/themes-switcher-list.component';
import { NbLayoutModule, NbPopoverModule, NbActionsModule, NbCardModule, NbSidebarModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [NotificationDropDownComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    NbPopoverModule,
    NbCardModule,
    RouterModule
  ],
  exports: [NotificationDropDownComponent],
})
export class NotificationDropDownModule { }
