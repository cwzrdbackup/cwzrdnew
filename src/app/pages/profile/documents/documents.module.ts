import { PreviewPdfModule } from './../../../components/preview-pdf/preview-pdf.module';
import { ElChildModules } from 'element-angular';
//import { documentsComponent } from './documents.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbProgressBarModule, NbActionsModule, NbCardModule, NbLayoutModule, NbDialogModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	FormsModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbProgressBarModule,
    NbActionsModule,
    NbCardModule,
    NbDialogModule.forChild(),
    PreviewPdfModule,
    ElChildModules.ElCarouselModule,
  ],
})
export class AchievementModule { }
