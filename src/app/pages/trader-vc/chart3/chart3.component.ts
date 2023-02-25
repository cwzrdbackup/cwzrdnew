import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {


  testData = {
    "BTC": { value: 3456.28, percent: 4.785, data1: [144705823767, 144559095511, 145532407824, 142332265290, 142712068281, 141047579185, 142155488297, 140235249257, 142919691145, 139754094335, 138431320116, 138887294806], data2: [8150.05, 8131.74, 8196.65, 8016.49, 8037.97, 7944.31, 8006.76, 7898.73, 8049.92, 7871.69, 7797.70, 7823.34] },
    "ETH": { value: 1456.28, percent: 1.285, data1: this.randomData(100), data2: this.randomData(10000) },
    "GAME": { value: 856.28, percent: 0.453, data1: this.randomData(100), data2: this.randomData(10000) },
    "LBC": { value: 1256.28, percent: 3.115, data1: this.randomData(100), data2: this.randomData(10000) },
  }
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = this.testData["BTC"];
    this.setOption(this.data.data1, this.data.data2)
  }

  chartOption: EChartOption;

  randomData(x): any[] {
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push((Math.random() * x).toFixed(2));
    }
    return data;
  }

  change(e) {
    this.data = this.testData[e];
    this.setOption(this.data.data1, this.data.data2)
  }

  setOption(data1, data2) {
    this.chartOption = {
      grid: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
      },
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 16,
        formatter: (p: any) => {
          const time = p[0].axisValue;
          const left = p[0].value;
          const right = "$" + p[1].value;
          return "Time: " + time + " <br> " + "Market Cap: " + left + " <br> " + "Price: " + right;
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
          data: ["01:00", "03:00", "05:00", "07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
          position: "bottom"
        }
      ],
      yAxis: [
        {
          type: "value",
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
            formatter: (v) => { return "$" + v / 1000000000 + "B"}
          },
          position: "left"
        },
        {
          type: "value",
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
            color: "#d1d1ff",
            formatter: (v) => { return "$" + v }
          },
          position: "right"
        }
      ],
      series: [
        {
          type: 'line',
          id: "one",
          smooth: true,
          itemStyle: {
		  zIndex: 999999,
            normal: {
              opacity: 0,
            },
            emphasis: {
              color: '#75fa5d',
              borderColor: "#59ff8c",
              borderWidth: 3,
              opacity: 1,
			  zIndex: 999999,
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
			opacity: 1,
          },
          data: data2
        }
      ]
    }
  }
}
