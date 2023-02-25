import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../dataservice/utility.dataservice.component';
import { ExcelService } from './../dataservice/excel.service';

import { tabbedChartComponent } from './tabbed-chart/tabbed-chart.component';
import { barChartComponent } from './bar-chart/bar-chart.component';
import { chart1Component } from './chart1/chart1.component';
import {chart2Component} from './chart2/chart2.component';
import {chart4Component} from './chart4/chart4.component';
import {Table1Component} from './table1/table1.component';
import {Table2Component} from './table2/table2.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../dataservice/apiservice.component';

@Component({
    selector: 'app-trade-tracler',
    templateUrl: './trade-tracker.component.html',
    styleUrls: ['./trade-tracker.component.scss']
})
export class tradeTrackerComponent implements OnInit {
    @ViewChild(tabbedChartComponent) tabbedChartComponent: tabbedChartComponent;
    // @ViewChild(barChartComponent) barChartComponent: barChartComponent;
    // @ViewChild(chart1Component) chart1Component: chart1Component;
    // @ViewChild(chart2Component) chart2Component: chart2Component;
    // @ViewChild(chart4Component) chart4Component: chart4Component;
    // @ViewChild(Table1Component) Table1Component: Table1Component;
    // @ViewChild(Table2Component) Table2Component: Table2Component;
    tradersLoading: boolean = true;
    tableLoading: boolean = false;
    isLoaded: boolean = false;
    public _traders: any[];
    public _profit: any[];
    public _pips: any[];
    public _favored: any[];
    public _loss: any;
    public _success: any;
    public _tableData: any[];
    public _downloadExcel = false;

    public openTrades: any;
    public closeTrades: any;
    public sixMonth: any;
    public totalInActiveTradesLastWeek: any;
    public totalActiveTradesLastWeek: any;
    public totalPipsGained: any;
    public topTradedPairs: any;
    public totalInActiveTradesLastMonth: any;
    public totalActiveTradesLastMonth: any;
    public totalInActiveTradesToday: any;
    public totalActiveTradesToday: any;
    public activeTrades: any;
    public TotalInActiveTradesCount: any;
    public inActiveTrades: any;
    public successRate: any;
    public totalTrades: any;

    constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
        private route: ActivatedRoute,
        private _passingDataservice: DataService,
        private excelService: ExcelService,
        private toastrService: NbToastrService,
        private _configuration: Configuration) {
        this._dataservice.listen().subscribe((m: any) => {
            console.log(m);
            this.exportAsXLSX();
        });
    }

    onFilterClick(event) {
        console.log('Fire onFilterClick: ', event);
        this.exportAsXLSX();
    }

    ngOnInit() {
        //localStorage.setItem(this._configuration.showBadge4, 'true');
        this.initData();
    }

    initData() {

        this.tableLoading = true;
        this.isLoaded = false;

        this.tradersLoading = true;
        this._dataservice
            .getAll<any>(this._configuration.GetAllTradeStatsApi)
            .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.tradersLoading = false;
                    console.log(resp);
                    this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                    return;
                }
                // this._traders = resp.trades.reverse();

                console.log(resp);
                // this._profit = resp.profit;
                // this._pips = resp.pips;
                // console.log(this._pips);
                // this._favored = resp.position;
                this._loss = ((resp.successRate.filter(x => x.pl === 'loss')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                this._success = ((resp.successRate.filter(x => x.pl === 'profit')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                console.log(this._loss, this._success)
                // this._loss = 35;
                // this._success = 65;
                this.tradersLoading = false;
                if (this._loss > 0 || this._success > 0) {
                    this.isLoaded = true;
                }
                this.tableLoading = false;
                this.openTrades = resp.openTrades;
                this.closeTrades = resp.closeTrades;                
                this.sixMonth = resp.sixMonth;
                this.totalInActiveTradesLastWeek = resp.totalInActiveTradesLastWeek;
                this.totalActiveTradesLastWeek = resp.totalActiveTradesLastWeek;
                this.totalPipsGained = resp.totalPipsGained;
                this.topTradedPairs = resp.topTradedPairs;
                this.totalInActiveTradesLastMonth = resp.totalInActiveTradesLastMonth;
                this.totalActiveTradesLastMonth = resp.totalActiveTradesLastMonth;
                this.totalInActiveTradesToday = resp.totalInActiveTradesToday;
                this.totalActiveTradesToday = resp.totalActiveTradesToday;
                this.activeTrades = resp.activeTrades;
                this.TotalInActiveTradesCount = resp.TotalInActiveTradesCount;
                this.inActiveTrades = resp.inActiveTrades;
                this.successRate = resp.successRate;
                this.tabbedChartComponent.setDataForChart({
                    openTrades: this.openTrades, closeTrades: this.closeTrades, totalInActiveTradesLastWeek: this.totalInActiveTradesLastWeek,
                    totalActiveTradesLastWeek: this.totalActiveTradesLastWeek, totalInActiveTradesLastMonth: this.totalInActiveTradesLastMonth, totalActiveTradesLastMonth: this.totalActiveTradesLastMonth, totalInActiveTradesToday: this.totalInActiveTradesToday, totalActiveTradesToday: this.totalActiveTradesToday
                })
                console.log(this.topTradedPairs);
                //this.chart1Component.setDataForChart(this.topTradedPairs);

                let MostProfitablePairs = resp.sixMonth.topPair.map(x => {
                    let val = resp.sixMonth.sixMonthData.filter(r => r.pair === x).map(v => { return v.Total });
                    return {
                        name: x,
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: val
                    }
                });

                //this.chart2Component.setOption(resp.sixMonth.MonthNames, resp.sixMonth.topPair, MostProfitablePairs);
                //this.chart4Component.setOption(resp.totalPipsGained);
                //this.Table1Component.setDataForTable(resp.activeTrades);
                //this.Table2Component.setDataForTable(resp.inActiveTrades);
                // this.barChartComponent.setDataForChart({closeTrades:this.closeTrades, totalInActiveTradesLastWeek:this.totalInActiveTradesLastWeek,
                //     totalInActiveTradesLastMonth:this.totalInActiveTradesLastMonth, totalInActiveTradesToday:this.totalInActiveTradesToday
                // })
            },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                    this.tradersLoading = false;
                },
                () => {
                });




    }

    journalDeleted() {
        this.initializeVariables();
        this.initData();
    }

    initializeVariables() {
        this._traders = [];
        this._profit = [];
        this._pips = [];
        this._favored = [];
        this._loss = 0;
        this._success = 0;
        this._tableData = []
        this._downloadExcel = false;
    }

    exportAsXLSX(): void {
        console.log('exportAsXLSX');
        this.excelService.exportAsExcelFile(this._tableData, 'journal');
    }

    downloadExcel() {
        console.log('downloadExcel');
    }

    somePhone = () => {
        this.toastrService.show(this._configuration.SomePhone, '',
            {
                status: this._configuration.ToasterStatusInfo,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
            });
        this.tradersLoading = true;
        this._dataservice
            .getAll<any>(this._configuration.GetAllJournalStatsApi)
            .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.tradersLoading = false;
                    this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                    return;
                }
                this._traders = resp.trades.reverse();

                this._profit = resp.profit;
                this._pips = resp.pips;
                this._favored = resp.position;
                //this._loss = ((resp.successRate.filter(x => x.pl === 'loss')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                //this._success = ((resp.successRate.filter(x => x.pl === 'profit')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                this._loss = 35;
                this._success = 65;
                console.log(this._loss);
                console.log(resp);
                this.tradersLoading = false;
            },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                    this.tradersLoading = false;
                },
                () => {
                });
    };
}
