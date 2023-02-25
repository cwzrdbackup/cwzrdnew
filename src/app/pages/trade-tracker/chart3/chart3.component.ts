import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class chart3Component implements OnInit {

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
        top: 50,
        bottom: 80,
        left: 50,
        right: 30,
      },
      color: ["#ffaa00", "#b189ff", "#419ded"],
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 16,
        // formatter: (p: any) => {
        //   const time = p[0].axisValue;
        //   const left = this.pipe.transform(p[0].value);
        //   const right = "$" + p[1].value.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        //   return "Time: " + time + " <br> " + "Market value: " + "$" + left + " <br> " + "Price: " + right;
        // }
      },
      dataset: {
        dimensions: ['day', 'Total Pips', 'Total Wins', 'Pips Gained'],
        source: [
            {day: '05/04 - 05/10', 'Total Pips': 53, 'Total Wins': 45, 'Pips Gained': 38},
            {day: '05/11 - 05/17', 'Total Pips': 64, 'Total Wins': 51, 'Pips Gained': 44},
            {day: '05/18 - 05/24', 'Total Pips': 45, 'Total Wins': 64, 'Pips Gained': 55},
            {day: '05/25 - 05/25', 'Total Pips': 48, 'Total Wins': 56, 'Pips Gained': 75},
        ]
      },
      xAxis: [
        {
          type: "category",
          // axisLine: {
          //   show: true,
          // },
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            rotate: 45,
          },
        }
      ],
      yAxis: [
        {
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          axisLabel: {
            color: "#fff",
          },
        },
        {
          type: "value",
          splitLine: {
            show: false,
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
            rotate: 45,
          },
          position: "right"
        }
      ],
      legend: {
        show: true,
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          type: 'bar',
          id: "one",
          barWidth: 20,
          barGap: "0%",
        },
      ],

    }
  }
}
