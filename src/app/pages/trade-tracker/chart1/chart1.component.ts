import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class chart1Component implements OnInit {

  @Input() inputData: any[];

  flipped: boolean = false;
  isLoaded: boolean = false;

  chartOption: EChartOption;


  xAxisData = [];
  data1 = [];
  data2 = [];
  leftMargin: any;
  rightMargin: any;
  barWidth: any;
  fontSize: any;


  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.fontSize = 8;
      this.leftMargin = 70;
      this.rightMargin = 15;
      this.barWidth = 10;
    } else if (768 <= window.innerWidth && window.innerWidth < 992) {
      this.fontSize = 10;
      this.leftMargin = 70;
      this.rightMargin = 30;
      this.barWidth = 20;
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.fontSize = 12;
      this.leftMargin = 80;
      this.rightMargin = 30;
      this.barWidth = 30;
    } else if (window.innerWidth >= 1200) {
      this.fontSize = 14;
      this.leftMargin = 90;
      this.rightMargin = 30;
      this.barWidth = 40;
    }
    this.setOption();
  }
  // setDataForChart=(data)=>{
  //   let pairNames = data.map(x=>{return x.pair });
  //   let pairValues = data.map(x=>{return x.Total });
  //   //this.setOption(pairNames, pairValues);
  // }
  setOption() {
    this.chartOption = {
      animation: true,
      grid: {
        top: 0,
        bottom: 40,
        left: this.leftMargin,
        right: this.rightMargin,
      },
      color: ["#b189ff", "#419ded", "#ffaa00"],
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
      legend: {
        data: ['2011', '2012'],
        //bottom: '20%',
      },
      xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01],
        axisLine: {
          lineStyle: {
            color: "#fff",
          }
        },
        axisLabel: {
          color: "#fff",
          //fontSize: this.fontSize,
          show: true,
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        type: 'category',
        data: ['EURUSD','AUDUSD','USDCAD', 'USOIL', 'XAUUSD'],
        axisLine: {
          lineStyle: {
            color: "#fff",
          }
        },
        axisLabel: {
          color: "#fff",
          //fontSize: this.fontSize,
          show: true,
        },
        axisTick: {
          show: false
        },
      },
      series: [
        {
            name: 'Trades',
            type: 'bar',
            data: [4, 2 , 2, 1, 2],
            barWidth: 20,
        },
    ],
    }
  }
}
