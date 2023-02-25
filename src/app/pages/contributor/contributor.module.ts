import { PreviewPdfModule } from './../../components/preview-pdf/preview-pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './contributor.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbActionsModule, NbButtonModule, NbProgressBarModule, NbCardModule, NbInputModule, NbSpinnerModule,NbToastrModule,
  NbGlobalLogicalPosition } from '@nebular/theme';
import { resumeComponent } from './resume/resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: CourseComponent},
  {path: 'billy-the-wzrd', component: resumeComponent},
]

@NgModule({
  declarations: [CourseComponent, resumeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbActionsModule,
    NbButtonModule,
    NbProgressBarModule,
    NbCardModule,
    NbInputModule,
    NbSpinnerModule,
    ReactiveFormsModule,
    PreviewPdfModule,
    HeaderModule
  ]
})
export class contributorModule { }
