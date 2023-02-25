import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TraderVComponent } from './trader-v.component';
import { VHubService  } from './VHubService';
import {TraderVService} from './TraderVService';
import { HeaderModule } from '../header/header.module';
import { ochart1newComponentnew } from './ochart1new/ochart1new.component';
import { NbLayoutModule, NbCardModule, NbSelectModule, NbTabsetModule, NbActionsModule,NbSpinnerModule, NbTooltipModule, NbButtonModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { Table1Component } from './table1/table1.component';
import { Chart4Component } from './chart4/chart4.component';
import { Chart5Component } from './chart5/chart5.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart6Component } from './chart6/chart6.component';
import { Table2Component } from './table2/table2.component';
import { Chart7Component } from './chart7/chart7.component';
import { ochart1Component } from './ochart1/ochart1.component';
import { ochart2Component } from './ochart2/ochart2.component';
import { ochart4Component } from './ochart4/ochart4.component';
import { ochart5Component } from './ochart5/ochart5.component';
import { ochart6Component } from './ochart6/ochart6.component';
import { ochart7Component } from './ochart7/ochart7.component';
import { Chart8Component } from './chart8/chart8.component';
import { Chart9Component } from './chart9/chart9.component';
import { Chart2Componentm } from './chart2m/chart2m.component';
import { ochart10Component } from './ochart10/ochart10.component';
import { Chart1Componentm } from './chart1m/chart1m.component';
import { Chart3Componentm } from './chart3m/chart3m.component';
import { Chart10Component } from './chart10/chart10.component';
import { flipchart2mComponentm } from './flipchart2m/flipchart2m.component';
import { flipchart3mComponentm } from './flipchart3m/flipchart3m.component';
import { Chart4Componentnew } from './chart4new/chart4new.component';
import { MainPipe } from '../../main-pipe.module';

//import { AppImgFallbackDirective } from '../../app-img-fallback.directive';
const routes: Routes = [
  {path: '', component: TraderVComponent}
]
@NgModule({
  declarations: [TraderVComponent, Chart1Component, Chart2Component, Chart3Component, Table1Component, Chart4Component, Chart5Component, Chart6Component, Table2Component, Chart7Component, ochart1Component, ochart2Component, ochart4Component, ochart5Component, ochart6Component, ochart7Component, Chart8Component, Chart9Component, Chart2Componentm, ochart10Component, Chart1Componentm, Chart3Componentm, Chart10Component, flipchart2mComponentm, flipchart3mComponentm, Chart4Componentnew, ochart1newComponentnew],
  imports: [
    MainPipe,
    CommonModule,
    NbTooltipModule, NbButtonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
	NbActionsModule,
	NbTabsetModule,
    NgxEchartsModule,
    NbSelectModule,
    HttpClientModule,
    HeaderModule,
    NbSpinnerModule
  ],
  providers:[VHubService,TraderVService]
})
export class TraderVModule { }
