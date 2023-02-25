import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme/components/dialog';
import { NbWindowModule } from '@nebular/theme/components/window';
import { NbCardModule } from '@nebular/theme/components/card/card.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NbSpinnerModule } from '@nebular/theme';import { PreviewPdfComponent } from './preview-pdf.component';

@NgModule({
  declarations: [PreviewPdfComponent],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    HttpClientModule,
    PdfViewerModule,
    NbSpinnerModule
  ],
  exports: [PreviewPdfComponent],
  entryComponents:[PreviewPdfComponent],
})
export class PreviewPdfModule { }
