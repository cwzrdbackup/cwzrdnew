import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbTabsetModule, NbPopoverModule, NbDialogModule, NbSelectModule } from '@nebular/theme';
import { BalanceComponent } from './balance/balance.component';
import { SplitComponent } from './split/split.component';
import { WachlistComponent } from './wachlist/wachlist.component';
import { HistoryComponent } from './history/history.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AddBalanceComponent } from './balance/add-balance/add-balance.component';
import { AddWachlistComponent } from './wachlist/add-wachlist/add-wachlist.component';
import { HeaderModule } from '../header/header.module'; 

const routes: Routes = [
  { path: '', component: PortfolioComponent }
]

@NgModule({
  declarations: [PortfolioComponent, BalanceComponent, SplitComponent, WachlistComponent, HistoryComponent, AddBalanceComponent, AddWachlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NgxEchartsModule,
    NbDialogModule.forChild(),
    NbSelectModule,
	HeaderModule
  ],
  entryComponents: [AddBalanceComponent, AddWachlistComponent],
  providers: [DecimalPipe]
})
export class PortfolioModule { }
