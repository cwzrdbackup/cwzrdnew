import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-ochart10',
  templateUrl: './ochart10.component.html',
  styleUrls: ['./ochart10.component.scss']
})
export class ochart10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOption: EChartOption = {
    tooltip: {
      trigger: "axis",	  
      axisPointer: {
        axis: "x",
        type: "line",
      },
      formatter: (p: any) => {
        return p[0].name + " : " + "$" + p[0].value;
      }
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        show: true,
        lineStyle: {
          color: "#d1d1ff",
          type: "dashed"
        },
        label: {
          show: false
        }
      },
      data: ['Jun - week1', 'Jun - week2', 'Jun - week3', 'Jun - week4', 'Jul - week1', 'Jul - week2', 'Jul - week3', 'Jul - week4'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: [50, 90, 100, 60, 160, 200, 260, 190],
      type: 'line',
      symbolSize: 9,
      itemStyle: {
        shadowColor: "#fff",
        shadowBlur: 12
      },
      emphasis: {
        itemStyle: {
          color: '#20c997',
          borderColor: "#00ffb4",
          borderWidth: 3,
          opacity: 0.6,
        }
      },
      lineStyle: {
        shadowColor: "#fff",
        shadowBlur: 12
      },
      areaStyle: {
	  opacity: 1,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0.1,
            color: '#ff8e1f'
          }, {
            offset: 1,
            color: '#e3b64c'
          }
        ])
      }
    }],
    color: ["#fff"]
  };
}
