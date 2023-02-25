import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { interval, Subscription } from 'rxjs';
import {ShortNumberPipe} from '../../../pipes/short-number.pipe';
@Component({
  selector: 'app-flipchart3m',
  templateUrl: './flipchart3m.component.html',
  styleUrls: ['./flipchart3m.component.scss']
})
export class flipchart3mComponentm implements OnInit {

  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 4535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  
  interval: Subscription;


  data = [];
  chartOption: EChartOption;
  time=[];
  constructor(private pipe:ShortNumberPipe,) { }

  ngOnInit() {
    this.setOptions([], 0,[],[]);  
  // this.interval = interval(1000).subscribe(_ => {
  //   this.updateData();
  // })
  
  //   this.generateData(true, 8)
  //   this.setOptions(this.data, true);
  //   setInterval(() => {
  //     this.generateData(false, 1)
  //     this.setOptions(this.data, false);
  //   }, 1500)
  }

  dbData:any=[];
  dataOptions:any;
  TotalVolume:any={};
  setData=(data, TotalVolume)=>{
    this.TotalVolume=TotalVolume;

    let date=new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = ((hour < 10 ? "0" : "") + hour)+":"+(min < 10 ? "0" : "") + min+":"+(sec < 10 ? "0" : "") + sec;
    let minP = Math.min.apply(null, this.dbData) - Math.min.apply(null, this.dbData)*.000003;
    let maxP = Math.max.apply(null, this.dbData) + Math.max.apply(null, this.dbData)*.000001;
    if(this.time.length>10)
      this.time.shift();
      this.time.push(time);

    if(this.dbData.length>10)
    {
      this.dbData.shift();
      this.dbData.push(parseFloat(data));
    }
    else
    {
      this.dbData.push(parseFloat(data));
    }
    this.dataOptions={
      series: [{
        data: this.dbData
      }],
      xAxis:[{
        data:this.time
      }],
      yAxis: {
        min: minP,
        max: maxP,
      },
    };
  }

  generateData(isNew: boolean, less: number) {
    for (let i = 0; i < less; i++) {
      isNew ? '' : this.data.shift();
      this.data.push(Math.round(Math.random() * 1000))
    }
  }

  setOptions(data, animation, minP, maxP) {

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
          // else
          // {//左边放的下
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
        padding: 16,
        formatter: (p: any) => {
          return p[0].name + " : " + "$" + this.pipe.transform(p[0].value);
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 20
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
        show: false,
        min: minP,
        max: maxP,
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
        lineStyle: {
          shadowColor: "transparent",
          shadowBlur: 12,
		  opacity: 1,
        },
        areaStyle: {
		opacity: 1,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#f2851a'
            }, {
              offset: 1,
              color: '#ecc66a'
            }
          ])
        }
      }],
      color: ["#fff"]
    };
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  getData(idx: number, val: string) {
    return this.secondRowData[idx][val];
  }

  updateData() {
  this.secondRowData.map(val => {
  const random = (Math.random() * val.change);
  const newVal = val.value + (this.trueOrFalse() ? random : -random);

  if (val.value > newVal) {
  val.arrow = "nb-arrow-dropdown";
  val.color = "red";
  val.percent = (val.value - newVal) / val.value * 100;
  } else {
  val.percent = (newVal - val.value) / val.value * 100;
  val.arrow = "nb-arrow-dropup";
  val.color = "#00ff39";
  }
  val.value = newVal;
  return val;
  })
  }

  trueOrFalse() {
    return Math.round(Math.random());
  }

}
