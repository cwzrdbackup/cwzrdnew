import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddBalanceComponent } from './add-balance/add-balance.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  testData = [
    { name: "BTC", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "ETH", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "EOS", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "BNB", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "XRP", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "BCH", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "LTC", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "USDT", value: this.randomNumber(10000000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" }
  ]

  constructor(private dialog: NbDialogService) { }

  ngOnInit() {
  }

  randomNumber(x) {
    return (Math.random() * x).toFixed(2);
  }

  addBalance() {
    this.dialog.open(AddBalanceComponent)
  }

}
