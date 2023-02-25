import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-ochart4',
  templateUrl: './ochart4.component.html',
  styleUrls: ['./ochart4.component.scss']
})
export class ochart4Component implements OnInit {

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
      padding: 16,
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
      data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: [70, 50, 80, 90, 50, 60, 80, 130],
      type: 'line',
      symbolSize: 9,
      itemStyle: {
        shadowColor: "transparent",
        shadowBlur: 0
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
        shadowBlur: 0
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0.5,
            color: 'transparent'
          }, {
            offset: 1,
            color: 'transparent'
          }
        ])
      }
    }],
    color: ["#e89a00"]
  };
}
