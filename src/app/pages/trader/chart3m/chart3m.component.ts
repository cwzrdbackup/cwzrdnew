import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-chart3m',
  templateUrl: './chart3m.component.html',
  styleUrls: ['./chart3m.component.scss']
})
export class Chart3Componentm implements OnInit {


  testData = {
    "BTC": { value: 3456.28, percent: 4.785},
    "ETH": { value: 1456.28, percent: 1.285},
    "GAME": { value: 856.28, percent: 0.453},
    "LBC": { value: 1256.28, percent: 3.115},
  }
  data = this.testData["BTC"];
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  timeStart: string;
  timeMilli: any;

  constructor() { }

  ngOnInit() {
  
    this.timeStart = "01:06:";
	this.timeMilli = 11;
    this.data1 = [144705823767, 144559095511, 145532407824, 142332265290, 142712068281, 141047579185, 142155488297, 140235249257, 142919691145, 139754094335, 138431320116, 138887294806];
    this.data2 = [8150.05, 8131.74, 8196.65, 8016.49, 8037.97, 7944.31, 8006.76, 7898.73, 8049.92, 7871.69, 7797.70, 7823.34];
	this.data3 = [ this.timeStart + this.timeMilli.toString(), this.timeStart + (this.timeMilli + 1).toString(), this.timeStart + (this.timeMilli + 1 * 2).toString(), this.timeStart + (this.timeMilli + 1 * 3).toString(), this.timeStart + (this.timeMilli + 1 * 4).toString(), this.timeStart + (this.timeMilli + 1 * 5).toString(),  this.timeStart + (this.timeMilli + 1 * 6).toString(), this.timeStart + (this.timeMilli + 1 * 7).toString(), this.timeStart + (this.timeMilli + 1 * 8).toString(), this.timeStart + (this.timeMilli + 1 * 9).toString(), this.timeStart + (this.timeMilli + 1 * 10).toString(), this.timeStart + (this.timeMilli + 1 * 11).toString()];
    this.setOption(this.data1, this.data2, this.data3, true);
    setInterval(() => {      
      this.data2 = this.randomData(1000, this.data2, false, 1);
	  this.data1 = this.data2.map(v=> v * 17755312);
	  this.data3 = this.randomTime(1000, this.data3, false, 1);
      this.setOption(this.data1, this.data2, this.data3, false);
    }, 1500);
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
    this.data = this.testData[e];    
    this.data2 = this.randomData(1000, [], true, 12);
	this.data1 = this.data2.map(v=> v * 17755312);
	this.data3 = this.randomTime(1000, [], true, 10);
    this.setOption(this.data1, this.data2, this.data3, true)
  }

  setOption(data1, data2, data3, animation) {
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
          const left = p[0].value.toLocaleString();
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
		  min: 130000000000,
		  max: 160000000000,
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
		  min: 7000,
		  max: 10000,
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
