import { PreviewPdfModule } from './../../components/preview-pdf/preview-pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbActionsModule, NbButtonModule, NbProgressBarModule, NbCardModule, NbInputModule, NbSpinnerModule,NbToastrModule,
  NbGlobalLogicalPosition } from '@nebular/theme';
import { ChapterComponent } from './chapter/chapter.component';
import {LessonComponent} from './lesson/lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: CourseComponent},
  {path: 'chapter/:chapter', component: ChapterComponent},
  {path: 'chapter/:chapter/lesson/:lesson', component: LessonComponent}
]

@NgModule({
  declarations: [CourseComponent, ChapterComponent,LessonComponent],
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
export class CourseModule { }
