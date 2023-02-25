import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbListModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: PodcastComponent}
]

@NgModule({
  declarations: [PodcastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbListModule,
	HeaderModule
  ]
})
export class PodcastModule { }
