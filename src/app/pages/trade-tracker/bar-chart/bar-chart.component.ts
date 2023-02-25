import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class barChartComponent implements OnInit {

  @Input() inputData: any[];

  flipped: boolean = false;
  isLoaded: boolean = false;

  chartOption: EChartOption;


  xAxisData = [];
  data1 = [];
  data2 = [];

  leftMargin: any;
  rightMargin: any;
  fontSize: any;
  barWidth: any;


  constructor() { }

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
      this.barWidth = 50;
    }
    this.setOption();
  }
  // ngOnChanges(changes: any) {
  //   this.xAxisData = [];
  //   this.data1 = [];
  //   this.data2 = [];
  //   if (this.inputData) {
  //   for (let i = 0; i < this.inputData.length; i++)
  //   {
  //     this.xAxisData.push(i);
  //     this.data2.push({ value: this.inputData[i], itemStyle: { color: this.inputData[i] < 0 ? "#f00" : "#20c997" } });
  //   }
  // }
  //   this.setOption();
  //     // console.log('this.inputData.length');
  //     // console.log(this.inputData.length);
  //     if (this.inputData.length > 0) {
  //         this.isLoaded = true;
  //     }
  // }
  // parseData(): number {
  //   let total = 0;
  //   if (this.inputData) {
  //     this.inputData.forEach(d => total += d.profitLoss);
  //   }
  //   return total;
  // }

  flip() {
    this.flipped = !this.flipped;
  }

  setOption() {
    this.chartOption = {
      animation: true,
      grid: {
        top: 50,
        bottom: 50,
        left: this.leftMargin,
        right: this.rightMargin,
      },
      color: ["#b189ff", "#419ded", "#ffaa00"],
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 16,
        // formatter: (p: any) => {
        //   const time = p[0].axisValue;
        //   const left = this.pipe.transform(p[0].value);
        //   const right = "$" + p[1].value.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        //   return "Time: " + time + " <br> " + "Market value: " + "$" + left + " <br> " + "Price: " + right;
        // }
      },
      dataset: {
        dimensions: ['day', 'Total Trades', 'Trades in Profit', 'Pips Gained'],
        source: [                                                                                                                        
            {day: 'Wednesday', 'Total Trades': 1, 'Trades in Profit': 0, 'Pips Gained': 0},
            {day: 'Thursday', 'Total Trades': 0, 'Trades in Profit': 0, 'Pips Gained': 0},
            {day: 'Friday', 'Total Trades': 1, 'Trades in Profit': 1, 'Pips Gained': 39},
            {day: 'Saturday', 'Total Trades': 0, 'Trades in Profit': 0, 'Pips Gained': 0},
            {day: 'Sunday', 'Total Trades': 0, 'Trades in Profit': 0, 'Pips Gained': 0},
            {day: 'Monday', 'Total Trades': 1, 'Trades in Profit': 0, 'Pips Gained': 0},
            {day: 'Tuesday', 'Total Trades': 1, 'Trades in Profit': 1, 'Pips Gained': 0},
        ]
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
