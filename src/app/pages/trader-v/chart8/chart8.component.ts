import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-chart8',
  templateUrl: './chart8.component.html',
  styleUrls: ['./chart8.component.scss']
})
export class Chart8Component implements OnInit {
  labels=[];
  data=[];
  setData=data=>{
    data.map(x=>{
      this.labels.push(x.dateChange);
      this.data.push(x.Profit==null?0:-1*(x.Profit));
    })
    this.setOption(this.labels, this.data);
    console.log(this.labels);
  }
  testData = {
    Week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [23, 38, 44, 28, 14, 36, 18]
    },
    Month: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [91, 83, 66, 54, 72, 47, 101, 39, 58, 65, 88, 74]
    },
    Year: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
      data: [802, 885, 598, 666, 673, 622, 751, 499, 774, 536]
    }
  }

  options: EChartOption;

  constructor() { }

  ngOnInit() {
    
  }

  setOption(labels: string[], data: number[]) {
    this.options = {
      grid: {
        left: 5,
        top: 0,
        right: 5,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: labels,
        axisLabel: {
          color: "#d1d1ff",
          fontSize: 12,
          formatter: (labels:any) => {
            return labels.substring(0,3)
          },
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
        position: 'top',
        formatter: (p:any) => {
          return "$" + p.value.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})
        },
        padding: 12
        // extraCssText: trafficTheme.tooltipExtraCss,
      },
      series: [
        {
          type: 'bar',
          data: data,
		  barMaxWidth: 14,
          itemStyle: {
            shadowBlur: 0.5,
            shadowColor: "#fff",
			width: 10,
            normal: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#ffeb3b",
              }, {
                offset: 1,
                color: "#ffc107",
              }]),
              opacity: 1,
              shadowColor: "#fff",
              shadowBlur: 6,
            },
          },
        },
      ],
    }
  }


  change(e) {
    const data = this.testData[e];
    this.setOption(data.labels, data.data);
  }

}
