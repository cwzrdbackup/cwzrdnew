import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddWachlistComponent } from './add-wachlist/add-wachlist.component';

@Component({
  selector: 'app-wachlist',
  templateUrl: './wachlist.component.html',
  styleUrls: ['./wachlist.component.scss']
})
export class WachlistComponent implements OnInit {

  testData = [
    { name: "BTC", value: this.randomNumber(100000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "ETH", value: this.randomNumber(10000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "EOS", value: this.randomNumber(1000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "BNB", value: this.randomNumber(100), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "XRP", value: this.randomNumber(10000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "BCH", value: this.randomNumber(1000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" },
    { name: "LTC", value: this.randomNumber(100000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropup", color: "green" },
    { name: "USDT", value: this.randomNumber(1000), percent: this.randomNumber(1000), arrow: "nb-arrow-dropdown", color: "red" }
  ]

  constructor(private dialog: NbDialogService) { }

  ngOnInit() {
  }

  randomNumber(x) {
    return (Math.random() * x).toFixed(2);
  }

  addWachlist() {
    this.dialog.open(AddWachlistComponent);
  }
}
