import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HubService } from './HubService';
import { EChartOption, graphic } from 'echarts';
import { flipchart2mComponentm } from './flipchart2m/flipchart2m.component';
import { Chart2Componentm } from './chart2m/chart2m.component';
import { ApiService } from '../dataservice/apiservice.component';
import {TraderService} from './TraderService';
import {Chart4Componentnew} from './chart4new/chart4new.component';
import CCC from './../dataservice/streamer.utility.js';
@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss'],

})
export class TraderComponent implements OnInit {
  @ViewChild(flipchart2mComponentm) flipchart2mComponentm: flipchart2mComponentm;
  @ViewChild(Chart4Componentnew) Chart4Componentnew:Chart4Componentnew;
  @ViewChild(Chart2Componentm) Chart2Componentm: Chart2Componentm;
  firstRowData = [
    { crypto: "BTC", value: "$6.539232", percent: "1.81%", arrow: "nb-arrow-dropdown", color: "red" },
    { crypto: "ETH", value: "$1.2792", percent: "3.81%", arrow: "nb-arrow-dropup", color: "green" },
    { crypto: "GAME", value: "$11.039232", percent: "1.81%", arrow: "nb-arrow-dropdown", color: "red" },
    { crypto: "LBC", value: "$0.588418", percent: "1.81%", arrow: "nb-arrow-dropup", color: "green" },
    { crypto: "NEO", value: "$161.51", percent: "8.21%", arrow: "nb-arrow-dropup", color: "green" }
  ]

  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 9535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },

  ]
  rv(x: number) {
    return Number.parseFloat((Math.random() * x).toFixed(2));
  }
  tableHead = ["#", "COIN", "PRICE", "MARKET CAP", "VOLUME (24H)", "SUPPLY", "CHANGE", "LAST 24H"];
  tableBody = [
    { name: "Bitcoin", abb: "BTC", price: this.rv(10000), market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 1.49 },
    { name: "Ethereum", abb: "ETH", price: this.rv(10000), market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 10.27 },
    { name: "XRP", abb: "XRP", price: this.rv(10000), market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: -2.98 },
    { name: "EOS", abb: "eos", price: this.rv(10000), market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: 5.52 },
    { name: "Bitcoin Cash", abb: "BCH", price: this.rv(10000), market: this.rv(100), volume: this.rv(100), supply: this.rv(100), change: -9.33 },
  ]
  public marquee: any;//=[{type:"BTC", price:0,arrow:"nb-arrow-dropup"},{type:"ETH", price:0,arrow:"nb-arrow-dropup"}];
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
  loadingSocket: boolean = true;
  defaultData: any = "BTC";
  liveSubs: any;
  currentPrice = {};
  TotalVolume: any = {};
  firstRowActualData_1 = [];
  personalBalance = [];
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
  coinPercentage = 0;
  marketPerformance:any={};
  chartOption: EChartOption;
  timeChartOption: EChartOption;
  marketCapChartOption: EChartOption;
  lineChartOption: EChartOption;
  interval: Subscription;
  m2Selection: any = "BTC";
  BTC50Data: any = [];
  XRP50Data: any = [];
  ETH50Data: any = [];
  LTC50Data: any = [];
  liveTradeLoading:boolean=false;
  constructor(private hubService: HubService,private _dataservice: ApiService,
    private traderService:TraderService
    ) { }
    
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
      this.loadingSocket = false;
      
      this.marquee = message.message.marquee;
      if(message.message.totalCoins)
      {
        this.totalCoins=message.message.totalCoins
      }
      if(message.message.totalExchanges)
      {
        this.totalExchanges=message.message.totalExchanges;
      }
      if (message.message.MarketDominance)
      {
        this.MarketDominance = message.message.MarketDominance;
          //  console.log(this.marquee)
      }
      
      if (message.message.TotalMarketCap) {
        this.TotalMarketCap = message.message.TotalMarketCap;
        this.TotalMarketCapArr.push(message.message.TotalMarketCap.value);
        this.flipchart2mComponentm.setOptions(this.TotalMarketCapArr, true);

      }

      if(message.message.TotalVolume)
      {
        this.TotalVolume = message.message.TotalVolume;
        //console.log(this.TotalVolume);
      }
      
      if (this.marquee) {
        this.marketPerformance={
          totalCoins:this.totalExchanges,
          totalExchanges:this.totalExchanges,
          BTCData: this.marquee.filter(x=>x.type==="BTC")
        }
        this.Chart4Componentnew.totals(this.marketPerformance);
        this.allcoinhistory = this.allcoinhistory.concat(this.marquee);
         
        if (this.allcoinhistory.length >= 1100) {
          this.allcoinhistory.splice(this.allcoinhistory.length - 100, 100);
        }
        this.BTC50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => {
          let now = new Date();
          return {
            name: now.toString(),
            value: [
              now.getTime() ,
              x.price
            ]
          }
        }
        
        ));
        
        this.XRP50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));
        this.ETH50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));
        this.LTC50Data = this.BTC50Data.concat(this.marquee.filter(x => x.type === "BTC").map(x => x.price));

        if (this.m2Selection !== this.Chart2Componentm.getSelectedValue()) {
          this.Chart2Componentm.clearData();
          this.m2Selection = this.Chart2Componentm.getSelectedValue();
          
        }
        if (this.m2Selection === "BTC") {
          let _selectionData = this.marquee.filter(x => x.type === "BTC" && x.price>0).map(x => {
            let now = new Date();
            return {
              name: now.toString(),
              value: [
                 (now.getTime()-(now.getTime()/1000/60/60/24|0)*24*60*60*1000)/1000,

                //[now.getHours(), now.getMinutes(), now.getSeconds()].join(''),
                x.price
              ]
            }
          }

          )[0];
          if(_selectionData)
          {
            this.Chart2Componentm.setDataForChart(_selectionData);
          }
          
          // console.log(_selectionData.length>0)
          //if(_selectionData && _selectionData.length>0)
          
        }


      }





    })
  }
  ngOnInit(): void {
    this.personalBalance.push({ symbol: 'BTC', quantity: 2, value: 0, percent: 0 });
    this.getLiveData();
    this.getLiveTrade();

    $("#selectedCoin").click(function () {
      var currentCoin = $("#selectedCoin").text();
      if ($("nb-option").click()) {
        currentCoin = $("#selectedCoin").text();
        //console.log(currentCoin);
      }
    });

    setInterval(
      start, 1000);
    function start() {

      var i;
      for (i = 0; i < 5000; i++) {
        var movingSlide;
        var decimalLeft;


        movingSlide = (Math.random() - .211 - .00999999999999) / 10;
        decimalLeft = (.69 - movingSlide - .009999999999999) * 100;


        // $(".md-bar-triangle").animate({
        //         left: decimalLeft + "%",
        //   	  }, 1000, function() {            
        //         return decimalLeft;
        //         // Animation complete.            
        //   	  });

        //   $( ".md-bar-left" ).animate({
        //     width: (decimalLeft) + "%",
        //   }, 1000, function() {
        //     console.log(decimalLeft);
        //     return decimalLeft;
        //     // Animation complete.
        //   });
        //   $( ".md-bar-right" ).animate({
        //     width: (100 - decimalLeft) + "%",
        //   }, 1000, function() {
        //     // Animation complete.
        //   });

      }
      $("#right-percent-inner").html(((97.9999 - decimalLeft - .0111111111)).toFixed(2));
      $("#left-percent-inner").html(decimalLeft.toFixed(2));
    }


    $("#count-sum").keyup(function () {

      var sum = 0;
      var selectedCoin = $("#selectedCoin").text();
      var selectedCurrency = $("#selectedCurrency").text();
      console.log(selectedCoin);
      console.log(selectedCurrency);
      if (selectedCoin === "BTC" && selectedCurrency === "USD") {
        $("#count-sum").each(function () {
          sum += parseFloat((Number($(this).val()) * 11369.20).toFixed(4));
        });
      } else if (selectedCoin === "ETH" && selectedCurrency === "USD") {
        $("#count-sum").each(function () {
          sum += parseFloat((Number($(this).val()) * 293.12).toFixed(4));
        });
      } else if (selectedCoin === "BTC" && selectedCurrency === "GBP") {
        $("#count-sum").each(function () {
          sum += parseFloat((Number($(this).val()) * 9079.39).toFixed(4));
        });
      } else if (selectedCoin === "ETH" && selectedCurrency === "GBP") {
        $("#count-sum").each(function () {
          sum += parseFloat((Number($(this).val()) * 234.08).toFixed(4));
        });
      }

      $("#totalPrice").val(sum);
    });

    // this.interval = interval(1000).subscribe(_ => {
    //   this.updateData();
    // })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.interval.unsubscribe();
    this.traderService = undefined;
    this.hubService=undefined;
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
  getData(idx: number, val: string) {
    return this.secondRowData[idx][val];
  }
  changeLiveTrades(val)
  {
    console.log(val);
    console.log(this.fsym);
    if(this.fsym!==val)
    {
      this.fsym=val;
      this.getLiveTrade();
    }
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
