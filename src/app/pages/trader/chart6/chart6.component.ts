import { Component, OnInit } from '@angular/core';
import { EChartOption,graphic } from 'echarts';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.scss']
})
export class Chart6Component implements OnInit {

  data: any[];
  data1: any[] = [];
  
  color1 = new graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#ff1d2d'
              },
              {
                offset: 1,
                color: '#ff7a49'
              }
            ]);
			
  color2= new graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#ff7a49'
              },
              {
                offset: .7,
                color: '#fed244'
              }
            ]);
			
  color3 = new graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#fed244'
              },
              {
                offset: 1,
                color: '#f9eb39'
              }
            ]);
			
  color4 = new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.3,
                color: '#f9eb39'
              },
              {
                offset: 1,
                color: '#d4fa36'
              }
            ]);
			
  color5 = new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#d4fa36'
              },
              {
                offset: 1,
                color: '#49ff00'
              }
            ]);
  
  testData: any = {
    "BTC": [{ name: "Bitcoin", value: this.data1 }],
    "ETH": [{ name: "Ethereum", value: 1679.44 }],
    "GAME": [{ name: "Game", value: 601.27 }],
    "LBC": [{ name: "Lbc", value: 1208.71 }]
  }
  
  
  chartOption: EChartOption;
  constructor() { }

  ngOnInit() {
    this.data = this.testData["BTC"];
    this.setOption(this.data1);
    setInterval(() => {      
      this.data1 = this.randomData(1000, this.data1, false, 1);
      this.setOption(this.data1);
    }, 1500);
  }
  
  randomData(x, data: any[], isNew: boolean, val: number): any[] {
    for (let i = 0; i < val; i++) {
      isNew ? '' : data.shift();
      data.push((Math.random() * x + 1 * (Math.round(Math.random()) * 1 - 1
) + 9312).toFixed(2));
    }
    return data;
  }  

  change(e) {
    this.setOption(this.testData[e]);
  }

  setOption(data) {
    this.chartOption = {
      series: [
        {
          type: "gauge",
          title: {
            color: "#fff",
			fontFamily: "Exo",
            fontSize: 16,
          },
          animation: true,
          min: 0,
          max: 23000,
          data: data,
          axisLine: {
            lineStyle: {
              color: [[0.2, this.color1 ], [0.4, this.color2 ], [0.6, this.color3 ], [0.8, this.color4 ], [1, this.color5 ]],
              width: 38,
              
            }
          },
          axisLabel: {
            show: true,
            fontSize: 12,
			fontFamily: "Exo",
            color: "#fff",
            formatter: (p) => {
              if (p === 0) {
                return "   Low"
              }
              if (p === 15000) {
                return "High   "
              }
              return "";
            }
          },
          axisTick: {
            show: true,
            splitNumber: 3,
            length: 15,
            lineStyle: {
              color: "#fff",
              width: 1
            }
          },
          splitLine: {
            show: false
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5,
            width: 9,
            length: "65%",
          },
          detail: {
            fontSize: 24,
			fontFamily: "Exo",
            color: "#fff",
            offsetCenter: ["0%", "100%"]
          }
        }
      ]
    }
  }

}
