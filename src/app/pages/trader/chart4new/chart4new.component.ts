import { Component, OnInit, Input } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-chart4new',
  templateUrl: './chart4new.component.html',
  styleUrls: ['./chart4new.component.scss']
})
export class Chart4Componentnew implements OnInit {

  legend: any = {
    orient: 'horizontal',
    x: 'center',
    y: 'bottom',
    padding: 16,
    textStyle: {
      color: "#fff",
      fontSize: 12
    },
    data: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Lite Coin', 'XRP', 'EOS']
  }

  barStyle = {
    opacity: 1,
  }

  toogle = false;
  revealed = false;
  shortCoin: string;

  data: any[] = [
    { value: 186284553, name: 'Bitcoin', itemStyle: this.barStyle, shortCoin: 'BTC' },
    { value: 23796204, name: 'Ethereum', itemStyle: this.barStyle, shortCoin: 'ETH' },
    { value: 13904981, name: 'Ripple', itemStyle: this.barStyle, shortCoin: 'XRP' },
    { value: 6144005, name: 'Litecoin', itemStyle: this.barStyle, shortCoin: 'LTC' },
    { value: 5648801, name: 'Bitcoin Cash', itemStyle: this.barStyle, shortCoin: 'BCH' },
    { value: 4655438, name: 'Binance Coin', itemStyle: this.barStyle, shortCoin: 'BNB' },
  ];
  
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 4535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  
  chartOption1: EChartOption
  chartOption2: EChartOption;
  selectedCoin: string;
  selectedPrice: string;
  selectedPercent: string;
  selectedCoinShort: string;
  totalMarkets:Number;
  totalCoins:Number;
  selected = "TOTAL";
  interval: Subscription;

  constructor() { }
  totals(data){
    this.totalMarkets=data.totalExchanges;
    this.totalCoins=data.totalCoins;
  }
  setMainChart(data:any)
  {
    this.data=data;
  }
  ngOnInit() {
    this.setChartOption1(this.data);    
    this.setChartOption2();
    if (window.innerWidth > 1280) {
      this.chartOption1.legend["orient"] = "vertical";
      this.chartOption1.legend["x"] = "right";
      //this.chartOption1.legend["y"] = "center";
      //this.chartOption1.legend["itemWidth"] = 48;
      this.chartOption1.legend["itemHeight"] = 24;
      this.chartOption1.legend["left"] = "63%";
      this.chartOption1.series[0]["center"] = ["50%", "50%"];
      this.chartOption2.grid["left"] = 0;
    }
   this.interval = interval(1000).subscribe(_ => {
    // this.updateData();
   })
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.interval.unsubscribe();
    this.interval = interval(1000).subscribe(_ => {
      this.updateData();
    })
  }


  changeData() {
    this.data.map(v => {
      v.value = Math.random() * 1000000;
    })
  }

  setChartOption1(data: any) {
    this.chartOption1 = {
      tooltip: {
        trigger: "none",
        show: false,
      },
      color: ["#dd4b64", "#9d5ae5", "#5fabf7", "#b5e659", "#ffea00", "#f09537"],
      legend: {
        orient: 'horizontal',
        show: false,
        selectedMode: false,
        x: 'center',
        y: 'bottom',
        align: "left",
        itemHeight: 12,
        padding: 16,
        textStyle: {
          color: "#fff",
          fontSize: 24,
        },
        data: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Lite Coin', 'XRP', 'EOS']
      },
      grid: {
        show: true,
        bottom: -10,
        top: -10,
        left: -10,
        right: -10,
      },
      series: [
        {
          type: "pie",
          hoverOffset: 8,
          hoverAnimation: true,          
          legendHoverLink: true,
          radius: ['0%', '88%'],
          center: ["50%", "50%"],
          itemStyle: {

          },
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
            color: "#fff",
            fontSize: 10,
            fontWeight: "lighter",
            formatter: "Total Market Cap \n \n $1.321.132.546,21",
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: data
        }
      ]
    }
  }

  setChartOption2() {

    if (this.selectedCoin) {
      const price = (this.data.find(val => val.name === this.selectedCoin) as any).value;
      let total = 0;
      this.data.forEach(v => {
        total += v.value
      });
      this.selectedPrice = price;
      this.selectedPercent = (price / total).toFixed(2);
    }
    this.chartOption2 = {
      grid: {
        top: 20,
        left: 100,
        right: 0,
        bottom: 100,
      },
      dataset: {
        source: [
          [Math.random() * 10000000, 'Market Cap'],
          [Math.random() * 10000000, '24 Hour Volume'],
          [Math.random() * 10000000, 'Circulating Supply'],
          [21000000, 'Max Supply'],
        ]
      },
      xAxis: {
        max: 21000000,
        axisLabel: {
          color: "#d1d1ff",
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "transparent",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "transparent",
          },
        },
      },
      yAxis: {
        data: ['Max Supply', 'Circulating Supply', '24 Hour Volume', 'Market Cap'],
        axisLabel: {
          show: true,
          color: "#fff",
          fontSize: 11,
        },
        axisLine: {
          lineStyle: {
            color: "transparent",
          },
        },
        axisTick: {
          show: false,
        },
      },

      series: [
        { // For shadow
          type: 'bar',
          hoverAnimation: false,
          hoverOffset: 0,
          barWidth: '30%',
          barMinHeight: '100%',
          center: ["150%, 50%"],
          data: [21000000, 21000000, 21000000, 21000000,],
          cursor: 'default',
          itemStyle: {
            fontSize: 12,
            normal: {
              color: "#3e3781",
            },
            opacity: 1,
          },
          animation: false,
          barGap: '-100%',
          z: 1,
        },
        {
          type: 'bar',
          barWidth: '30%',
          barMinHeight: '100%',
          hoverAnimation: false,
          hoverOffset: 0,
          center: ["150%", "50%"],
          label: {
            show: true,
            position: ["0%", "120%"],
            color: "#fff",
            fontSize: 10,
            fontFamily: "Exo",
            width: '220',
            formatter: (data: any) => {
              var abc = data.value[0].toLocaleString();
              return abc + " " + this.shortCoin;
            }

          },
          itemStyle: {
            normal: {
              width: "30%",
              color: new graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: "#fec107",
              }, {
                offset: 1,
                color: "#ffea3a",
              }]),
            },
          },
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          },
          z: 2
        }
      ] as any[]
    };

  }

  clicked(e) {
    this.selectedCoin = e.data.name;
    this.selected = e.data.name;
    this.shortCoin = e.data.shortCoin;
    this.revealed = true;
    this.setChartOption2();
  }

  select(e) {
    this.selected = e;
    if (e === "TOTAL") {
      this.revealed = false;
    } else if (e === "Bitcoin") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "BTC";
      this.setChartOption2();
    } else if (e === "Ethereum") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "ETH";
      this.setChartOption2();
    } else if (e === "Ripple") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "XRP";
      this.setChartOption2();
    } else if (e === "Litecoin") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "LTC";
      this.setChartOption2();
    } else if (e === "Bitcoin Cash") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "BCH";
      this.setChartOption2();
    } else if (e === "Binance Coin") {
      this.selectedCoin = e;
      this.revealed = true;
      this.shortCoin = "BNB";
      this.setChartOption2();
    }
    //  else {
    //   this.selectedCoin = e;
    //   this.revealed = true;
    //   this.shortCoin = e;
    //   this.setChartOption2();
    // }
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
