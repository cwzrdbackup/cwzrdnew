import { Component, OnInit,ViewChild } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import {Chart8Component} from '../chart8/chart8.component';
@Component({
  selector: 'app-chart1m',
  templateUrl: './chart1m.component.html',
  styleUrls: ['./chart1m.component.scss']
})
export class Chart1Componentm implements OnInit {
  @ViewChild(Chart8Component) Chart8Component: Chart8Component;
  data = [];
  chartOption: EChartOption;
  viewSize: any;
  contentSize: any;
  time=[];
  profitHistory:any=[]
  constructor() { }
  setProfitHistory=data=>{
    this.profitHistory=data;
  }
  ngOnInit() {
    // this.setOptions([], false, [], []);
    this.setOptions([], false,[],[]);
    // this.generateData(true, 8)
    // this.setOptions(this.data, true);
    // setInterval(() => {
    //   this.generateData(false, 1)
    //   this.setOptions(this.data, false);
    // }, 1500)
  }
  setChart8Data=data=>{
    this.Chart8Component.setData(data);
  }
  dbData:any=[];
  dataOptions:any;
  setData=(data)=>{
    let date=new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(this.dbData);
    let minP = Math.min.apply(null, this.dbData) - Math.min.apply(null, this.dbData)*.001;
    let maxP = Math.max.apply(null, this.dbData) + Math.max.apply(null, this.dbData)*.001;
    let time = ((hour < 10 ? "0" : "") + hour)+":"+(min < 10 ? "0" : "") + min+":"+(sec < 10 ? "0" : "") + sec;
    if(this.time.length>10)
      this.time.shift();
      this.time.push(time);
    if(this.dbData.length>10)
    {
      this.dbData.shift();
      //this.dbData.push(data, minP, maxP);
      this.dbData.push(parseFloat(data));
    }
    else
    {
      // this.dbData.push(data, minP, maxP);
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
      this.data.push(Math.round(Math.random() * 1000 + 300))
    }
  }

  setOptions(data, animation, minP, maxP) {

    this.chartOption = {
      animation: animation,
      tooltip: {
        trigger: "axis",
        position: function(point, params, dom, rect, size:any){
          //??????point???????????????????????????size?????????????????????viewSize???contentSize??????????????????div???tooltip??????????????????
          var x = point[0];//
          var y = point[1];
          var viewWidth = size.viewSize[0];
          var viewHeight = size.viewSize[1];
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];
          var posX = 0;//x????????????
          var posY = 0;//y????????????
          
          if(x<boxWidth){//???????????????
              posX = 5;    
          }
          // else{//???????????????
          //     posX = x-boxWidth; 
          // }
          
          if(y<boxHeight){//???????????????
              posY = 5; 
          }
          // else{//???????????????
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
          return p[0].name + " : " + "$" + Number(p[0].value).toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
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
        min: minP,
        max: maxP,
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
            borderColor: "#00ffb4",
            borderWidth: 0,
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
