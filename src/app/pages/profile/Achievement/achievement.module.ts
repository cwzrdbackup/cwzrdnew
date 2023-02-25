import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbProgressBarModule, NbActionsModule, NbCardModule, NbLayoutModule, NbDialogModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
]

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
	FormsModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbProgressBarModule,
    NbActionsModule,
    NbCardModule,
    NbDialogModule.forChild(),    	
  ],
  entryComponents: [AddEventComponent],
})
export class AchievementModule { }
