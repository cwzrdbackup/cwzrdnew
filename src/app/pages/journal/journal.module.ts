import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { JournalComponent } from './journal.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { Routes, RouterModule } from '@angular/router';
import {
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule,
    NbDialogModule,
    NbSpinnerModule,
    NbActionsModule,
    NbTooltipModule
} from '@nebular/theme';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { Chart4Component } from './chart4/chart4.component';
import { Chart5Component } from './chart5/chart5.component';
import { Table1Component } from './table1/table1.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableModalComponent } from './table1/table-modal/table-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: JournalComponent}
]

@NgModule({
  declarations: [
    JournalComponent,
    //   TradersLogComponent, 
    Chart1Component, Chart2Component, Chart3Component, Chart4Component, Chart5Component
    , Table1Component, TableModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        NbSelectModule,
        NgxEchartsModule,
        NbInputModule,
        NbTooltipModule,
        NbDatepickerModule.forRoot(),
        NbDialogModule.forChild(),
        NbSpinnerModule,
        HeaderModule,
        NbActionsModule,
        AngularMultiSelectModule,
        ReactiveFormsModule
    ],
  entryComponents: [
     TableModalComponent
    ]
})
export class JournalModule { }
