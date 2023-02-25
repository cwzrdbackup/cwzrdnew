import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class chart4Component implements OnInit {

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
          {day: '06/1 - 06/7', 'Total Pips': 0, 'Total Wins': 0, 'Pips Gained': 0},
          {day: '06/8 - 06/14', 'Total Pips': 0, 'Total Wins': 0, 'Pips Gained': 0},
          {day: '06/15 - 06/21', 'Total Pips': 630, 'Total Wins': 0, 'Pips Gained': 0},
          {day: '06/22 - 06/28', 'Total Pips': 0, 'Total Wins': 0, 'Pips Gained': 0},
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
        selectedMode: false,
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
