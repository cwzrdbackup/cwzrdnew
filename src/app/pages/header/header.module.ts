import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NotificationDropDownModule } from '../notificationDropDown/notificationDropDown.module';
//import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
//import { ThemeSwitcherListComponent } from '../theme-switcher/themes-switcher-list/themes-switcher-list.component';
import { NbLayoutModule, NbPopoverModule, NbActionsModule, NbCardModule, NbSidebarModule, NbListModule, NbSidebarService } from '@nebular/theme';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
    NbPopoverModule,
    NbCardModule,
    NbSidebarModule,
    NbListModule,
    NotificationDropDownModule
  ],
  exports: [HeaderComponent],
  providers: [NbSidebarService]
})
export class HeaderModule { }


//add ThemeSwitcherComponent, ThemeSwitcherListComponent to declarations