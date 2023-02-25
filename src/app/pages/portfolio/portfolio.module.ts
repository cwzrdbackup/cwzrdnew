import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbTabsetModule, NbPopoverModule,NbSpinnerModule, NbDialogModule, NbSelectModule, NbAccordionModule, NbTooltipModule, NbButtonModule } from '@nebular/theme';
import { BalanceComponent } from './balance/balance.component';
import { SplitComponent } from './split/split.component';
import { WachlistComponent } from './wachlist/wachlist.component';
import { HistoryComponent } from './history/history.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AddBalanceComponent } from './balance/add-balance/add-balance.component';
import { AddWachlistComponent } from './wachlist/add-wachlist/add-wachlist.component';
import { Chartportfolio1m } from './balance/portfolio1m/portfolio1m.component';
import { Chartwatchlist1m } from './wachlist/watchlist1m/watchlist1m.component';
import { balancechartComponent } from './balancechart/ochart1new.component';
import { flipchartprofitComponent } from './flipchartprofit/flipchartprofit.component';
import { Chart9Component } from './chart9/chart9.component';
import { HeaderModule } from '../header/header.module'; 
import { ChartModule } from 'angular2-chartjs';
import { performersChartComponent } from './performerschart/performerschart.component';
import {pHubService} from './pHubService'
//import { AppImgFallbackDirective } from '../../app-img-fallback.directive';
import { MainPipe } from '../../main-pipe.module';
//import { AppModule } from '../../app.module';
const routes: Routes = [
  { path: '', component: PortfolioComponent }
]

@NgModule({
  declarations: [PortfolioComponent, BalanceComponent, SplitComponent, WachlistComponent, HistoryComponent, AddBalanceComponent, AddWachlistComponent, Chartportfolio1m, Chartwatchlist1m, balancechartComponent, flipchartprofitComponent, Chart9Component, performersChartComponent],
  imports: [
    MainPipe,
    CommonModule,
    NbTooltipModule, NbButtonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbTabsetModule,
    NgxEchartsModule,
    NbDialogModule.forChild(),
    NbSelectModule,
	NbAccordionModule,
	HeaderModule
  ],
  entryComponents: [AddBalanceComponent, AddWachlistComponent],
  providers: [DecimalPipe,pHubService]
})
export class PortfolioModule { }
