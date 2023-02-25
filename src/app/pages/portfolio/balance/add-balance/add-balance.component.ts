import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.scss']
})
export class AddBalanceComponent implements OnInit {

  @Input() marquee: any;
  constructor(private ref: NbDialogRef<any>) { }
  purchasePrice:any=0;
  amount:any=0;
  coinSelection:any="BTC";
  ngOnInit() {
  }

  add(PurchasePrice, Amount) {
    
    this.ref.close({purchasePrice:PurchasePrice, amount:Amount, coinSelection:this.coinSelection})
  }

}
