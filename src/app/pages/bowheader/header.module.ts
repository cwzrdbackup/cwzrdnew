import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NbLayoutModule, NbPopoverModule, NbActionsModule, NbCardModule, NbSidebarModule, NbListModule, NbSidebarService } from '@nebular/theme';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
	NbPopoverModule,
	NbCardModule,
    NbSidebarModule,
    NbListModule
  ],
  exports: [HeaderComponent],
  providers: [NbSidebarService]
})
export class bowHeaderModule { }
