import { PreviewPdfModule } from './../../components/preview-pdf/preview-pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book.component';
import { Routes, RouterModule } from '@angular/router';
import { NbProgressBarModule, NbSpinnerModule,NbActionsModule, NbCardModule, NbLayoutModule, NbDialogModule } from '@nebular/theme';
import { ShowcasePopupComponent } from './showcase-popup/showcase-popup.component';
import { HeaderModule } from '../header/header.module';
import { NumberOnlyDirective } from '../../directives/number-only.directive';
import { PreviewCertificateModule } from 'src/app/components/preview-certificate/preview-certificate.module';

const routes: Routes = [
  {path: '', component: BookComponent}
]

@NgModule({
  declarations: [BookComponent, ShowcasePopupComponent, NumberOnlyDirective],
  imports: [
    CommonModule,
    NbDialogModule.forRoot(),
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbProgressBarModule,
    NbActionsModule,
    NbCardModule,
    HttpClientModule,
    NbSpinnerModule,
    HeaderModule,
    PreviewPdfModule,
    PreviewCertificateModule
  ],
  entryComponents: [ShowcasePopupComponent],
})
export class BookModule { }
