import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { tradeTrackerComponent } from './trade-tracker.component';
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
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme';
import { chart1Component } from './chart1/chart1.component';
import { chart2Component } from './chart2/chart2.component';
import { chart3Component } from './chart3/chart3.component';
import { chart4Component } from './chart4/chart4.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { tabbedChartComponent } from './tabbed-chart/tabbed-chart.component';
import { barChartComponent } from './bar-chart/bar-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableModalComponent } from './table1/table-modal/table-modal.component';
import { TableModal2Component } from './table2/table-modal/table-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: tradeTrackerComponent}
]

@NgModule({
  declarations: [
    tradeTrackerComponent,
    //   TradersLogComponent, 
    chart1Component, chart2Component, chart3Component, chart4Component, Table1Component, Table2Component, tabbedChartComponent, barChartComponent, TableModalComponent, TableModal2Component
    ],
    imports: [
        CommonModule,
        NbTabsetModule,
        NbTooltipModule,
        FormsModule,
        RouterModule.forChild(routes),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        NbSelectModule,
        NgxEchartsModule,
        NbInputModule,
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
export class tradeTrackerModule { }
