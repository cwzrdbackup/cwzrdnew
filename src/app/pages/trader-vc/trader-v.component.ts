import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { VHubService } from './VHubService';
import { EChartOption, graphic } from 'echarts';
import { ochart1newComponentnew } from './ochart1new/ochart1new.component';

import {TraderVService} from './TraderVService';
import { flipchart2mComponentm } from './flipchart2m/flipchart2m.component';
import { flipchart3mComponentm } from './flipchart3m/flipchart3m.component';
import { Chart1Componentm } from './chart1m/chart1m.component';
import { Chart2Componentm } from './chart2m/chart2m.component';
import { Chart3Componentm } from './chart3m/chart3m.component';
import { Chart4Componentnew } from './chart4new/chart4new.component';
import { Table2Component } from './table2/table2.component';
import { Chart6Component } from './chart6/chart6.component';
import { Chart10Component } from './chart10/chart10.component';


import { Configuration } from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
import {DataService} from '../dataservice/utility.dataservice.component';

import {ApiService} from '../dataservice/apiservice.component';


import CCC from './../dataservice/streamer.utility.js';

@Component({
  selector: 'app-trader-v',
  templateUrl: './trader-v.component.html',
  styleUrls: ['./trader-v.component.scss']
})
export class TraderVComponent implements OnInit {
  @ViewChild(ochart1newComponentnew) ochart1newComponentnew: ochart1newComponentnew;
  @ViewChild(flipchart2mComponentm) flipchart2mComponentm: flipchart2mComponentm;
  @ViewChild(flipchart3mComponentm) flipchart3mComponentm: flipchart3mComponentm;
  @ViewChild(Chart1Componentm) Chart1Componentm: Chart1Componentm;
  @ViewChild(Chart2Componentm) Chart2Componentm: Chart2Componentm;
  @ViewChild(Chart3Componentm) Chart3Componentm: Chart3Componentm;
  @ViewChild(Chart4Componentnew) Chart4Componentnew: Chart4Componentnew;
  @ViewChild(Table2Component) Table2Component: Table2Component;
  @ViewChild(Chart6Component) Chart6Component: Chart6Component;
  @ViewChild(Chart10Component) Chart10Component: Chart10Component;
  
  

  
  data_mkperformance: any[] = [
    // { value: 186284553, name: 'Bitcoin', shortCoin: 'BTC', color:'green', arrow:'nb-arrow-dropup' },
    // { value: 23796204, name: 'Ethereum', shortCoin: 'ETH', color:'green', arrow:'nb-arrow-dropup' },
    // { value: 13904981, name: 'Ripple', shortCoin: 'XRP', color:'green', arrow:'nb-arrow-dropup' },
    // { value: 6144005, name: 'Litecoin', shortCoin: 'LTC' , color:'green', arrow:'nb-arrow-dropup'},
    // { value: 5648801, name: 'Bitcoin Cash', shortCoin: 'BCH', color:'green', arrow:'nb-arrow-dropup' },
    // { value: 4655438, name: 'Binance Coin', shortCoin: 'BNB', color:'green', arrow:'nb-arrow-dropup' },
  ];
  marquee: any;//=[{type:"BTC", price:0,arrow:"nb-arrow-dropup"},{type:"ETH", price:0,arrow:"nb-arrow-dropup"}];
  TotalMarketCap: any = {};
  TotalMarketCapArr: any = [];
  MarketDominance: any = {};
  loading: boolean;
  fsym: any = "BTC";
  tsym: any = "USD";
  totalCoins:any=0;
  totalExchanges:any=0;
  allcoinhistory = [];
  loadingLiveTrade: boolean = true;
  reconnecting:boolean=false;
  initialLoading:boolean=true;
  loadingSocket: boolean = true;
  defaultData: any = "BTC";
  liveSubs: any;
  currentPrice = {};
  TotalVolume: any = {};
  firstRowActualData_1 = [];
  personalBalance = [];
  baseData=[];
  coinData = [{ name: 'BTC', percent: 0, data: [] }, { name: 'XRP', percent: 0, data: [] }, { name: 'ETH', percent: 0, data: [] }, { name: 'LTC', percent: 0, data: [] }];
  PriceMKTCap = [{ name: 'BTC', percent: 0, data_1: [], data_2: [], data_3: [] }, { name: 'XRP', percent: 0, data_1: [], data_2: [], data_3: [] }, { name: 'ETH', percent: 0, data_1: [], data_2: [], data_3: [] }, { name: 'LTC', percent: 0, data_1: [], data_2: [], data_3: [] }];
  totalBalance: any = {};
  TopCoinData = [];
  liveTrade = [];
  now = new Date();
  oneDay = 24 * 3600 * 1000;
  value = Math.random() * 1000;
  balanceHistory = [];
  coinHistory = [];
  selectionName = 'BTC';
  lineSelectionName = 'BTC';
  c4selection="TOTAL";
  coinPercentage = 0;
  marketPerformance:any={};
  chartOption: EChartOption;
  timeChartOption: EChartOption;
  marketCapChartOption: EChartOption;
  lineChartOption: EChartOption;
  interval: Subscription;
  m2Selection: any = "BTC";
  m3Selection:any="BTC";
  c6Selection:any="BTC";
  BTC50Data: any = [];
  XRP50Data: any = [];
  ETH50Data: any = [];
  LTC50Data: any = [];
  balance:any={value:0, percent:0};
  liveTradeLoading:boolean=false;
  purchaseValue:any=0;
  traderHistory=[];
  coinSelected="BTC";
  currencySelected="USD";
  convertingValues:boolean=false;
  convertInterval:any;
  pressed:boolean=false;
  convertedValue:any;
  digitalDashMin:any=0;
  digitalDashMax:any=0;
  isDigitalLoading:boolean=false;
  changeLiveTrades:any;
  convertValues=event=>{
    console.log(event);
    if(!this.convertInterval)
    {
      
      this.convertInterval=setTimeout(() => {
        this.makeConversionCall(event);
      }, 1000);
    }
    else
    {
      console.log('inside else')
      clearInterval(this.convertInterval);
      this.convertingValues=null;
      this.convertInterval=setTimeout(() => {
        this.makeConversionCall(event);
      }, 1000);
    }
    
  }
  changeCoin=(event, value)=>{
    this.coinSelected=event;
    if(!isNaN(value))
    {
      this.makeConversionCall(value);
    }
  }
  changeCurrency=(event, value)=>{
    this.currencySelected=event;
    if(!isNaN(value))
    {
      this.makeConversionCall(value);
    }

  }

  getCoinMinMax=(coinName)=>{
    this.isDigitalLoading=true;
    this._dataservice
            .postCall<any>(this._configuration.getCoinHighLow,{coinName:coinName})
            .subscribe(resp => {
              this.isDigitalLoading=false;
                    if (resp.status === this._configuration.ResponseStatusError) {
                      
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    this.isDigitalLoading=false;
                    this.digitalDashMax=resp.highLow.high;
                    this.digitalDashMin=resp.highLow.low;
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.isDigitalLoading=false;
                    
                },
                () => {
                  this.isDigitalLoading=false;
                });
  }
  makeConversionCall=(value)=>{
    this.convertingValues=true;
    this._dataservice
            .postCall<any>(this._configuration.convertValuesApi,{coinName:this.coinSelected, currencyName:this.currencySelected, amount:value})
            .subscribe(resp => {
              this.convertingValues=false;
                    if (resp.status === this._configuration.ResponseStatusError) {
                      
                        this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    this.convertedValue=resp.value.toFixed(2);
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.convertingValues=false;
                    
                },
                () => {
                  this.convertingValues=false;
                });
  }

  constructor(private hubService: VHubService,private _dataservice: ApiService,
    private traderService:TraderVService,
    
    private _passingDataservice: DataService,
    private _configuration: Configuration, private toastrService: NbToastrService
    ) { }

  ngOnInit() {
    // this.personalBalance.push({ name: 'BTC', quantity: 2, value: 0, percent: 0, purchased:4565 });
    // this.personalBalance.push({ name: 'ETH', quantity: 29, value: 0, percent: 0, purchased:450 });

    this._dataservice
            .getAll<any>(this._configuration.getTradersApi)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.initialLoading = false;
                        // this.toastrService.show(this._configuration.ErrorFetchingContent, '',
                        // {
                        //     status: this._configuration.ToasterStatusError,
                        //     duration: this._configuration.ToasterDuration,
                        //     position: this._configuration.ToasterPosition
                        // });
                        return;
                    }
                    
                    this.initialLoading = false;
                    console.log(resp);
                    resp.portfolioCoinList.map(x=>{
                      this.purchaseValue+=x.CoinValue;
                      this.personalBalance.push({name:x.CoinName, quantity:x.CoinCount, value:0, percent:0, purchased:x.CoinValue});

                      this.baseData.push(
                        { name: x.CoinName,coin:x.CoinCount, value: 0,price:0, percent: 0, change: 0, arrow: "nb-arrow-dropup", color: "#00ff39", img: `./assets/Coins/${x.CoinName.toLowerCase()}.png`, }
                      )

                    })
                    this.traderHistory=resp.traderHistory;
                    this.digitalDashMax=resp.coinHighLow.high;
                    this.digitalDashMin=resp.coinHighLow.low;
                     this.Chart1Componentm.setProfitHistory(resp.profit);
                     this.Chart1Componentm.setChart8Data(this.traderHistory);
                     this.Chart2Componentm.setChart9Data(resp.changeHistory);
                    // this.allTimeHigh.value=resp.allTimeHighHistory?resp.allTimeHighHistory.TotalHigh:0;
                    // this.allTimeHigh.date=resp.allTimeHighHistory?resp.allTimeHighHistory.forDate:0;

                    // this.allTimeLow.value=resp.allTimeLowHistory?resp.allTimeLowHistory.TotalLow:0;
                    // this.allTimeLow.date=resp.allTimeLowHistory?resp.allTimeLowHistory.forDate:0;
                    // this.topPerformers=resp.topPerformers;
                    // this.watchList=resp.watchList;
                    // this.history=resp.history;
                    
                },
                error => {
                    console.log(error);
                    this.toastrService.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.initialLoading=false;
                },
                () => {
                });


    this.getLiveData();
    this.getLiveTrade();
  }
  changeSelection(event) {
    this.m2Selection=event;
  }
  changec3mSelection=(event)=>{
    this.m3Selection=event;
    
    this.Chart3Componentm.setClearForChart10();
    
  }
  changec4Selection(event){
    this.c4selection=event;
    // console.log(event  + '\n'+ "in new env")
  }
  changec6Selection(event){
    this.c6Selection=event;
    //fetch minmax
    this.getCoinMinMax(event);
  }
  getLiveTrade=()=>{
    this.liveTradeLoading=true;
    this._dataservice.getAllOutside<any>(`https://min-api.cryptocompare.com/data/subs?fsym=${this.fsym}&tsyms=${this.tsym}`)
    .subscribe(data=>{
      
      let subs = data['USD']['TRADES'];
      this.liveSubs=subs;
      this.traderService.setSubscription(subs);
      this.traderService.getMessages().subscribe((message:any)=>{
        this.loadingLiveTrade=false;
        this.liveTradeLoading=false;
        var tradeField = message.message.substr(0, message.message.indexOf("~"));
        if (tradeField == CCC.STATIC.TYPE.TRADE) {
          this.transformData(message.message);
        }
      })
    })
  }
  getLiveData = () => {
    this.hubService.getMessages().subscribe((message: any) => {
      this.loadingLiveTrade = false;
      // console.log(message)
      // if(message.disconnected)
      // {
      //   // this.loadingSocket=true;
      //   this.reconnecting=true;
      // }
      if(message.message && message.message.marquee)
      {
        
        this.loadingSocket=false;
        this.reconnecting=false;
      }
      
      this.marquee = message.message.marquee;
      if(message.message && message.message.totalCoins)
      {
        this.totalCoins=message.message.totalCoins
      }
      if(message.message && message.message.totalExchanges)
      {
        this.totalExchanges=message.message.totalExchanges;
      }
      if (message.message && message.message.MarketDominance)
      {
        this.MarketDominance = message.message.MarketDominance;
        this.MarketDominance.percentNumber=parseFloat(this.MarketDominance.percent)
          //  console.log(this.marquee)
      }
      
      if (message.message && message.message.TotalMarketCap) {
        this.TotalMarketCap = message.message.TotalMarketCap;
        this.TotalMarketCapArr.push(message.message.TotalMarketCap.value);
         this.flipchart2mComponentm.setData(message.message.TotalMarketCap.value);
        
      }
      // console.log(this.TotalMarketCap);
      if(message.message && message.message.TotalVolume)
      {
        this.TotalVolume = message.message.TotalVolume;
        this.TotalVolume.percentNumber=parseFloat(this.TotalVolume.percent);
         this.flipchart3mComponentm.setData(this.TotalVolume.value, this.TotalVolume);
        //console.log(this.TotalVolume);
      }
      
      if (this.marquee) {
        this.marketPerformance={
          totalCoins:this.totalExchanges,
          totalExchanges:this.totalExchanges,
          BTCData: this.marquee.filter(x=>x.type==="BTC")
        }
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
         this.Chart1Componentm.setData((bVal-purchasedVal).toFixed(2));
        this.balance.arrow = bVal===this.balance.value?this.balance.arrow:(bVal>this.balance.value?
          "nb-arrow-dropup":"nb-arrow-dropdown")
         ;
        //  this.balance.value>bVal?'nb-arrow-dropdown':'nb-arrow-dropup';
        this.balance.color = bVal===this.balance.value?this.balance.color:(bVal>this.balance.value?
          "green":"red")
         ;
        this.balance.value=bVal.toFixed(2);
        this.balance.percent = bPercent.toFixed(2);//?bPercent/this.balance.length:0;
         this.ochart1newComponentnew.setData({graph:this.personalBalance,balance:this.balance});
        // console.log(message.message);
        this.Chart4Componentnew.totals(this.marketPerformance);
        this.allcoinhistory = this.allcoinhistory.concat(this.marquee);
        if (this.allcoinhistory.length >= 1100) {
          this.allcoinhistory.splice(this.allcoinhistory.length - 100, 100);
        }
        // this.BTC50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => {
        //   let now = new Date();
        //   return {
        //     name: now.toString(),
        //     value: [
        //       now.getTime() ,
        //       x.price
        //     ]
        //   }
        // }
        
        // ));
        
        // this.XRP50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));
        // this.ETH50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));
        // this.LTC50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));

        // if (this.m2Selection !== this.Chart2Componentm.getSelectedValue()) {
        //   this.Chart2Componentm.clearData();
        //   this.m2Selection = this.Chart2Componentm.getSelectedValue();
          
        // }
        
          let _selectionData = this.marquee.filter(x => x.type === this.m2Selection && x.price>0).map(x => {
            let now = new Date();
            return {
              name: now.toString(),
              value: [
                 (now.getTime()-(now.getTime()/1000/60/60/24|0)*24*60*60*1000)/1000,
                //[now.getHours(), now.getMinutes(), now.getSeconds()].join(''),
                x.price
              ],
              percent:x.percent,
              color:x.color,
              arrow:x.arrow
            }
          }

          )[0];
          if(_selectionData)
          {
            this.Chart2Componentm.setDataForChart(_selectionData);
          }
          let _selection3Data=this.marquee.filter(x=>x.type===this.m3Selection && x.price>0).map(x=>{
            let now=new Date();
            return{
              time: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),
              mktCap: x.marketCap,
              price:x.price,
              color:x.color,
              percent:x.percent,
              arrow:x.arrow
            }
          })[0];
          
          if(_selection3Data){
            this.Chart3Componentm.setDataForChart(_selection3Data);
            // this.Chart10Component.setChartData(_selection3Data.price);
          }
          if(this.data_mkperformance.length==0)
          {
            let initials = [];
            for(let i=0;i<6;i++)
            initials.push(this.marquee[i]);
            initials.map(x=>{
              this.data_mkperformance.push({ value: 186284553, name: x.type, shortCoin: x.type, color:'green', arrow:'nb-arrow-dropup' });
            })
            this.Chart4Componentnew.setInitials(initials);
          }

          this.data_mkperformance.map(x=>{
            let marq = this.marquee.filter(r=>(r.type===x.shortCoin))[0];
            if(marq)
            {
              x.value=marq.marketCap,
              x.price=marq.price,
              x.percent=marq.percent
              x.arrow=marq.arrow
              x.color=marq.color
              x.TotalCoinSupply=marq.TotalCoinSupply
              x.supply=marq.supply
              x.volume=marq.volume
              x.TotalCoinSupply=marq.TotalCoinSupply

            }
          });
          
          
          if(this.TotalVolume && this.TotalMarketCap && this.MarketDominance)
          this.Chart4Componentnew.setData(this.data_mkperformance, message.message.totalCoins,message.message.totalExchanges, this.TotalMarketCap,this.TotalVolume,this.MarketDominance);
          // console.log(message.message);


        this.Table2Component.setData(this.marquee);
          // console.log(this.data_mkperformance);
          //Chart3Componentm
          // console.log(message.message)
          // console.log(_selectionData.length>0)
          //if(_selectionData && _selectionData.length>0)
          
            let _c6selection = this.marquee.filter(x=>x.type===this.c6Selection)[0]
            // .map(x=>{
            //   x.value=x.price;
            //   x.name=x.type;
            // })[0];
            // console.log(this.c6Selection);
            // console.log(_c6selection);
            if(_c6selection && !this.isDigitalLoading)
            {
              if(_c6selection.price<this.digitalDashMin)
              {
                this.digitalDashMin=_c6selection.price;
              }
              if(_c6selection.price>this.digitalDashMax)
              {
                this.digitalDashMax=_c6selection.price;
              }
              this.Chart6Component.setData([{name:_c6selection.type, value:_c6selection.price}], this.digitalDashMin,this.digitalDashMax);
            }


      }





    })
  }
  findArrow=(oldValue, newValue, currentArrow)=>{
    return newValue ===oldValue?currentArrow:(newValue>oldValue?"nb-arrow-dropup":"nb-arrow-dropdown");
  }
  transformData = (data)=> {
    var coinfsym = CCC.STATIC.CURRENCY.getSymbol(this.fsym);
    var cointsym = CCC.STATIC.CURRENCY.getSymbol(this.tsym)
    var incomingTrade = CCC.TRADE.unpack(data);
   
    var newTrade = {
      Market: incomingTrade['M'],
      Type: incomingTrade['T'],
      ID: incomingTrade['ID'],
      Price: CCC.convertValueToDisplay(cointsym, incomingTrade['P']),
      Quantity: CCC.convertValueToDisplay(coinfsym, incomingTrade['Q']),
      Total: CCC.convertValueToDisplay(cointsym, incomingTrade['TOTAL'])
    };
    
    if (incomingTrade['F'] & 1) {
      newTrade['Type'] = "SELL";
    }
    else if (incomingTrade['F'] & 2) {
      newTrade['Type'] = "BUY";
    }
    else {
      newTrade['Type'] = "UNKNOWN";
    }
  
    this.displayMyData(newTrade);
  };
  displayMyData=(data:any)=>{
    
    this.liveTrade.push({Type:data.Type,Market:data.Market, Price:data.Price,Quantity:data.Quantity,Total:data.Total, Coin:this.fsym});
    if(this.liveTrade.length>=6)
    {
      this.liveTrade.splice(0,1);
    }
    
    
  }

}
