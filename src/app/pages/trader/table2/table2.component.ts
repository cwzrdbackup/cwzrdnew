import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {

  btcPrice: any[] = [];
  bchPrice: any[] = [];
  ethPrice: any[] = [];
  trxPrice: any[] = [];
  xrpPrice: any[] = [];
  
  dataT1: any[] = [];
  dataT2: any[] = [];
  dataT3: any[] = [];
  
  dataE1: any[] = [];
  dataE2: any[] = [];
  dataE3: any[] = [];
  
  btcMarketCapArrary: any[] = [];

  data1: number;
  data2: any[] = [];
  
  btcSupply: number;
  btcMarketCap: number;
    

  tableHead = ["#", "COIN", "PRICE", "MARKET CAP", "VOLUME (24H)", "SUPPLY", "CHANGE"]

  tableBody = [
    { name: "Bitcoin", abb: "BTC", price: this.rv(10000), coinIcon: "./assets/Coins/Bitcoin.svg", market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 1.49 },
    { name: "Ethereum", abb: "ETH", price: this.rv(10000), coinIcon: "./assets/Coins/ethereum.svg", market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 10.27 },
    { name: "XRP", abb: "XRP", price: this.rv(10000), coinIcon: "./assets/Coins/ripple.svg", market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: -2.98 },
    { name: "EOS", abb: "eos", price: this.rv(10000), coinIcon: "./assets/Coins/eos.svg", market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 5.52 },
    { name: "Bitcoin Cash", abb: "BCH", price: this.rv(10000), coinIcon: "./assets/Coins/bitcoincash.svg", market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: -9.33 },
  ]
  
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 9874.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1", volume: 27.48, marketCap: 165.87 },
    { title: "TOTAL MARKET CAP", value: 198.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2", volume: 27.48, marketCap: 165.87 },
    { title: "TOTAL VOLUME", value: 0.29454, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1", volume: 1.89, marketCap: 12.83 },
    { title: "MARKET DOMINANCE", value: 292.54, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2", volume: 27.48, marketCap: 165.87 },
	{ title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2", volume: 27.48, marketCap: 165.87 },	
  ]

  interval: Subscription;
    

  constructor() { }


  ngOnInit() {
  
  this.interval = interval(1000).subscribe(_ => {
    this.updateData();
  })
  
    this.data1 = 1500;
	
	this.dataT1 = [8150.05, 8131.74, 8196.65, 8016.49, 8037.97, 7944.31, 8006.76, 7898.73, 8049.92, 7871.69, 7797.70, 7823.34]
	this.dataT2 = [167.33, 167.66, 168.65, 169.76, 170.43, 170.21, 169.34, 169.14, 168.43, 167.34, 168.70, 169.34]
	this.dataT3 = [0.33, 1.66, 0.65, 0.76, 1.43, 1.21, 1.34, 1.14, 1.43, 1.34, 1.70, 1.34]
	
	this.dataT1 = [8150.05, 8131.74, 8196.65, 8016.49, 8037.97, 7944.31, 8006.76, 7898.73, 8049.92, 7871.69, 7797.70, 7823.34]
	this.dataT2 = [167.33, 167.66, 168.65, 169.76, 170.43, 170.21, 169.34, 169.14, 168.43, 167.34, 168.70, 169.34]
	this.dataT3 = [0.33, 1.66, 0.65, 0.76, 1.43, 1.21, 1.34, 1.14, 1.43, 1.34, 1.70, 1.34]
	

	this.btcPrice = [9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,9362.44, 9363.56, 9363.79, 9362.37, 9364.13, 9363.53, 9364.56, 9364.76, 9365.34, 9365.46,];
	this.bchPrice = [299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55, 299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55,299.42, 298.55, 297.86, 296.45, 298.11, 297.55, 298.33, 297.42, 298.55];
	this.ethPrice = [186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,186.51, 186.12, 185.78, 186.12, 185.33, 186.33, 185.12, 186.34, 185.34,];
	this.trxPrice  = [0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,0.02192, 0.02212, 0.02197, 0.02213, 0.02193, 0.02210, 0.02237, 0.02258, 0.02210, 0.02186,];
	this.xrpPrice = [0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,0.3033, 0.2973, 0.3012, 0.2983, 0.2997, 0.2912, 0.2987, 0.2910, 0.3075, 0.3019, 0.3134, 0.3014,];
	this.btcMarketCapArrary = [165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,
165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,165.55, 165.70, 165.75, 164.80, 165.23, 164.50, 165.12, 164.78, 165.89, 166.12,];
		

    setInterval(() => {
	  this.dataT1 = this.randomData(1000, this.dataT1, false, 1);
	  this.dataT2 = this.randomData6(1000, this.dataT2, false, 1);
	  this.dataT3 = this.randomData7(1, this.dataT3, false, 1);
      this.btcPrice = this.randomData(1000, this.btcPrice, false, 2000);
	  this.bchPrice = this.randomData2(1000, this.bchPrice, false, 2000);
	  this.ethPrice = this.randomData3(1000, this.ethPrice, false, 2000);
	  this.trxPrice = this.randomData4(1000, this.trxPrice, false, 2000);
	  this.xrpPrice = this.randomData5(1000, this.xrpPrice, false, 2000);
	  this.btcMarketCapArrary = this.btcMarketCapCalc(1000, this.btcMarketCapArrary, false, 2000);
    }, 1000);
  }

  randomData(x, data: any[], isNew: boolean, val: number): any[] {
      for (let i = 0; i < val; i++) {
        isNew ? '' : data.shift();
	         data.push((Math.random() * x + 100 * (Math.round(Math.random()) * 2 - 1
	   ) + 7800).toFixed(2));
      }
      return data;
  }
  
  randomData2(y, data: any[], isNew: boolean, val: number): any[] {
      for (let j = 0; j < val; j++) {
        isNew ? '' : data.shift();
	         data.push((Math.random() * j + 100 * (Math.round(Math.random()) * 2 - 1
	   ) + 7800).toFixed(2));
      }
      return data;
  }
  
  randomData3(y, data: any[], isNew: boolean, val: number): any[] {
      for (let k = 0; k < val; k++) {
        isNew ? '' : data.shift();
		data.push( this.ethPrice[k]);
      }
      return data;
  }
  randomData4(y, data: any[], isNew: boolean, val: number): any[] {
      for (let l = 0; l < val; l++) {
        isNew ? '' : data.shift();
		data.push( this.trxPrice[l]);
      }
      return data;
  }
  randomData5(x, data: any[], isNew: boolean, val: number): any[] {
      for (let i = 0; i < val; i++) {
        isNew ? '' : data.shift();
	         data.push((Math.random() * i + 100 * (Math.round(Math.random()) * 2 - 1
	   ) + .010).toFixed(2));
      }
      return data;
  }
  
  randomData6(y, data: any[], isNew: boolean, val: number): any[] {
      for (let a = 0; a < val; a++) {
        isNew ? '' : data.shift();
		data.push( (Math.random() * 1 + this.dataT2[a]))	;
      }
      return data;
  }
  
  randomData7(y, data: any[], isNew: boolean, val: number): any[] {
      for (let b = 0; b < val; b++) {
        isNew ? '' : data.shift();
		data.push( (Math.random() * 1 + this.dataT3[b]))	;
      }
      return data;
  }
  
  btcMarketCapCalc(y, data: any[], isNew: boolean, val: number): any[] {
      for (let n = 0; n < val; n++) {
        isNew ? '' : data.shift();
		data.push(this.btcMarketCapArrary[n]);
      }
      return data;
  }
	
  rv(x: number) {
    return Number.parseFloat((Math.random() * x).toFixed(2));
  }  

  change(e) {
	this.data1 = this.rv(10000);
	this.dataT1 = this.randomData(1000, [], true, 12);
    this.btcPrice = this.randomData(1000, this.btcPrice, false, 2000);
  this.bchPrice = this.randomData2(1000, this.bchPrice, false, 2000);
  this.ethPrice = this.randomData3(1000, this.ethPrice, false, 2000);
  this.trxPrice = this.randomData4(1000, this.trxPrice, false, 2000);
  this.xrpPrice = this.randomData5(1000, this.xrpPrice, false, 2000);
  this.btcMarketCapArrary = this.btcMarketCapCalc(1000, this.btcMarketCapArrary, false, 2000);
  }

  filter(col: number) {
    switch (col) {
      case 1: this.tableBody.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else +1
      });
        break;
      case 2: this.tableBody.sort((a, b) => b.price - a.price);
        break;
      case 3:  this.tableBody.sort((a, b) => b.market - a.market);
        break;
      case 4:  this.tableBody.sort((a, b) => b.volume - a.volume);
        break;
      case 5:  this.tableBody.sort((a, b) => b.supply - a.supply);
        break;
      case 6:  this.tableBody.sort((a, b) => b.change - a.change);
        break;
    }

  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.interval.unsubscribe();
  }

  getData(idx: number, val: string) {
    return this.secondRowData[idx][val];
  }

  updateData() {
  this.secondRowData.map(val => {
  const random = (Math.random() * val.change);
  const newVal = val.value + (this.trueOrFalse() ? random : -random);

  if (val.value > newVal) {
  val.arrow = "nb-arrow-dropdown";
  val.color = "red";
  val.percent = (val.value - newVal) / val.value * 100;
  } else {
  val.percent = (newVal - val.value) / val.value * 100;
  val.arrow = "nb-arrow-dropup";
  val.color = "#00ff39";
  }
  val.value = newVal;
  return val;
  })
  }

  trueOrFalse() {
    return Math.round(Math.random());
  }

}
