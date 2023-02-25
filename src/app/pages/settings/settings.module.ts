import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { settingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbPopoverModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { ThemeSwitcherListComponent } from '../../components/theme-switcher/themes-switcher-list/themes-switcher-list.component';

const routes: Routes = [
  {path: '', component: settingsComponent}
]

@NgModule({
  declarations: [settingsComponent, ThemeSwitcherComponent, ThemeSwitcherListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
	NbPopoverModule,
	HeaderModule
  ]
})
export class settingsModule { }
