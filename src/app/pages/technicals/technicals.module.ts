import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technicalsComponent } from './technicals.component';
import { forexComponent } from './technicals-forex/technicals.component';
import { cryptoComponent } from './technicals-cryptocurrency/technicals.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';
import { PreviewImageModule } from '../../components/preview-image/preview-image.module'
import { ElChildModules } from 'element-angular';

const routes: Routes = [
  {path: '', component: technicalsComponent},
  {path: 'forex', component: forexComponent},
  {path: 'cryptocurrency', component: cryptoComponent}
]

@NgModule({
  declarations: [technicalsComponent, forexComponent, cryptoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    HeaderModule,
    NbSelectModule,
    PreviewImageModule,
    ElChildModules.ElCarouselModule,
  ]
})
export class technicalsModule { }
