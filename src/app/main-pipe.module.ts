import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ShortNumberPipe } from './pipes/short-number.pipe';
import { NumberSuffixPipe } from './number-suffix.pipe';

@NgModule({
  declarations: [
    ShortNumberPipe,
    NumberSuffixPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ShortNumberPipe,
    NumberSuffixPipe,
  ],
  providers: [
    ShortNumberPipe
  ]
})
export class MainPipe { }
