import { Component, OnInit,Output,EventEmitter,ViewChild } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { TestBed } from '@angular/core/testing';
import { interval, Subscription, fromEventPattern } from 'rxjs';
import {Chart9Component} from './../chart9/chart9.component'
import {ShortNumberPipe} from '../../../pipes/short-number.pipe';

@Component({
  selector: 'app-chart2m',
  templateUrl: './chart2m.component.html',
  styleUrls: ['./chart2m.component.scss']
})
export class Chart2Componentm implements OnInit {
  @ViewChild(Chart9Component) Chart9Component: Chart9Component;
  @Output()
  changed = new EventEmitter<string>();

  data = [];
  now = new Date(2019, 10, 3);
  oneDay = 24 * 3600 * 1000;
  value = Math.random() * 1000;

  chartOption: EChartOption;
  dataOptions: any;
  setChart9Data=data=>{
    this.Chart9Component.setData(data);
  }
  coins = [
    { name: "BTC", price: 8421, percent: 0, change: 200, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "ETH", price: 885, percent: 0, change: 80, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "XRP", price: 75, percent: 0, change: 5, arrow: "nb-arrow-dropup", color: "#00ff39" },
    { name: "LTC", price: 175, percent: 0, change: 14, arrow: "nb-arrow-dropup", color: "#00ff39" },
  ]
  
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 4535.45, percent: 0, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  loading:boolean=false;
  interval: Subscription;
  
  coinPrice:any;
  percent:any;
  arrow:any;
  color:any;
  // minP: number;
  // maxP: number;
  percentNumber:any=0;
  selected = this.coins[0];
  clearData=()=>
  {
    this.data=[];
  }
  constructor(private pipe:ShortNumberPipe) { }
  getSelectedValue(){
    return this.selected.name;
  }
  setDataForChart=(data)=>
  {
    this.coinPrice = data.value[1];
    this.percent = data.percent;
    let minP = Math.min.apply(null, this.data) - Math.min.apply(null, this.data)*.001;
    let maxP = Math.max.apply(null, this.data) + Math.max.apply(null, this.data)*.0005;
    this.percentNumber=parseFloat(data.percent);
    this.arrow=data.arrow;
    this.color=data.color;
     this.data.unshift(data);     
     if(this.data.length>1100)
     {
       this.data.shift();
     }

    this.setOption(this.data, minP, maxP)
    this.loading=false;
  }
  ngOnInit() {


  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   // this.interval.unsubscribe();
  }

  change(e) {
    this.data.length = 0;
    this.loading=true;
    
    // this.setData();
    // this.setOption(this.data);
    this.selected = this.coins.find(v => v.name === e);
    this.changed.emit(this.selected.name)
  }

  randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.round(Math.random()) * 2 - 1
      * (Math.random() * 21 - 10);
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    }
  }

  setData() {
    for (var i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }
  }

  setOption(data,minP,maxP) {
    this.chartOption = {
      animation: false,      
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'time',
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
      yAxis: {
        // min:9640,
        // max:9655,
        min: minP,
        max: maxP,
        //boundaryGap: [0, '5%'],
        boundaryGap: [0, '5%'],
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
          type: "line",
          axis: "x",
        },
        padding: 16,
        formatter: (p: any) => {
          let dbDate = new Date(p[0].value[0]);
          let hour = dbDate.getHours();
          let min = dbDate.getMinutes();
          let sec = dbDate.getSeconds();
          let format = (hour<10?"0"+hour:hour)+":"+(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
          //return  format+ " : " + "$" + p[0].value[1];
          //return "$"+this.pipe.transform(p[0].value);
          //return  format + " : " + "$" + + p[0].value[1];
          return format + " : $" + p[0].value[1].toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
      },
      series: [
        {
          type: 'line',
          symbolSize: 1,
          sampling: 'average',
          itemStyle: {
            color: "#fff",
          },
          emphasis: {
            itemStyle: {
              color: '#20c997',
              borderColor: "#00ffb4",
              borderWidth: 0,
              opacity: 1,
            }
          },
          lineStyle: {
            shadowColor: "transparent",
            shadowBlur: 12,
            opacity: 1,
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
          },

          data: data
        },
      ] as any[]
    };
  }

  
  updateData() {
    this.coins.map(val => {
      const random = (Math.random() * val.change);
      const newVal = val.price + (this.trueOrFalse() ? random : -random);

      if (val.price > newVal) {
        val.arrow = "nb-arrow-dropdown";
        val.color = "red";
        val.percent = (val.price - newVal) / val.price * 50;
      } else {
        val.percent = (newVal - val.price) / val.price * 50;
        val.arrow = "nb-arrow-dropup";
        val.color = "#00ff39";
      }
      val.price = newVal;
      return val;
    })
  }

  trueOrFalse() {
    return Math.round(Math.random());
  }
}
