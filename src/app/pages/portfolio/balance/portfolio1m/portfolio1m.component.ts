import { Component, OnInit, Input,SimpleChanges, SimpleChange } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { min, max } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio1m',
  templateUrl: './portfolio1m.component.html',
  styleUrls: ['./portfolio1m.component.scss']
})
export class Chartportfolio1m implements OnInit {
  @Input() coin: any;
  data = [];
  chartOption: EChartOption;
  // coinName:any;
  dataOption:any;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.coin.value + ' ' + this.coin.name)
    for (let property in changes) {
      // console.log(property)
        if (property === 'coin') {
          console.log(this.coin.name)
          if(this.data.length>10)
          this.data.shift();
          this.data.push(this.coin.price);
                this.dataOption={
        series: [{
          data: this.data
        }]
      };
        }
      }
    }
  // setData=(data)=>{
    
  //   let d = data.filter(x=>x.type===this.coinName)[0];
  //   if(d)
  //   {
  //     if(this.data.length>10)
  //     this.data.shift();
  //     this.data.push(d.price);
  //     this.dataOption={
  //       series: [{
  //         data: this.data
  //       }]
  //     };
  //   }
  // }
  ngOnInit() {
    this.setOptions([],0,1, true);
    // this.generateData(true, 8)
    // this.setOptions(this.data, true);
    setInterval(()=>{
          if(this.data.length>10)
      this.data.shift();
      this.data.push(this.coin.value.toFixed(2));
      // this.dataOption={
      //   series: [{
      //     data: this.data
      //   }]
      // };
      this.setOptions(this.data,Math.min.apply(null,this.data), Math.max.apply(null,this.data),true);
    },1000)
    // setInterval(() => {
    //   this.generateData(false, 1)
    //   this.setOptions(this.data, false);
    // }, 1500)
  }

  generateData(isNew: boolean, less: number) {
    for (let i = 0; i < less; i++) {
      isNew ? '' : this.data.shift();
      this.data.push(Math.round(Math.random() * 1000 + 300))
    }
  }

  setOptions(data,min,max, animation) {

    this.chartOption = {
      animation: animation,
      tooltip: {
        position: function(point, params, dom, rect, size){
          //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
          var x = point[0];//
          var y = point[1];
          // var viewWidth = size.viewSize[0];
          // var viewHeight = size.viewSize[1];
          // var boxWidth = size.contentSize[0];
          // var boxHeight = size.contentSize[1];
          var posX = 0;//x坐标位置
          var posY = 0;//y坐标位置
          
          // if(x<boxWidth){//左边放不开
          //     posX = 5;    
          // }
          // else{//左边放的下
          //     posX = x-boxWidth; 
          // }
          
          // if(y<boxHeight){//上边放不开
          //     posY = 5; 
          // }
          // else{//上边放得下
          //     posY = y-boxHeight;
          // }
          
          return [posX,posY];
   
        },
        padding: 8,
        formatter: (p: any) => {
          // return "$"+p[0].value;
          return p[0].name + " : " + "$" + Number(p[0].value).toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});          
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 10
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
        data: ['02:34:01', '02:34:02', '02:34:03', '02:34:04', '02:34:05', '02:34:06', '02:34:07', '02:34:08'],
        show: false
      },
      yAxis: {
        type: 'value',
        show: false,
        min:min-1,
        max:max+1,
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
