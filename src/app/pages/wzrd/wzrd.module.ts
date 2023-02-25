import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WzrdComponent } from './wzrd.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { NbLayoutModule, NbProgressBarModule, NbCardModule, NbButtonModule, NbUserModule, NbSelectModule, NbInputModule,
NbSpinnerModule
} from '@nebular/theme';
import { WzrdVideoComponent } from './wzrd-video/wzrd-video.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', component: WzrdComponent},
  {path: ':video', component: WzrdVideoComponent}
]

@NgModule({
  declarations: [WzrdComponent, WzrdVideoComponent], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbProgressBarModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbSelectModule,
    NbInputModule,
    NbSpinnerModule,
    ReactiveFormsModule,
	HeaderModule
  ]
})
export class WzrdModule { }
