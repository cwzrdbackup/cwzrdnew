import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { HeaderModule } from '../../header/header.module';
import { PreviewImageModule } from '../../../components/preview-image/preview-image.module'
import { ElChildModules } from 'element-angular';

const routes: Routes = [
  {}
]

@NgModule({
  declarations: [],
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
