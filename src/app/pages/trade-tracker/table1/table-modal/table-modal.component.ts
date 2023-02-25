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
        this.pairList = [
            { 'id': 1, 'itemName': 'a/usd' },
            { 'id': 2, 'itemName': 'b/usd' },
            { 'id': 3, 'itemName': 'c/usd' },
            { 'id': 4, 'itemName': 'd/usd' },
            { 'id': 5, 'itemName': 'e/usd' },
            { 'id': 6, 'itemName': 'f/usd' },
            { 'id': 7, 'itemName': 'g/usd' }
        ];
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
