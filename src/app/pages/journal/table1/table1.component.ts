import { Configuration } from './../../dataservice/app.constant.component';
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {NbDialogService, NbToastrService} from '@nebular/theme';

import {TableModalComponent} from './table-modal/table-modal.component';
import moment from 'moment';
import {ApiService} from '../../dataservice/apiservice.component';
import {Router} from '@angular/router';

@Component({
    selector: 'traders-log-table1',
    templateUrl: './table1.component.html',
    styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
    @Input() tableBody: any[];
    @Output() data = new EventEmitter<any[]>();
    @Output() someEvent = new EventEmitter<string>();
    @Output() journalLogDeleted = new EventEmitter<any>();

    deleteIndex: number = 0;
    tableHead = ['#', 'Pair', 'Opened', 'Closed', 'Position', 'Contract/Lot size', 'Pip Gain/Loss', 'Profit/Loss', 'Delete'];
    // tableBody = [
    //   { pair: "BTC/USD", opened: new Date(2019, 5, 16).getTime(), closed: new Date(2019, 5, 18).getTime(), position: 'Short', clSize: 5, pip: +150, profitLoss: +150 },
    //   { pair: "BTC/USD", opened: new Date(2019, 5, 16).getTime(), closed: new Date(2019, 5, 19).getTime(), position: 'Long', clSize: 22, pip: -50, profitLoss: -50 },
    // ]
    /*ngOnChanges(changes: any) {}*/

    constructor(private toast: NbToastrService, private dialog: NbDialogService, private _dataservice: ApiService,
                private _router: Router, private router: Router, private _configuration: Configuration,
                private dialogService: NbDialogService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.data.emit(this.tableBody);
        }, 1000);
    }

    ngOnDestroy(): void {
        this.data.unsubscribe();
    }

    filter(col: number) {
        switch (col) {
            case 2:
                this.tableBody.sort((a, b) => b.opened - a.opened);
                break;
            case 3:
                this.tableBody.sort((a, b) => b.closed - a.closed);
                break;
            case 5:
                this.tableBody.sort((a, b) => b.clSize - a.clSize);
                break;
            case 6:
                this.tableBody.sort((a, b) => b.pip - a.pip);
                break;
            case 7:
                this.tableBody.sort((a, b) => b.profitLoss - a.profitLoss);
                break;
        }
    }

    isValid(a, b): boolean {
        return isNullOrUndefined(a) && isNullOrUndefined(b);
    }

    async add() {
        /*const ref = !setPosition ? this.dialog.open(TableModalComponent) : this.dialog.open(TableModalComponent, {
            context: {
              log: {pair: null,opened: null,closed: null,position: setPosition,clSize: null,pip: null,profitLoss: null,contract: null}
            }
        });*/
        const ref = this.dialog.open(TableModalComponent);
        const res = await ref.onClose.toPromise();
        if (res) {
            // console.log(res)
            let dbOpenDate = moment(res.opened).format('YYYY-MM-DD');
            let dbCloseDate = moment(res.closed).format('YYYY-MM-DD');

            // let day=moment(this.userEvents[i].eventDate).format('DD');

            res.openDate = dbOpenDate;
            res.closeDate = dbCloseDate;

            this._dataservice
                .postCall<any>(this._configuration.AddJournalLogApi, res)
                .subscribe(resp => {
                        if (resp.status === this._configuration.ResponseStatusError) {
                            this.toast.show(this._configuration.ErrorAddingToDatabase, '',
                            {
                                status: this._configuration.ToasterStatusError,
                                duration: this._configuration.ToasterDuration,
                                position: this._configuration.ToasterPosition
                            });
                            return;
                        }

                        if (resp.success) {
                            let openDate = moment(res.opened).format('MM-DD-YYYY');
                            let closeDate = moment(res.closed).format('MM-DD-YYYY');

                            res.openDate = openDate;
                            res.closeDate = closeDate;

                            this.tableBody.push(res);

                            if (resp.achievement) {
                                this.toast.info(resp.achievement, 'Achievement');
                            }

                            this.data.emit(this.tableBody);
                            this.callParent();

                            this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                            this._router.onSameUrlNavigation = 'reload';
                            this._router.navigate(['/journal/']).then();
                        }
                    },
                    error => {
                        console.log(error);
                        this.toast.show(this._configuration.ErrorFetchingResult, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                    },
                    () => {
                    });
        }
    }

    open(dialog: TemplateRef<any>, index) {
        this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' })
        .onClose.subscribe(result => {
            if (result === 'yes') {
                this.deleteIndex = index;
                this.deleteLog();
            };
        });
      }

    deleteLog() {

        this._dataservice
        .postCall<any>(this._configuration.DeleteJournalLogApi, {id: this.tableBody[this.deleteIndex].id})
        .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.toast.show(this._configuration.ErrorDeletingLog, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    return;
                }

                if (resp.success || resp.status === 'SUCCESS') {
                    this.toast.show(this._configuration.JournalDeletedSuccessfully, '',
                    {
                        status: this._configuration.ToasterStatusSuccess,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.journalLogDeleted.emit();
                }
                
            },
            error => {
                console.log(error);
                this.toast.show(this._configuration.ErrorFetchingResult, '',
                {
                    status: this._configuration.ToasterStatusError,
                    duration: this._configuration.ToasterDuration,
                    position: this._configuration.ToasterPosition
                });
            },
            () => {
            });

    }

    downloadExcel() {
        // this.onFilter.emit('Register click');
        this._dataservice.filter('Register click');
        console.log('callParent');
    }

    callParent() {
        this.someEvent.next('somePhone');
    }
}
