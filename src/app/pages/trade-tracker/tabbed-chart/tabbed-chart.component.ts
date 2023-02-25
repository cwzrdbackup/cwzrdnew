import { Component, OnInit,Output,Input,EventEmitter,ViewChild,SimpleChanges} from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { TestBed } from '@angular/core/testing';
import { barChartComponent } from './../bar-chart/bar-chart.component';
import {ShortNumberPipe} from '../../../pipes/short-number.pipe';
import { ShowcasePopupComponent } from '../../book/showcase-popup/showcase-popup.component';
@Component({
  selector: 'app-tabbed-chart',
  templateUrl: './tabbed-chart.component.html',
  styleUrls: ['./tabbed-chart.component.scss']
})
export class tabbedChartComponent implements OnInit {
  @Output()
  m3changed = new EventEmitter<string>();
  public tabbedData: any;
  @ViewChild(barChartComponent) barChartComponent: barChartComponent;
  testData = {
    "BTC": { value: 3456.28, percent: 4.785},
    "ETH": { value: 1456.28, percent: 1.285},
    "XRP": { value: 856.28, percent: 0.453},
    "LTC": { value: 1256.28, percent: 3.115},
  }
  coins = [
    { name: "BTC", price: 8421, percent: 0, change: 200, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "ETH", price: 885, percent: 0, change: 80, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "XRP", price: 75, percent: 0, change: 5, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "LTC", price: 175, percent: 0, change: 14, arrow: "nb-arrow-dropup", color: "#00ff39" },
  ]

  chartXAxis = ["A", "B", "C"]

  chartYValue: number[] = [100, 50, 65, 85, 90, 60, 75]

  selected:any=this.coins[0];
  // data = this.testData["BTC"];
  data:any;
  data1: number[] = [];
  data2: number[] = [];
  data3: any[] = [];
  timeStart: string;
  timeMilli: any;
  leftMargin: any;
  rightMargin: any;
  fontSize: any;
  percentNumber:any=0;
  barWidth: any;
  loading:boolean=true;
  clearData=()=>
  {
    this.data=[];
  }
  coinPrice:any;
  percent:any;
  arrow:any;
  color:any;
  dataOptions:any;
  setClearForChart10=()=>{
    //this.barChartComponent.removeChartData();
  }

  ngOnChanges(changes: SimpleChanges) {
    // for (let property in changes) {
    //   if (property === 'tabbedData' && this.tabbedData.openTrades) {
    //     console.log(this.tabbedData.openTrades)
    //     this.setOption(this.tabbedData.openTrades)
    //   }
    // }

  }
  setDataForChart(tabbedData) {
    this.tabbedData=tabbedData;

    this.setOption(this.tabbedData.openTrades)

  
  }
  constructor(private pipe:ShortNumberPipe) { }

  ngOnInit() {    

    if (window.innerWidth < 768) {
      this.fontSize = 8;
      this.leftMargin = 35;
      this.rightMargin = 15;
      this.barWidth = 10;
    } else if (768 <= window.innerWidth && window.innerWidth < 992) {
      this.fontSize = 10;
      this.leftMargin = 55;
      this.rightMargin = 30;
      this.barWidth = 20;
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.fontSize = 12;
      this.leftMargin = 60;
      this.rightMargin = 30;
      this.barWidth = 30;
    } else if (window.innerWidth >= 1200) {
      this.fontSize = 14;
      this.leftMargin = 60;
      this.rightMargin = 30;
      this.barWidth = 48;
    }
    // console.log(this.tabbedData.openTrades)
    // this.setOption(this.tabbedData.openTrades);
  }

  chartOption: EChartOption;

//   randomData(x, data: any[], isNew: boolean, val: number): any[] {
//     for (let i = 0; i < val; i++) {
//       isNew ? '' : data.shift();
//       data.push((Math.random() * x + 100 * (Math.round(Math.random()) * 2 - 1
// ) + 7800).toFixed(2));
//     }
//     return data;
//   }
  
//   randomDataMC(y, data: any[], isNew: boolean, val: number): any[] {
//     for (let j = 0; j < val; j++) {
//       isNew ? '' : data.shift();
//       data.push((17755312 * y + Math.random() * 1775555312 * Math.round(Math.random()) * 2 - 1).toFixed(2));
//     }
//     return data;
//   }
  
//   randomTime(z, data: any[], isNew: boolean, val3: number): any[] {
//     for (let k = 0; k < val3; k++) {
//       isNew ? '' : data.shift();
//       data.push( this.timeStart + (this.timeMilli + (1)).toString() );
//     }
//     return data;
//   }
  

  change(e) {
    this.m3changed.emit(e);
    // this.data.length = 0;
    this.data1.length=0;
    this.data2.length=0;
    this.data3.length=0;
    this.loading=true;
    this.selected = this.coins.find(v => v.name === e);
  //   this.data = this.testData[e];    
  //   this.data2 = this.randomData(1000, [], true, 12);
	// this.data1 = this.data2.map(v=> v * 17755312);
	// this.data3 = this.randomTime(1000, [], true, 10);
  //   this.setOption(this.data1, this.data2, this.data3, true)
  }

  setOption(nestedData) {
    
    this.chartOption = {
      animation: true,
      grid: {
        top: 50,
        bottom: 50,
        left: this.leftMargin,
        right: this.rightMargin,
        //right: 50,
      },
      color: ["#b189ff", "#419ded", "#ffaa00"],
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 16,
        formatter: function (params) {        
            return `${params[0].marker} Total Trades : ${params[0].value.total_number}<br />
                    ${params[1].marker} Trades In Profit : ${params[0].value.win}<br />
                    ${params[2].marker} Pips Gained : ${params[0].value.pipGained}<br />
                    `;
        }
        // formatter: (p: any) => {
        //   const time = p[0].axisValue;
        //   const left = this.pipe.transform(p[0].value);
        //   const right = "$" + p[1].value.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        //   return "Time: " + time + " <br> " + "Market value: " + "$" + left + " <br> " + "Price: " + right;
        // }
      },
      dataset: {
        dimensions: ['day','total_number', 'win', 'pipGained'],
        source:nestedData,
        // source: [
        //     {day: 'Monday', 'Total Trades': 53, 'Total Wins': 45, 'Pips Gained': 38},
        //     {day: 'Tuesday', 'Total Trades': 64, 'Total Wins': 51, 'Pips Gained': 44},
        //     {day: 'Wednesday', 'Total Trades': 45, 'Total Wins': 64, 'Pips Gained': 55},
        //     {day: 'Thursday', 'Total Trades': 48, 'Total Wins': 56, 'Pips Gained': 75},
        //     {day: 'Friday', 'Total Trades': 40, 'Total Wins': 51, 'Pips Gained': 88},
        //     {day: 'Saturday', 'Total Trades': 33, 'Total Wins': 85, 'Pips Gained': 66},
        //     {day: 'Sunday', 'Total Trades': 43, 'Total Wins': 65, 'Pips Gained': 77},
        // ]
      },
      xAxis: [
        {
          type: "category",
          // axisLine: {
          //   show: true,
          // },
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          // axisPointer: {
		      // z: -1,
          //   show: true,
          //   lineStyle: {
          //     color: "#5350ad",
          //     type: "solid",
			    // width: 2,
          //   },
          //   label: {
          //     show: true,
          //   }
          // },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            //fontSize: this.fontSize,
            // show: true,
          },
          // data: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          // position: "bottom"
        }
      ],
      yAxis: [
        {
          // type: "value",
          // splitNumber: 6,
          // // min:minM,
          // // max:maxM,
          // // min: 130000000000,
          // // max: 160000000000,
          // splitLine: {
          //   show: false,
          //   lineStyle: {
          //     //type: "dashed"
          //   }
          // },
          // axisLine: {
          //   show: true,
          // },
          // axisPointer: {
          //   show: false
          // },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          axisLabel: {
            color: "#fff",
            //fontSize: this.fontSize,
            //formatter: (v) => { return (v / 1000000000 ).toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})+ "B" }
          },
          // position: "left"
        },
        {
          type: "value",
          //splitNumber: 6,
          // min:minP,
          // max:maxP,
          // min: 6722,
          // max: 10000,
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            show: false
          },
          axisPointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            //fontSize: this.fontSize,
            // formatter: (v) => {
            //   if (v < 1) {
            //     return "$" + v.toLocaleString('en-GB', {minimumFractionDigits: 4, maximumFractionDigits: 4}) 
            //   } else {
            //     return "$" + v.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2}) 
            //   }
            // }
          },
          position: "right"
        }
      ],
      legend: {
        show: false,
        textStyle: {
          color: '#fff',
        },
        selectedMode: false,
      },
      series: [
        {
          type: 'bar',
          id: "one",   
          barWidth: this.barWidth,
          barGap: "0%",       
          //smooth: true,
          // itemStyle: {
          //   normal: {
          //     opacity: 0,
          //   },
          //   emphasis: {
          //     color: '#b189ff',
          //     borderColor: "#b189ff",
          //     borderWidth: 3,
          //     opacity: 1,
          //   },
          // },
          // symbolSize: 4,
          // lineStyle: {
          //   color: '#b189ff',
          //   // color: new graphic.LinearGradient(0, 1, 1, 0, [
          //   //   {
          //   //     offset: 0,
          //   //     color: '#59ff8c'
          //   //   },
          //   //   {
          //   //     offset: 1,
          //   //     color: '#75fa5d'
          //   //   }
          //   // ]),
          //   width: 5,
          //   curveness: 1,
          //   // shadowColor: "#8fff94",
          //   // shadowBlur: 10,
			    //   opacity: 1,
          // },
          //data: [100,200,250,50,90,125,25]
        },
        {
          type: 'bar',
          id: "two",
          barWidth: this.barWidth,
          barGap: "0%",
          //smooth: true,
          // itemStyle: {
          //   normal: {
          //     opacity: 0,
          //   },
          //   emphasis: {
          //     color: '#b189ff',
          //     borderColor: "#b189ff",
          //     borderWidth: 3,
          //     opacity: 1,
          //   },
          // },
          // symbolSize: 4,
          // lineStyle: {
          //   color: '#b189ff',
          //   // color: new graphic.LinearGradient(0, 1, 1, 0, [
          //   //   {
          //   //     offset: 0,
          //   //     color: '#59ff8c'
          //   //   },
          //   //   {
          //   //     offset: 1,
          //   //     color: '#75fa5d'
          //   //   }
          //   // ]),
          //   width: 5,
          //   curveness: 1,
          //   // shadowColor: "#8fff94",
          //   // shadowBlur: 10,
			    //   opacity: 1,
          // },
          //data: [150,250,300,100,140,155,75]
        },
        {
          type: 'bar',
          id: "three",
          barWidth: this.barWidth,
          barGap: "0%",
          //smooth: true,
          // itemStyle: {
          //   normal: {
          //     opacity: 0,
          //   },
          //   emphasis: {
          //     color: '#b189ff',
          //     borderColor: "#b189ff",
          //     borderWidth: 3,
          //     opacity: 1,
          //   },
          // },
          // symbolSize: 4,
          // lineStyle: {
          //   color: '#b189ff',
          //   // color: new graphic.LinearGradient(0, 1, 1, 0, [
          //   //   {
          //   //     offset: 0,
          //   //     color: '#59ff8c'
          //   //   },
          //   //   {
          //   //     offset: 1,
          //   //     color: '#75fa5d'
          //   //   }
          //   // ]),
          //   width: 5,
          //   curveness: 1,
          //   // shadowColor: "#8fff94",
          //   // shadowBlur: 10,
			    //   opacity: 1,
          // },
          //data: [150,250,300,100,140,155,75]
        },
        // {
        //   type: 'bar',
        //   id: "two",
        //   smooth: true,
        //   itemStyle: {
        //     normal: {
        //       opacity: 0
        //     },
        //     emphasis: {
        //       color: '#419ded',
        //       borderColor: "#419ded",
        //       borderWidth: 3,
        //       opacity: 1,
        //     },
        //   },
        //   symbolSize: 9,
        //   yAxisIndex: 1,
        //   lineStyle: {
        //     color: '#419ded',
        //     // color: new graphic.LinearGradient(0, 1, 1, 0, [
        //     //   {
        //     //     offset: 0,
        //     //     color: '#a196f8'
        //     //   },
        //     //   {
        //     //     offset: 1,
        //     //     color: '#715ff6'
        //     //   }
        //     // ]),
        //     width: 5,
        //     curveness: 1,
        //     //shadowColor: "#6143e1",
        //     //shadowBlur: 10,
        //   },
        //   data: [50,150,175,100,165,55,100]
        // }
      ],

    }
  }
}
