import { Configuration } from './../../../dataservice/app.constant.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
declare var $: any;

@Component({
    selector: 'app-table-modal',
    templateUrl: './table-modal.component.html',
    styleUrls: ['./table-modal.component.scss']
})
export class TableModalComponent implements OnInit {

    journalForm = new FormGroup({
        'pair': new FormControl('', [Validators.required]),
        'opened': new FormControl('', [Validators.required]),
        'closed': new FormControl('', [Validators.required]),
        'position': new FormControl('', [Validators.required]),
        // 'clSize': new FormControl('', [Validators.required]),
        'pip': new FormControl('', [Validators.required]),
        'profitLoss': new FormControl('', [Validators.required]),
        'contract': new FormControl('', [Validators.required, Validators.min(1)]),
      });

    pairSelectValues = ['a/usd', 'b/usd', 'c/usd', 'd/usd'];
    
    pairList = [];
    positionList = [];
    pairDropdownSettings = {};
    positionDropdownSettings = {};
    
    
    constructor(private ref: NbDialogRef<any>, private _configuration: Configuration) {
    }

    // numberOnly(event): boolean {
    //     const charCode = (event.which) ? event.which : event.keyCode;
    //     return !(charCode > 31 && (charCode < 48 || charCode > 57 || charCode === 45));
    // }

    // selectedPosition(e) {
    //     console.log(e);
    //     this.positionSelected = true;
    //     this.log.position = e;
    // }

    ngOnInit() {

        this.initDropdown();
        // $(document).ready(function(){

        // setTimeout(function(){

        //         $(".testButton").click(function(){
        //             $(".bubbletest").animate({
        //     opacity: "1",
        //   width: "500px",
        //   }, 300, function() {
        //   setTimeout(function(){
        //               $(".bubbletest").animate({
        //       opacity: "0",
        // 	  width: "10px",
        //     }, 300, function() {
        //     });
        //   }, 4200);

        //   });
        // })

        // }, 500);

        // });
    }

    initDropdown() {
        this.pairList = 
        [{'id':1, 'itemName':'BTC/USD'},{'id':2, "itemName":"XRP/USD"},{'id':3,"itemName":"ETH/USD"},{'id':4,"itemName":"USDT/USD"},{'id':5,"itemName":"CRO/USD"},{'id':6,"itemName":"BCH/USD"},
        {'id':7,"itemName":"LTC/USD"},{'id':7,"itemName":"EOS/USD"},{'id':8,"itemName":"BNB/USD"},{'id':9,"itemName":"THX/USD"},{'id':10,"itemName":"LINK/USD"},{'id':11,"itemName":"FLC/USD"},{'id':12,"itemName":"AION/USD"},{'id':13,"itemName":"HEDG/USD"},{'id':14,"itemName":"BSV/USD"},
        {'id':15,"itemName":"HT/USD"},{'id':16,"itemName":"XTZ/USD"},{'id':17,"itemName":"TRX/USD"},{'id':18,"itemName":"XLM/USD"},{'id':19,"itemName":"ADA/USD"},{'id':20,"itemName":"MDM/USD"},{'id':21,"itemName":"XMR/USD"},{'id':22,"itemName":"ATOM/USD"},{'id':23,"itemName":"FTXT/USD"},
        {'id':24,"itemName":"OKB/USD"},{'id':25,"itemName":"SLV/USD"},{'id':26,"itemName":"NEO/USD"},{'id':27,"itemName":"HYN/USD"},{'id':28,"itemName":"USDC/USD"},{'id':29,"itemName":"BTMX/USD"},{'id':30,"itemName":"ETC/USD"},{'id':31,"itemName":"BEC/USD"},{'id':32,"itemName":"MKR/USD"},
        {'id':33,"itemName":"MIOTA/USD"},{'id':34,"itemName":"YAP/USD"},{'id':35,"itemName":"DASH/USD"},{'id':36,"itemName":"ZB/USD"},{'id':37,"itemName":"DDAM/USD"},{'id':38,"itemName":"ONT/USD"},{'id':39,"itemName":"SXP/USD"},{'id':40,"itemName":"VET/USD"},{'id':41,"itemName":"XEM/USD"},
        {'id':42,"itemName":"BTT/USD"},{'id':43,"itemName":"BAT/USD"},{'id':44,"itemName":"DOGE/USD"},{'id':45,"itemName":"ZEC/USD"},{'id':46,"itemName":"PAX/USD"},{'id':47,"itemName":"KBC/USD"},{'id':48,"itemName":"ZRX/USD"},{'id':49,"itemName":"DCR/USD"},{'id':50,"itemName":"MIXI/USD"},
        {'id':51,"itemName":"LAMB/USD"},{'id':52,"itemName":"MOF/USD"},{'id':53,"itemName":"QNT/USD"},{'id':54,"itemName":"KCS/USD"},{'id':55,"itemName":"QTUM/USD"},{'id':56,"itemName":"ABBC/USD"},{'id':57,"itemName":"MATIC/USD"},{'id':58,"itemName":"TUSD/USD"},{'id':59,"itemName":"THCH/USD"},
        {'id':60,"itemName":"THR/USD"},{'id':61,"itemName":"RSR/USD"},{'id':62,"itemName":"CENNZ/USD"},{'id':63,"itemName":"SEELE/USD"},{'id':64,"itemName":"DCN/USD"},{'id':65,"itemName":"MCO/USD"},{'id':66,"itemName":"YOU/USD"},{'id':67,"itemName":"SOLVE/USD"},{'id':68,"itemName":"ALGO/USD"},
        {'id':69,"itemName":"GNO/USD"},{'id':70,"itemName":"HOLO/USD"},{'id':71,"itemName":"IOST/USD"},{'id':72,"itemName":"CONT/USD"},{'id':73,"itemName":"REP/USD"},{'id':74,"itemName":"DX/USD"},{'id':75,"itemName":"GT/USD"},{'id':76,"itemName":"BTM/USD"},{'id':77,"itemName":"THETA/USD"},
        {'id':78,"itemName":"BTG/USD"},{'id':79,"itemName":"OMG/USD"},{'id':80,"itemName":"NANO/USD"},{'id':81,"itemName":"WAVES/USD"},{'id':82,"itemName":"QQQ/USD"},{'id':83,"itemName":"CET/USD"},{'id':84,"itemName":"ENJ/USD"},{'id':85,"itemName":"DGB/USD"},{'id':86,"itemName":"MANA/USD"},
        {'id':87,"itemName":"CEL/USD"},{'id':88,"itemName":"CHZ/USD"},{'id':89,"itemName":"LSK/USD"},{'id':90,"itemName":"MXM/USD"},{'id':91,"itemName":"KMD/USD"},{'id':92,"itemName":"EKT/USD"},{'id':93,"itemName":"BCD/USD"},{'id':94,"itemName":"COCOS/USD"},{'id':95,"itemName":"LUNA/USD"},
        {'id':96,"itemName":"SNT/USD"},{'id':97,"itemName":"MX/USD"},{'id':98,"itemName":"ENG/USD"},{'id':99,"itemName":"XVG/USD"}]

        // [
        //     { 'id': 1, 'itemName': 'BTC/USD' },
        //     { 'id': 2, 'itemName': 'XRP/USD' },
        //     { 'id': 3, 'itemName': 'c/usd' },
        //     { 'id': 4, 'itemName': 'd/usd' },
        //     { 'id': 5, 'itemName': 'e/usd' },
        //     { 'id': 6, 'itemName': 'f/usd' },
        //     { 'id': 7, 'itemName': 'g/usd' }
        // ];

        this.positionList = [
            { 'id': 1, 'itemName': 'Long' },
            { 'id': 2, 'itemName': 'Short' }
        ];

        this.pairDropdownSettings = {
            singleSelection: true,
            text: 'Select Pair',
            enableSearchFilter: true,
        };
        this.positionDropdownSettings = {
            singleSelection: true,
            text: 'Select Position',
            enableSearchFilter: false,
        };
    }

    add() {
        let values = {...this.journalForm.value};
        values['pair'] = values['pair'][0].itemName;
        values.position = values.position[0].itemName;
        this.ref.close(values);
    }

    onItemSelect(item: any, control) {
    }
    onDeSelectAll(items: any, control) {
        this.journalForm.controls[control].setValue('');
    }
    showError(input: FormControl): string {
        if (input.errors.required) {
            return this._configuration.FieldRequired;
        } else if (input.errors.min) {
            return 'Positive numbers allowed.';
        }
    }
    dropdownClosed(control) {
        this.journalForm.controls[control].markAsTouched();
    }
}
