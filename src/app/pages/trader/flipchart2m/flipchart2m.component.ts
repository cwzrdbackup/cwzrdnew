import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { interval, Subscription } from 'rxjs';
import { Interrupt } from '@ng-idle/core/lib/interrupt';

@Component({
  selector: 'app-flipchart2m',
  templateUrl: './flipchart2m.component.html',
  styleUrls: ['./flipchart2m.component.scss']
})
export class flipchart2mComponentm implements OnInit {

  data = [];
  chartOption: EChartOption;
  @Input() TotalMarketCap:any;

  

  @Input() TotalMarketCapArray:any;
  
  constructor() { }

  ngOnInit() {
  
  // this.interval = interval(1000).subscribe(_ => {
  //   this.updateData();
  // })
  
  //   this.generateData(true, 8)
  //   this.setOptions(this.data, true);
  //   setInterval(() => {
  //     this.generateData(false, 1)
  //     this.setOptions(this.data, false);
  //   }, 1500)
    
    this.setOptions(this.TotalMarketCap.arr, 0);  
  
  
  }
  
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 4535.45, percent: .33, change: 500, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  
  interval: Subscription;

  generateData(isNew: boolean, less: number) {
    for (let i = 0; i < less; i++) {
      isNew ? '' : this.data.shift();
      this.data.push( 251.48 + Math.round(Math.random() * 10))
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // if(this.TotalMarketCap.arr.length>0)
    // {
    //   this.setOptions(this.TotalMarketCap.arr, 0);  
    // }
    // if(changes.currentValue)
    // {
    //   console.log('has')
    // }

  }
  setOptions(data, animation) {

    this.chartOption = {
      animation: animation,
      tooltip: {
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
          // else
          // {//???????????????
          //     posY = y-boxHeight;
          // }
          
          return [posX,posY];
   
        },
        trigger: "axis",
        axisPointer: {
          axis: "x",
          type: "line",
        },
        padding: 16,
        formatter: (p: any) => {
          //return p[0].name + " : " + "$" + p[0].value + "B";
		  return "$" + p[0].value + "B";
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
              color: '#0d68bd'
            }, {
              offset: 1,
              color: '#73d4ec'
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
    this.interval.unsubscribe();
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

  clicked(e) {
//    this.selectedCoin = e.data.name;
//	this.selectedPrice = e.data.value;
//	this.selectedPercent = e.data.percentV;
//    this.revealed = true;
//    this.setChartOption2();
  }
  
  trueOrFalse() {
    return Math.round(Math.random());
  }

}
