import { NbSpinnerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewImageComponent } from './preview-image.component';
import { NbDialogModule } from '@nebular/theme/components/dialog';
import { NbWindowModule } from '@nebular/theme/components/window';
import { NbCardModule } from '@nebular/theme/components/card/card.module';
@NgModule({
  declarations: [PreviewImageComponent],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    NbSpinnerModule
  ],
  exports: [PreviewImageComponent],
  entryComponents:[PreviewImageComponent],
})
export class PreviewImageModule { }
