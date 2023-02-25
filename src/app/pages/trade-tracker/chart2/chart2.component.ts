import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class chart2Component implements OnInit {

  @Input() inputData: any[];

  flipped: boolean = false;
  isLoaded: boolean = false;

  chartOption: EChartOption;


  xAxisData = [];
  data1 = [];
  data2 = [];


  constructor() { }

  ngOnInit() {
    this.setOption();
  }
  
  setOption() {
    this.chartOption = {
      animation: true,
      grid: {
        top: 60,
        bottom: 50,
        left: 50,
        right: 30,
      },
      //color: ["#b189ff", "#419ded", "#ffaa00"],
    tooltip: {
        trigger: 'axis',        
    },
    legend: {
      selectedMode: false,
      data: ['AUDUSD', 'XAUUSD', 'EURUSD', 'USOIL', 'GBPUSD'],        
        textStyle: {
          color: "#fff",
        },
        padding: [0, 0, 50, 0],
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['April','May','June'],
            axisLine: {
              lineStyle: {
                color: "#fff",
              }
            },
            axisLabel: {
              //color: "#fff",
              //fontSize: this.fontSize,
              // show: true,
            },
            axisTick: {
              show: false
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#fff",
              }
            },
            axisLabel: {
              //color: "#fff",
              //fontSize: this.fontSize,
              // show: true,
            },
            axisTick: {
              show: false
            },
        }
    ],
    series: [
      {
          name: 'AUDUSD',
          type: 'line',
          stack: '5',
          areaStyle: {},
          data: [0, 0, 20]
      },
      {
          name: 'XAUUSD',
          type: 'line',
          stack: '3',
          areaStyle: {},
          data: [0, 0, 230],
          label: {
            normal: {
                show: true,
                position: 'top'
            },
            //color: "#fff",
        },
      },
      {
          name: 'EURUSD',
          type: 'line',
          stack: '1',
          areaStyle: {},
          data: [0, 0, 104],               
      },
      
      {
          name: 'USOIL',
          type: 'line',
          stack: '2',
          areaStyle: {},
          data: [0, 0, 120],          
      },
      {
          name: 'GBPUSD',
          type: 'line',
          stack: '4',          
          areaStyle: {},
          data: [0, 0, 52]
      }
  ]
    }
  }
}
