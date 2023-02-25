import { PreviewPdfModule } from './../../components/preview-pdf/preview-pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './examination.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbProgressBarModule, NbCardModule, NbButtonModule,NbToastrModule,
  NbGlobalLogicalPosition } from '@nebular/theme';
import { ExamComponent } from './exam/exam.component';
import { HeaderModule } from '../header/header.module';
import { PreviewCertificateModule } from 'src/app/components/preview-certificate/preview-certificate.module';

const routes: Routes = [
  {path: '', component: ExaminationComponent},
  {path: ':exam', component: ExamComponent}
]

@NgModule({
  declarations: [ExaminationComponent, ExamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbProgressBarModule,
    NbCardModule,
    NbButtonModule,
    NbToastrModule.forRoot({ destroyByClick: true, duration: 3000, position: NbGlobalLogicalPosition.BOTTOM_END }),
    HeaderModule,
    PreviewPdfModule,
    PreviewCertificateModule
  ]
})
export class ExaminationModule { }
