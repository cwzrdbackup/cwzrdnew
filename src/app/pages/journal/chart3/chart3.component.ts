import { Component, OnInit, Input } from '@angular/core';
import { graphic, EChartOption } from 'echarts';
import {NbTooltipModule} from '@nebular/theme';

@Component({
  selector: 'trader-log-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {

  @Input() inputData: any[];

  testData = {
    labels: ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    data: [66, 68, 81, 95, 89, 54, 77]
  }
  flipped: boolean = false;
  chartOption: EChartOption;

  constructor() { }

  ngOnInit() {
    this.setOption(this.testData.labels, this.testData.data);
  }

  parseData(): number {
    let p = 0;
    if (this.inputData) {
      this.inputData.forEach(d => d.profitLoss > 0 ? p += 1 : '');
      return p / this.inputData.length * 100;
    } else 0;
  }

  flip() {
    this.flipped = !this.flipped;
  }

  setOption(labels: string[], data: number[]) {
    this.chartOption = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: labels,
        axisLabel: {
          color: "#d1d1ff",
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        show: false,
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        boundaryGap: [0, '5%'],
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: "#fff",
          fontSize: 12
        },
        position: 'bottom',
        padding: 8,
        formatter: (p: any) => {
          return `${p.value}%`
        }
      },
      series: [
        {
          type: 'bar',
          data: data,
          itemStyle: {
            shadowBlur: 0.5,
            shadowColor: "#fff",
            normal: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#00ffb4",
              }, {
                offset: 1,
                color: "#20c997",
              }]),
              opacity: 1,
              shadowColor: "#fff",
              shadowBlur: 3,
            },
          },
        },
      ],
    }
  }

}
