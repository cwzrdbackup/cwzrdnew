import { Component, OnInit, Input } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-chart7',
  templateUrl: './chart7.component.html',
  styleUrls: ['./chart7.component.scss']
})
export class Chart7Component implements OnInit {

  @Input() color: string;
  colors = {
    green: "#00ff39",
    red: "#ff0579"
  }
  chartOption: EChartOption;
  constructor() { }

  ngOnInit() {
    this.chartOption = {
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },

      xAxis: {
        type: 'category',
        show: false,
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", '15', "16", "17", "18", "19", "20", "21", "22", "23", "24"]
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [{
        data: this.randomValues(),
        type: 'line',
        smooth: true,
        animation: true,

        itemStyle: {
          normal: {
            opacity: 0,
          },
        },
        lineStyle: {
          color: this.colors[this.color],
          width: 3,
          curveness: 0.88
        },
      }]
    }
  }

  randomValues(): any[] {
    const data = [];
    for (let i = 0; i < 24; i++) {
      data.push(Math.random())
    }
    return data;
  }

}
