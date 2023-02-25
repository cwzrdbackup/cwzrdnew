import { Component, OnInit, ViewChild, Input,SimpleChanges, SimpleChange } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddBalanceComponent } from './add-balance/add-balance.component';
import { interval, Subscription } from 'rxjs';
import { Chartportfolio1m } from './portfolio1m/portfolio1m.component';
import {DataService} from '../../dataservice/utility.dataservice.component';

import {ApiService} from '../../dataservice/apiservice.component';
import { Configuration } from './../../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  @ViewChild(Chartportfolio1m) Chartportfolio1m: Chartportfolio1m;
  
  loading:boolean=false;
  topHundred:any=[];
  @Input() balance: any;
  testData = [
    { name: "BTC",coin:1.2, value: 9654,price:0, percent: 0, change: 125, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Bitcoin.svg", },
    { name: "ETH",coin:1.2, value: 2563,price:0, percent: 0, change: 57, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/ethereum.svg", history:[] },
    { name: "EOS",coin:1.2, value: 455,price:0, percent: 0, change: 24, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/eos.svg" , history:[]},
    { name: "BNB",coin:1.2, value: 258,price:0, percent: 0, change: 13, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Binance.svg" , history:[]},
    { name: "XRP",coin:1.2, value: 324,price:0, percent: 0, change: 11, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/ripple.svg", history:[] },
    { name: "BCH",coin:1.2, value: 100,price:0, percent: 0, change: 7, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/bitcoincash.svg", history:[] },
    { name: "LTC",coin:1.2, value: 1244,price:0, percent: 0, change: 33, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Litecoin.png", history:[] },
    { name: "USDT",coin:1.2, value: 785,price:0, percent: 0, change: 24, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/Tether.png", history:[] }
  ]
  data:any[];
  interval: Subscription;
  
  constructor(private dialog: NbDialogService,private _dataservice: ApiService, private _passingDataservice: DataService,
    private _configuration: Configuration, private toastrService: NbToastrService) { }
  setData=(data)=>{
    
    // this.Chartportfolio1m.setData(data);
    this.data=data;    
  }
  ngOnInit() {
    // this.interval = interval(1000).subscribe(_ => {
    //   this.updateData();
    // })
    console.log(this.balance.portfolio);
  }
  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'balance') {
          if(this.topHundred.length==0)
          {
            this.topHundred=this.balance.marquee;
          }
          
          // this.balance.portfolio.map(x=>{
          //   let marq= this.balance.marquee.filter(v=>v.type===x.name)[0];
          //   // console.log(marq)
          //   if(marq)
          //   {
              
          //       x.value=marq.price*x.coin
          //       x.price=marq.price;
          //       x.percent=marq.percent;
          //       x.color=marq.color;
          //       x.arrow=marq.arrow;
                
          //     // if(x.history.length>10)
          //     // x.history.shift();
          //     // x.history.push(marq.price);
          //   }
          // })
          
        } 
    }
}
  ngOnDestroy(): void {
    // this.interval.unsubscribe();
  }

  randomNumber(x) {
    return (Math.random() * x).toFixed(2);
  }

  addBalance() {
    const ref = this.dialog.open(AddBalanceComponent,{context:{marquee:this.topHundred}})
    ref.onClose.subscribe(res => {
      if (res) {
        //purchasePrice:PurchasePrice, amount:Amount, coinSelection:this.coinSelection
        this.loading=true;
        this._dataservice
            .postCall<any>(this._configuration.addCoinApi,{coinName:res.coinSelection,coinPrice:res.purchasePrice, coinCount:res.amount})
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.loading = false;
                    }
                    location.reload();
                  },error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.loading=false;
                },
                () => {
                });
      }
    });
  }

  deleteCoin(coinId){
    console.log(coinId)
    this._dataservice.postCall<any>("portfolio/deleteCoin", { 'Id': coinId })
      .subscribe((response: any) => {
        if (response.status === this._configuration.ResponseStatusError) {
          this.toastrService.show(this._configuration.ErrorFetchingResult, '',
          {
              status: this._configuration.ToasterStatusSuccess,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          return;
        }
        this.toastrService.show(this._configuration.portfolioDeleted, '',
        {
            status: this._configuration.ToasterStatusSuccess,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
        
      },
      error => {
        console.log(error);
        this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        {
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
      },
      () => {

      });
  }

  updateData() {
    this.testData.map(val => {
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
