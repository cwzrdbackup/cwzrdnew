import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddWachlistComponent } from './add-wachlist/add-wachlist.component';
import { interval, Subscription } from 'rxjs';

import {DataService} from '../../dataservice/utility.dataservice.component';

import {ApiService} from '../../dataservice/apiservice.component';
import { Configuration } from './../../dataservice/app.constant.component';
import { NbToastrService, NbGlobalLogicalPosition } from '@nebular/theme';
@Component({
  selector: 'app-wachlist',
  templateUrl: './wachlist.component.html',
  styleUrls: ['./wachlist.component.scss']
})
export class WachlistComponent implements OnInit {
  dataT2: any[] = [];
  loading:boolean=false;
  @Input() watchList: any;
  data:any[]=[];
  testData = [
    { name: "BTC",coin:1.3,price:0, value: 9252.54, percent: 2.02, arrow: "nb-arrow-dropup", color: "green", img: "./assets/Bitcoin.svg"},
    { name: "ETH", coin:1.3,price:0,value: 186.9, percent: 0.09, arrow: "nb-arrow-dropup", color: "green", img: "./assets/ethereum.svg"},
    { name: "EOS", coin:1.3,price:0,value: 3.36, percent: 0.96, arrow: "nb-arrow-dropdown", color: "red", img: "./assets/eos.svg" },
    { name: "BNB", coin:1.3,price:0,value: 20.20, percent: 1.88, arrow: "nb-arrow-dropup", color: "green", img: "./assets/Binance.svg" },
    { name: "XRP", coin:1.3,price:0,value: 0.3005, percent: 0.20, arrow: "nb-arrow-dropdown", color: "red", img: "./assets/ripple.svg" },
    { name: "BCH", coin:1.3,price:0,value: 295.57, percent: 0.99, arrow: "nb-arrow-dropdown", color: "red", img: "./assets/bitcoincash.svg" },
    { name: "LTC", coin:1.3,price:0,value: 59.46, percent: 1.24, arrow: "nb-arrow-dropup", color: "green", img: "./assets/Litecoin.png" },
    { name: "USDT",coin:1.3,price:0, value: 1.00, percent: 0.20, arrow: "nb-arrow-dropdown", color: "red", img: "./assets/Tether.png" }
  ]
  setData=(data)=>{
 
    // this.Chartportfolio1m.setData(data);
    this.data=data;
  }
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 348.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 355, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 654, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "PORTFOLIO BALANCE", value: 621.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 754.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 475, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 354, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  

  topHundred:any=[];
  interval: Subscription;

  constructor(private dialog: NbDialogService,private _dataservice: ApiService, private _passingDataservice: DataService,
    private _configuration: Configuration, private toastrService: NbToastrService) { }
  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'watchList') {
          // console.log('change')
          if(this.topHundred.length==0)
          {
            this.topHundred=this.watchList.marquee;
            // console.log(this.topHundred)
          }
          this.watchList.watchList.map(x=>{
            let marq= this.watchList.marquee.filter(v=>v.type===x.CoinName)[0];
            if(marq)
            {
              
                x.value=marq.price.toFixed(2);
                x.price=marq.price.toFixed(2);
                x.percent=marq.percent;
                x.percentVal=parseFloat(marq.percent);
              // if(x.history.length>10)
              // x.history.shift();
              // x.history.push(marq.price);
            }
          })
          
        } 
    }
}
  ngOnInit(): void {
  
    this.dataT2 = [167.33, 167.66, 168.65, 169.76, 170.43, 170.21, 169.34, 169.14, 168.43, 167.34, 168.70, 169.34]
	
	
  // this.interval = interval(1000).subscribe(_ => {
  //   this.updateData();
  // })
  
  setInterval(() => {
  this.dataT2 = this.randomData(1000, this.dataT2, false, 1);
  
       
  }, 1000);
  
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this.interval.unsubscribe();
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
  
  randomData(x, data: any[], isNew: boolean, val: number): any[] {
      for (let i = 0; i < val; i++) {
        isNew ? '' : data.shift();
	         data.push((Math.random() * x + 100 * (Math.round(Math.random()) * 2 - 1
	   ) + 7800).toFixed(2));
      }
      return data;
  }

  trueOrFalse() {
    return Math.round(Math.random());
  }

  randomNumber(x) {
    return (Math.random() * x).toFixed(2);
  }
  
  change(e) {
	this.dataT2 = this.randomData(1000, [], true, 12);
  }

  addWachlist() {
    let ref = this.dialog.open(AddWachlistComponent,{context:{topHundred:this.topHundred}});
    ref.onClose.subscribe(res => {
      if (res) {
        if(this.watchList.watchList.filter(x=>x.CoinName===res.coinName).length>0)
        {
          this.toastrService.show(this._configuration.ErrorExist,'',{
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: NbGlobalLogicalPosition.BOTTOM_END
        })
        }
        else
        {
          this._dataservice
          .postCall<any>(this._configuration.addWatchApi,{coinName:res.coinName})
          .subscribe(resp => {
                  if (resp.status === this._configuration.ResponseStatusError) {
                      this.loading = false;
                      this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                  {
                      status: this._configuration.ToasterStatusError,
                      duration: this._configuration.ToasterDuration,
                      position: NbGlobalLogicalPosition.BOTTOM_END
                  });
                  }
                  else
                  {
                    let coin = {CoinName:res.coinName};
                    this.watchList.watchList.push(coin);
                    // this.watchList.watchList.map(x=>{
                    //   let marq= this.watchList.marquee.filter(v=>v.type===x.CoinName)[0];
                    //   if(marq)
                    //   {
                        
                    //       x.value=marq.price;
                    //       x.price=marq.price;
                    //       x.percent=marq.percent;
                    //   }
                    // })
                  }
                  

                  //location.reload();
                },error => {
                  console.log(error);
                  this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                  {
                      status: this._configuration.ToasterStatusError,
                      duration: this._configuration.ToasterDuration,
                      position: NbGlobalLogicalPosition.BOTTOM_END
                  });
                  this.loading=false;
              },
              () => {
              });
        }
        

      }
    });
  }
}
