import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {



  data = [];
  now = new Date(2018, 1, 1);
  oneDay = 24 * 3600 * 1000;
  value = Math.random() * 1000;

  chartOption: EChartOption;

  constructor() { }

  ngOnInit() {

    this.setData();
    this.setOption(this.data);

  }

  change(e) {
    this.data.length = 0;
    this.setData();
    this.setOption(this.data);
  }

  randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now,
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)]
    }
  }

  setData() {
    for (var i = 0; i < 100; i++) {
      this.data.push(this.randomData());
    }
  }

  setOption(data) {
    this.chartOption = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'time',
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
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        boundaryGap: [0, '5%'],
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {        
          type: "line",
          axis: "x",
        },
        padding: 16,
        formatter: (p: any) => {
          return p[0].value[0] + " : " + "$" + p[0].value[1];
        }
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 0,
            },
          },
          areaStyle: {

		  
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#6829cc'
              },
              {
                offset: 1,
                color: '#9a5fef'
              }
            ])
          },

          data: data
        },
      ],
      animation: true,
    };
  }
}
