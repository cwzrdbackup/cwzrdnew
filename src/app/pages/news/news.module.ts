import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule,NbSpinnerModule, NbButtonModule, NbInputModule, NbCardModule, NbSelectModule, NbBadgeModule, NbUserModule, NbListModule, NbActionsModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { DateSuffix } from './datePipe/datePipe.pipe';
import {FormsModule} from '@angular/forms';

import { ShareModule} from '@ngx-share/core';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: ':id', component: ArticleComponent}
] 

@NgModule({
  declarations: [NewsComponent, ArticleComponent, DateSuffix],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
    NbBadgeModule,
    NbUserModule,
    NbListModule,
    NbSpinnerModule,
    NbActionsModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,

    ShareModule
  ]
})
export class NewsModule { }
