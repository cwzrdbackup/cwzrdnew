import { Configuration } from './../../dataservice/app.constant.component';
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {NbDialogService, NbToastrService} from '@nebular/theme';

import {TableModalComponent} from './table-modal/table-modal.component';
import moment from 'moment';
import {ApiService} from '../../dataservice/apiservice.component';
import {Router} from '@angular/router';

@Component({
    selector: 'trader-tracker-table1',
    templateUrl: './table1.component.html',
    styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
    @Input() tableBody: any[];
    @Output() data = new EventEmitter<any[]>();
    @Output() someEvent = new EventEmitter<string>();
    @Output() journalLogDeleted = new EventEmitter<any>();

    deleteIndex: number = 0;
    tableHead = ['#', 'Trade ID', 'Pair', 'Opened', 'Closed', 'Position', 'Pip Gain/Loss', 'Profit/Loss'];
    // tableBody = [
    //   { pair: "BTC/USD", opened: new Date(2019, 5, 16).getTime(), closed: new Date(2019, 5, 18).getTime(), position: 'Short', clSize: 5, pip: +150, profitLoss: +150 },
    //   { pair: "BTC/USD", opened: new Date(2019, 5, 16).getTime(), closed: new Date(2019, 5, 19).getTime(), position: 'Long', clSize: 22, pip: -50, profitLoss: -50 },
    // ]
    /*ngOnChanges(changes: any) {}*/

    constructor(private toast: NbToastrService, private dialog: NbDialogService, private _dataservice: ApiService,
                private _router: Router, private router: Router, private _configuration: Configuration,
                private dialogService: NbDialogService) {
    }

    tableBodySample = [
        {a:'BTC/USD',b:'21-05-2020',c:'ACTIVE',d:'Long',e:'5',f:'6',g:'7',h:'8'},
        {a:'ETH/USD',b:'22-05-2020',c:'ACTIVE',d:'Long',e:'5',f:'6',g:'7',h:'8'},
        {a:'NZD/USD',b:'22-05-2020',c:'ACTIVE',d:'Short',e:'5',f:'6',g:'7',h:'8'},
    ];

    ngOnInit() {
        // setTimeout(() => {
        //     this.data.emit(this.tableBody);
        // }, 1000);
    }

    ngOnDestroy(): void {
        // this.data.unsubscribe();
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

    

   

    
    public tableData:any[];
   setDataForTable=(data)=>{
       this.tableData=data;
   }

    callParent() {
        this.someEvent.next('somePhone');
    }
}
