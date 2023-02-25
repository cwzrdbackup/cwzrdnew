import { Component, OnInit,Output,EventEmitter,ViewChild} from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { TestBed } from '@angular/core/testing';
import { Chart10Component } from '../chart10/chart10.component';
import {ShortNumberPipe} from '../../../pipes/short-number.pipe';
@Component({
  selector: 'app-chart3m',
  templateUrl: './chart3m.component.html',
  styleUrls: ['./chart3m.component.scss']
})
export class Chart3Componentm implements OnInit {
  @Output()
  m3changed = new EventEmitter<string>();
  @ViewChild(Chart10Component) Chart10Component: Chart10Component;
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
  selected:any=this.coins[0];
  // data = this.testData["BTC"];
  data:any;
  data1: number[] = [];
  data2: number[] = [];
  data3: any[] = [];
  timeStart: string;
  timeMilli: any;
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
    console.log('going to clear')
    this.Chart10Component.removeChartData();
  }
  setDataForChart=(data)=>
  {
    this.Chart10Component.setChartData(data.price);
    this.coinPrice=data.price;
    this.percent=data.percent;
    this.arrow=data.arrow;
    this.color=data.color;
    this.data1.push(data.mktCap);
    this.data2.push(data.price);
    this.data3.push(data.time);
     let min = Math.min.apply(null, this.data2)-100;
     let max=Math.max.apply(null,this.data1)+100;
     if(this.data1.length>10)
     {
       this.data1.shift();
       this.data2.shift();
       this.data3.shift();
     }
     this.setOption(this.data1,this.data2,this.data3,min,max,true);
    //  this.dataOptions={
    //   series: [{
    //     data: this.data
    //   }]
    // };
    this.loading=false;
  }
  constructor(private pipe:ShortNumberPipe) { }

  ngOnInit() {
    this.setOption([], [], [],0,0, false);
  }

  chartOption: EChartOption;

  randomData(x, data: any[], isNew: boolean, val: number): any[] {
    for (let i = 0; i < val; i++) {
      isNew ? '' : data.shift();
      data.push((Math.random() * x + 100 * (Math.round(Math.random()) * 2 - 1
) + 7800).toFixed(2));
    }
    return data;
  }
  
  randomDataMC(y, data: any[], isNew: boolean, val: number): any[] {
    for (let j = 0; j < val; j++) {
      isNew ? '' : data.shift();
      data.push((17755312 * y + Math.random() * 1775555312 * Math.round(Math.random()) * 2 - 1).toFixed(2));
    }
    return data;
  }
  
  randomTime(z, data: any[], isNew: boolean, val3: number): any[] {
    for (let k = 0; k < val3; k++) {
      isNew ? '' : data.shift();
      data.push( this.timeStart + (this.timeMilli + (1)).toString() );
    }
    return data;
  }
  

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

  setOption(data1, data2, data3,min, max, animation) {
    this.chartOption = {
      animation: animation,
      grid: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 70
      },
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 16,
        formatter: (p: any) => {
          const time = p[0].axisValue;
          const left = this.pipe.transform(p[0].value);
          const right = "$" + p[1].value;
          return "Time: " + time + " <br> " + "Market value: " + "$" + left + " <br> " + "Price: " + right;
        }
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            show: false,
          },
          axisPointer: {
		  z: -1,
            show: true,
            lineStyle: {
              color: "#5350ad",
              type: "solid",
			  width: 2,
            },
            label: {
              show: false
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          data: data3,
          position: "bottom"
        }
      ],
      yAxis: [
        {
          type: "value",
      splitNumber: 6,
      min:min,
      max:max,
		  // min: 130000000000,
		  // max: 160000000000,
          splitLine: {
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
            formatter: (v) => { return v / 1000000000 + "B" }
          },
          position: "left"
        },
        {
          type: "value",
      splitNumber: 6,
      min:min,
      max:max,
		  // min: 6722,
		  // max: 10000,
          splitLine: {
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
            formatter: (v) => { return "$" + v }
          },
          position: "right"
        }
      ],
	  legend: {	            	            
	            data: ['500'],
	            textStyle: {
	              color: '#fff',
	            },
	          },
      series: [
        {
          type: 'line',
          id: "one",
          smooth: true,
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              color: '#75fa5d',
              borderColor: "#59ff8c",
              borderWidth: 3,
              opacity: 1,
            },
          },
          symbolSize: 9,
          lineStyle: {
            color: new graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: '#59ff8c'
              },
              {
                offset: 1,
                color: '#75fa5d'
              }
            ]),
            width: 5,
            curveness: 0.88,
            shadowColor: "#8fff94",
            shadowBlur: 10,
			opacity: 1,
          },
          data: data1
        },
        {
          type: 'line',
          id: "two",
          smooth: true,
          itemStyle: {
            normal: {
              opacity: 0
            },
            emphasis: {
              color: '#715ff6',
              borderColor: "#a196f8",
              borderWidth: 3,
              opacity: 1,
            },
          },
          symbolSize: 9,
          yAxisIndex: 1,
          lineStyle: {
            color: new graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: '#a196f8'
              },
              {
                offset: 1,
                color: '#715ff6'
              }
            ]),
            width: 5,
            curveness: 0.88,
            shadowColor: "#6143e1",
            shadowBlur: 10,
          },
          data: data2
        }
      ]
    }
  }
}
