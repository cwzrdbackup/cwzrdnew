import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-chart1m',
  templateUrl: './chart1m.component.html',
  styleUrls: ['./chart1m.component.scss']
})
export class Chart1Componentm implements OnInit {

  data = [];
  chartOption: EChartOption;
  viewSize: any;
  contentSize: any;
  constructor() { }

  ngOnInit() {
    this.generateData(true, 8)
    this.setOptions(this.data, true);
    setInterval(() => {
      this.generateData(false, 1)
      this.setOptions(this.data, false);
    }, 1500)
  }

  generateData(isNew: boolean, less: number) {
    for (let i = 0; i < less; i++) {
      isNew ? '' : this.data.shift();
      this.data.push(Math.round(Math.random() * 1000 + 300))
    }
  }

  setOptions(data, animation) {

    this.chartOption = {
      animation: animation,
      tooltip: {
        trigger: "axis",
        position: function(point, params, dom, rect, size:any){
          //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
          var x = point[0];//
          var y = point[1];
          var viewWidth = size.viewSize[0];
          var viewHeight = size.viewSize[1];
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];
          var posX = 0;//x坐标位置
          var posY = 0;//y坐标位置
          
          if(x<boxWidth){//左边放不开
              posX = 5;    
          }
          // else{//左边放的下
          //     posX = x-boxWidth; 
          // }
          
          if(y<boxHeight){//上边放不开
              posY = 5; 
          }
          // else{//上边放得下
          //     posY = y-boxHeight;
          // }
          
          return [posX,posY];
   
        },
        axisPointer: {
          axis: "x",
          type: "line",
        },
        padding: 8,
        formatter: (p: any) => {
          return p[0].name + " : " + "$" + p[0].value;
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 20,
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
        data: ['08:15:05', '08:15:06', '08:15:07', '08:15:08', '08:15:09', '08:15:10', '08:15:11', '08:15:12'],
        show: false
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        data: data,
        type: 'line',
        symbolSize: 9,
        itemStyle: {
          shadowColor: "rgba(255,255,255,.7)",
          shadowBlur: 12,
		  color: "#fff",
        },
        emphasis: {
          itemStyle: {
            color: '#20c997',
            borderColor: "#00ffb4",
            borderWidth: 3,
            opacity: 1,
          }
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
        }
      }],
      color: ["#fff"]
    };
  }

}
