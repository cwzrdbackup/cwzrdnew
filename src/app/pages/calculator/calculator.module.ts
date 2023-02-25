import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculatorComponent } from './calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule, NbTabsetModule, NbSelectModule, NbTooltipModule, NbButtonModule } from '@nebular/theme';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: calculatorComponent}
]

@NgModule({
  declarations: [calculatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    HeaderModule,
    NbTabsetModule,
    NbSelectModule,
    NbTooltipModule,
    NbButtonModule
  ],
  entryComponents: []
})
export class calculatorModule { }
