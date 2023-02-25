import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-ochart1',
  templateUrl: './ochart1.component.html',
  styleUrls: ['./ochart1.component.scss']
})
export class ochart1Component implements OnInit {

  legend: any = {
    orient: 'horizontal',
    x: 'center',
    y: 'bottom',
    padding: 16,
    textStyle: {
      color: "#fff",
      fontSize: 16
    },
    data: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Lite Coin', 'XRP', 'EOS']
  }

  barStyle = {

  }

  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 1280) {
      this.chartOption.legend["orient"] = "vertical";
      this.chartOption.legend["x"] = "right";
      this.chartOption.legend["y"] = "center";
      this.chartOption.legend["itemWidth"] = 48;
      this.chartOption.legend["itemHeight"] = 24;
      this.chartOption.legend["left"] = "63%";
      this.chartOption.series[0]["center"] = ["33%", "50%"];
	  
    }
  }

  chartOption: EChartOption = {
    tooltip: {
    },
    color: ["#dd4b64", "#9d5ae5", "#5fabf7", "#b5e659", "#ffea00", "#f09537"],
    grid: {
      show: true,
      bottom: -10,
      top: -10,	  
      left: -10,
      right: -10
    },
    series: [
      {
        type: "pie",
        radius: ['0%', '100%'],
        center: ["80%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          color: "#fff",
          fontSize: 16,
          fontWeight: "lighter",
          formatter: "Total Market Cap \n \n $1.321.132.546,21",
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 3350, name: 'Bitcoin', itemStyle: this.barStyle},
          {value: 2100, name: 'Ethereum', itemStyle: this.barStyle},
          {value: 2345, name: 'Bitcoin Cash', itemStyle: this.barStyle},
          {value: 1350, name: 'Lite Coin', itemStyle: this.barStyle},
          {value: 948, name: 'XRP', itemStyle: this.barStyle},
          {value: 848, name: 'EOS', itemStyle: this.barStyle}
        ]
      }
    ]
  }

}
