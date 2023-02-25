import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'trader-log-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {

  @Input() inputData: any[];

  flipped: boolean = false;
  isLoaded: boolean = false;

  chartOption: EChartOption;


  xAxisData = [];
  data1 = [];
  data2 = [];


  constructor() { }

  ngOnInit() {
    // for (var i = 0; i < 100; i++) {
    //   this.xAxisData.push(i);
    //   // this.data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    //   // this.data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    // }
    // this.setOption();
  }
  ngOnChanges(changes: any) {
    this.xAxisData = [];
    this.data1 = [];
    this.data2 = [];
    if (this.inputData) {
    for (let i = 0; i < this.inputData.length; i++)
    {
      this.xAxisData.push(i);
      this.data2.push({ value: this.inputData[i], itemStyle: { color: this.inputData[i] < 0 ? "#f00" : "#20c997" } });
    }
  }
    this.setOption();
      // console.log('this.inputData.length');
      // console.log(this.inputData.length);
      //if (this.inputData.length > 0) {
          this.isLoaded = true;
      //}
  }
  // parseData(): number {
  //   let total = 0;
  //   if (this.inputData) {
  //     this.inputData.forEach(d => total += d.profitLoss);
  //   }
  //   return total;
  // }

  flip() {
    this.flipped = !this.flipped;
  }

  setOption() {
    this.chartOption = {
      color: ["#20c997","#7659ff"],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      legend: {
	    show: false,
        data: ['transactions', 'orders'],
        borderWidth: 0,
        borderRadius: 0,
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: "#fff",
          fontSize: 12
        },
        position: function (point, params, dom, rect, size) {
            let left  = +point[0];
            let top  = +point[1];

            if (size['viewSize'][0] - left < 50 ) {
                left -= 50;
            } else {
                left += 15;
            }

            if ( size['viewSize'][1] - top < 50 ) {
              top -= 50;
            }
            return {left, top};
        },
        padding: 8,
        formatter: (p:any) => {
          return `$ ${Math.round(Number.parseInt(p.value, 10))}`
        }
      },
      xAxis: [
        {
          data: this.data1,
          silent: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
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
      ],
      series: [
        {
          name: 'orders',
          type: 'bar',
          data: this.data2,
		  barGap: '30%',
          itemStyle: {
            shadowBlur: 1,
            shadowColor: "#fff",			
          },
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }
}
