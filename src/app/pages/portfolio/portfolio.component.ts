import { Component, OnInit, ViewChild } from '@angular/core';
import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService, NbGlobalLogicalPosition } from '@nebular/theme';

import { interval, Subscription } from 'rxjs';
import { Chartportfolio1m } from './balance/portfolio1m/portfolio1m.component';
import {BalanceComponent} from './balance/balance.component';
import {HistoryComponent} from './history/history.component';
import { pHubService } from './pHubService';
import {balancechartComponent} from './balancechart/ochart1new.component';
import {flipchartprofitComponent} from './flipchartprofit/flipchartprofit.component';
import {SplitComponent} from './split/split.component';
import {performersChartComponent} from './performerschart/performerschart.component';
import {DataService} from '../dataservice/utility.dataservice.component';

import {ApiService} from '../dataservice/apiservice.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild(BalanceComponent) BalanceComponent: BalanceComponent;
  @ViewChild(balancechartComponent) balancechartComponent: balancechartComponent;
  @ViewChild(SplitComponent) SplitComponent: SplitComponent;
  @ViewChild(flipchartprofitComponent) flipchartprofitComponent: flipchartprofitComponent;
  @ViewChild(HistoryComponent) HistoryComponent: HistoryComponent;
  @ViewChild(performersChartComponent) performersChartComponent: performersChartComponent;
  
  colors =[
    "#ef4f64","#5cef4f","#ef4f64","#5cef4f","#ef4f64","#32a893","#051714","#f23a50"
    ]
  personalBalance = [];
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 4535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },	
  ]
  baseData:any[]=[
    // { name: "BTC",coin:1.2, value: 9654,price:0, percent: 0, change: 125, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Bitcoin.svg", },
    // { name: "ETH",coin:8548, value: 2563,price:0, percent: 0, change: 57, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/ethereum.svg", history:[] },
    // { name: "EOS",coin:32158, value: 455,price:0, percent: 0, change: 24, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/eos.svg" , history:[]},
    // { name: "BNB",coin:65484, value: 258,price:0, percent: 0, change: 13, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Binance.svg" , history:[]},
    // { name: "XRP",coin:134548, value: 324,price:0, percent: 0, change: 11, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/ripple.svg", history:[] },
    // { name: "BCH",coin:132154, value: 100,price:0, percent: 0, change: 7, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/bitcoincash.svg", history:[] },
    // { name: "LTC",coin:1.2, value: 1244,price:0, percent: 0, change: 33, arrow: "nb-arrow-dropup", color: "#00ff39", img: "./assets/Litecoin.png", history:[] },
    // { name: "USDT",coin:1.2, value: 785,price:0, percent: 0, change: 24, arrow: "nb-arrow-dropdown", color: "#00ff39", img: "./assets/Tether.png", history:[] } 
  ];
    allLoading:boolean=true;
  // setData=(data)=>{
  //   this.Chartportfolio1m.setData()
  // }
  splitData:any=[];
  balance:any={value:0, percent:0};
  loadingSocket:boolean=true;
  interval: Subscription;
  marquee:any=[];
  proftLoss:any=[];
  profit=0;
  allTimeHigh:any={};
  allTimeLow:any={};
  YesterdayHigh:any=0;
  profitPercent:any=0;
  purchaseValue:any=0;
  profitColor:any="";
  profitArrow:any="";
  topPerformers:any=[];
  watchList:any=[];
  history:any=[];
  constructor(private hubService: pHubService,
    private _dataservice: ApiService, private _passingDataservice: DataService,
    private _configuration: Configuration, private toastrService: NbToastrService
    ) { }
    apiLoaded:boolean=false;
  getLiveData = () => {
    this.hubService.getMessages().subscribe((message: any) => {
      if(!this.apiLoaded)
      {
        this.getAPIData();
        this.apiLoaded=true;
      }
      if(message.message.marquee && this.apiLoaded)
      {
        if(message.message.marquee.length>0)
        {
          
          this.loadingSocket = false;
          
        }
        
      this.marquee=message.message.marquee;
      let bVal=0;
      let purchasedVal =0;
      let bPercent =0;
      this.personalBalance.map(x=>{
        // console.log(this.marquee.filter(r=>r.type.toString()==x.symbol));
        let marq=this.marquee.filter(r=>r.type===x.name)[0];
        let va = (x.quantity*marq.price);
        x.arrow = va ===x.value?x.arrow:(va>x.value?"nb-arrow-dropup":"nb-arrow-dropdown");
        x.color = va===x.value?x.color:(va>x.value?"green":"red");
        x.value=va;
        purchasedVal+=x.purchased;
        bVal+=x.value;
        x.percent=parseFloat(marq.percent);
        bPercent +=parseFloat(marq.percent);
      });

      this.profit = (bVal-purchasedVal);
      let profitYesterday = this.YesterdayHigh-purchasedVal;
      // console.log(this.profit, profitYesterday)
      //console.log(this.profitPercent);
      //console.log(profitYesterday);
      //console.log(this.profit);
      this.profitPercent = ((profitYesterday - this.profit)/profitYesterday) * 100;
      if(this.profitPercent<0)
      {
        this.profitColor="red";
        this.profitArrow="nb-arrow-dropdown";
      }
      else
      {
        this.profitColor="green";
        this.profitArrow="nb-arrow-dropup";
      }
      if(this.allTimeHigh.value<bVal)
      {
        this.allTimeHigh.value=bVal.toFixed(2);
        this.allTimeHigh.date=new Date();
      }
      if(this.allTimeLow.value>bVal)
      {
        this.allTimeLow={value:bVal.toFixed(2), date:new Date()}
      }
      this.flipchartprofitComponent.setData(this.profit.toFixed(2), this.profitColor, this.profitArrow,this.profitPercent);
      this.balance.arrow = bVal===this.balance.value?this.balance.arrow:(bVal>this.balance.value?
        "nb-arrow-dropup":"nb-arrow-dropdown")
       ;
      //  this.balance.value>bVal?'nb-arrow-dropdown':'nb-arrow-dropup';
      this.balance.color = bVal===this.balance.value?this.balance.color:(bVal>this.balance.value?
        "green":"red")
       ;
      this.balance.value=bVal.toFixed(2);
      this.balance.percent = bPercent.toFixed(2);
      // console.log(this.personalBalance);
      // console.log(this.balance);
      this.balancechartComponent.setData({graph:this.personalBalance,balance:this.balance});

      this.baseData.map(x=>{
        let marq=this.marquee.filter(r=>r.type===x.name)[0];
        if(marq)
        {
          // console.log(x.coin, marq.price)
          x.value=marq.price*x.coin;
          // console.log(x.percent, marq.percent)
          x.percent=parseFloat(marq.percent);
          
        }
       
      })
      if(this.splitData.length==0)
      {
        let counter = 0;
        this.baseData.map(x=>{
          
          this.splitData.push({ value: x.value,count:x.coin, type:x.name, name: x.name, label: { rich: { c: { color: x.percent<0?"#ff0579":"#00ff39", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: `/assets/Coins/${x.name.toLowerCase()}.png` } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropup.svg" } } } } });
          counter=counter+1;
        })
        
      }
      
      else
      this.splitData.map(x=>{
        let marq= this.baseData.filter(v=>v.name==x.type)[0];
        if(marq)
        {
          x.value=marq.value;
          x.label.rich.icon2.backgroundColor.image= 
          x.percent<0?"/assets/dropdown.svg":"/assets/dropup.svg";
          x.label.rich.c.color=x.percent<0?"#ff0579":"#00ff39";
          // x.percent===marq.percent?
          // x.label.rich.icon2.backgroundColor.image
          // :(x.percent>marq.percent?
          //   :)
          x.percent=marq.percent;
          
        }
      })
      // console.log(this.splitData)
      this.SplitComponent.setData(this.splitData);
      this.HistoryComponent.setTodayBalance(bVal);
      
      // console.log(this.baseData);

    }
    });
  }

  ngOnInit(): void {
    localStorage.setItem(this._configuration.showBadge3, 'true');
    this.getLiveData();
    // this.personalBalance.push({ name: 'BTC', quantity: 2, value: 0, percent: 0, purchased:4565 });
    // this.personalBalance.push({ name: 'ETH', quantity: 29, value: 0, percent: 0, purchased:450 });

    

  }
  getAPIData=()=>{
    this._dataservice
            .getAll<any>(this._configuration.getProfileApi)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.allLoading = false;
                        // this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        // {
                        //     status: this._configuration.ToasterStatusError,
                        //     duration: this._configuration.ToasterDuration,
                        //     position: this._configuration.ToasterPosition
                        // });
                        return;
                    }
                    this.YesterdayHigh=resp.yesterdayClosingBalance?resp.yesterdayClosingBalance.TotalHigh:0;
                    this.allLoading = false;
                    console.log(resp);
                    resp.portfolioCoinList.map(x=>{
                      this.purchaseValue+=x.CoinValue;
                      this.personalBalance.push({name:x.CoinName, quantity:x.CoinCount, value:0, percent:0, purchased:x.CoinValue});

                      this.baseData.push(
                        { name: x.CoinName,coin:x.CoinCount, value: 0,price:0, percent: 0, change: 0, arrow: "nb-arrow-dropup", color: "#00ff39", img: `./assets/Coins/${x.CoinName.toLowerCase()}.png`, }
                      )

                    })
                   
                    if(resp.allTimeHighHistory)
                    this.allTimeHigh.value=resp.allTimeHighHistory.TotalHigh?resp.allTimeHighHistory.TotalHigh:0;
                    else
                    this.allTimeHigh.value=0;
                    this.allTimeHigh.date=resp.allTimeHighHistory?resp.allTimeHighHistory.forDate:0;
                    if(resp.allTimeLowHistory)
                    this.allTimeLow.value=resp.allTimeLowHistory.TotalLow?resp.allTimeLowHistory.TotalLow:0;
                    else
                    this.allTimeLow.value=0;
                    this.allTimeLow.date=resp.allTimeLowHistory?resp.allTimeLowHistory.forDate:0;
                    this.topPerformers=resp.topPerformers?resp.topPerformers:[];
                    this.watchList=resp.watchList;
                    this.history=resp.history;
                    this.HistoryComponent.setData(this.history);
                    this.performersChartComponent.setData(resp.coinPerformanceHistory);
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: NbGlobalLogicalPosition.BOTTOM_END
                    });
                    this.allLoading=false;
                },
                () => {
                });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this.interval.unsubscribe();
  }

  getData(idx: number, val: string) {
    return this.secondRowData[idx][val];
  }



  trueOrFalse() {
    return Math.round(Math.random());
  }

}
