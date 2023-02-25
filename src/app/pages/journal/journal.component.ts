import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import {Component, OnInit} from '@angular/core';
import {DataService} from '../dataservice/utility.dataservice.component';
import {ExcelService} from './../dataservice/excel.service';

import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../dataservice/apiservice.component';

@Component({
    selector: 'app-journal',
    templateUrl: './journal.component.html',
    styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
    tradersLoading: boolean = false;
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
        this.initData();
    }

    initData() {
        this.tradersLoading = true;
        this.tableLoading = true;
        this.isLoaded = false;

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
                    console.log(this._pips);
                    this._favored = resp.position;
                    this._loss = ((resp.successRate.filter(x => x.pl === 'loss')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                    this._success = ((resp.successRate.filter(x => x.pl === 'profit')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                    console.log('this._loss');
                    console.log(this._loss);
                    console.log(resp);
                    this.tradersLoading = false;
                    if (this._loss > 0 || this._success > 0) {
                        this.isLoaded = true;
                    }
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

        this.tableLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.GetJournalLogListApi, {})
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

                    this.tableLoading = false;
                    this._tableData = resp.logs;
                    console.log(this._tableData);
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
                    this._loss = ((resp.successRate.filter(x => x.pl === 'loss')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
                    this._success = ((resp.successRate.filter(x => x.pl === 'profit')[0].total / resp.successRate.reduce((sum, x) => sum.total + x.total)) * 100).toFixed(2);
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
