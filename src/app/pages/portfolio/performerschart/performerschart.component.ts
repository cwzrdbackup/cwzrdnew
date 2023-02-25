import { Component, OnInit } from '@angular/core';
declare var viewSize: any;
import { EChartOption, graphic } from 'echarts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-performerschart',
  templateUrl: './performerschart.component.html',
  styleUrls: ['./performerschart.component.scss']
})
export class performersChartComponent implements OnInit {

  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];
  data5: any[] = [];
  length: any;
  timeStart: string;
  timeMilli: any;

  chartOption: EChartOption;

  constructor() { }
  getUniqueDays = data => {
    var flags = [], output = [], l = data.length, i;
    for (i = 0; i < l; i++) {
      if (flags[data[i].dateChange]) continue;
      flags[data[i].dateChange] = true;
      output.push(data[i].dateChange);
    }

    return output;
  }
  getUniqueCoins = data => {
    var flags = [], output = [], l = data.length, i;
    for (i = 0; i < l; i++) {
      if (flags[data[i].coinName]) continue;
      if(data[i].coinName!=null)
      {
        flags[data[i].coinName] = true;
        output.push(data[i].coinName);
      }
      
    }

    return output;
  }
  setData = data => {
    this.data5 = this.getUniqueDays(data);
    let uniqueCoins = this.getUniqueCoins(data);
    console.log(this.data5);
    console.log(uniqueCoins);
    console.log('all setup for performance');
    let firstCoin=undefined;
    let secondCoin=undefined;
    let thirdCoin=undefined;
    let firstData=[];
    let secondData=[];
    let thirdData=[];
    if(uniqueCoins.length>0)
    {
      firstCoin = uniqueCoins[0];
      // firstData=data.filter(x=>x.coinName==firstCoin).map(x=>{return x.changePercent});
      this.data5.map(r=>{
        
        let v = data.filter(x=>x.coinName==firstCoin && x.dateChange===r)[0];
        if(v)
        {
          firstData.push(v.changePercent)
        }
        else
        firstData.push(0)
      })
      if(uniqueCoins.length>1)
      {
        secondCoin = uniqueCoins[1];
        // secondData=data.filter(x=>x.coinName==secondCoin).map(x=>{return x.changePercent});

        this.data5.map(r=>{
          let v = data.filter(x=>x.coinName==secondCoin && x.dateChange===r)[0];
          if(v)
          {
            secondData.push(v.changePercent)
          }
          else
          secondData.push(0)
        })

        if(uniqueCoins.length>2)
        {
          thirdCoin = uniqueCoins[2];
          // thirdData=data.filter(x=>x.coinName==thirdCoin).map(x=>{return x.changePercent});
          this.data5.map(r=>{
            let v = data.filter(x=>x.coinName==thirdCoin && x.dateChange===r)[0];
            if(v)
            {
              thirdData.push(v.changePercent)
            }
            else
            thirdData.push(0)
          })
        }
      }

    }
    this.setOption(firstData, secondData, thirdData, this.data5,firstCoin,secondCoin,thirdCoin, true);

    


    // data.map(x => {
    //   this.data5 = this.getUnique(x.dateChange);
    //   let
    // })
  }
  ngOnInit() {
    // this.data1 = [3.1, 2.5, 5.5, 7.0, 8.0, 4.0, 3.0];
    // this.data2 = [4.5, 5.0, 2.5, 8.0, 6.5, 3.0, 1.5];
    // this.data3 = [2.5, 4.0, 3.5, 6.0, 7.5, 4.5, 4.0];
    // this.data4 = [5.5, 6.0, 7.5, 3.0, 5.0, 3.0, 3.0];
    // this.data5 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // this.setOption(this.data1, this.data2, this.data3, this.data5, true);
  }




  setOption(data1, data2, data3, data5, firstCoin, secondCoin, thirdCoin, animation) {
    this.chartOption = {

      animation: animation,
      legend: {
        show: true,
        z: 500,
        data: [{
          // compulsorily set icon as a circle
          icon: 'circle',
          // set up the text in red
          textStyle: {
            color: 'red'
          }
        }]
      },
      grid: {
        top: 10,
        bottom: 0,
        left: 0,
        right: 0
      },
      tooltip: {
        position: function (point, params, dom, rect, size) {
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

          return [posX, posY];

        },
        trigger: 'axis',
        formatter: function(params:any[]) {
  
          var output = params[0].name + '<br/>'
          for (var i = 0; i < params.length; i++) {
              output += params[i].marker + params[i].seriesName + ': ' + params[i].value.toFixed(2) + '%'; // : every 2nth
              if (i != params.length - 1) { // Append a <br/> tag if not last in loop
                  output += '<br/>'
              }
          }
          return output
      }
        // formatter: function (params) {
      
        //   return `${params[0].name}<br />
        //           ${params[0].marker} ${params[0].seriesName} : ${params[0].value}%<br />
        //           ${params[1].marker} ${params[1].seriesName} : ${params[1].value}%<br />
        //           ${params[2].marker} ${params[2].seriesName} : ${params[].value}%<br />
        //           `;
        // }
        //formatter: '{b}<br /> <div style=\"width: 8px;  height: 8px; background-color: #68da9b; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a0}: {c0}%<br /> <div style=\"width: 8px; height: 8px; background-color: #9e74fd; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a1}: {c1}% <br/> <div style=\"width: 8px; height: 8px; background-color: #f7ec74; border-radius: 50%; margin-right: 2px; margin-bottom: 1px; display: inline-block; line-height: 12px;\"></div> {a2}: {c2}% '
        // formatter: function () {
        //   '{b}<br /> <div style=\"width: 8px;  height: 8px; background-color: #68da9b; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a0}: {c0}%<br /> <div style=\"width: 8px; height: 8px; background-color: #9e74fd; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a1}: {c1}% <br/> <div style=\"width: 8px; height: 8px; background-color: #f7ec74; border-radius: 50%; margin-right: 2px; margin-bottom: 1px; display: inline-block; line-height: 12px;\"></div> {a2}: {c2}% '
        // }
      },
      xAxis: [
        {
          type: "category",
          show: true,
          z: 100,
          boundaryGap: false,
          scale: true,
          splitNumber: 1,
          minInterval: 7,
          //		  interval: 1,
          axisPointer: {
            z: -1,
            show: true,
            lineStyle: {
              color: "#5350ad",
              type: "solid",
              width: 2,
            },
            label: {
              show: false
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#a0a1df",
              width: 2,
            },
          },
          axisLabel: {
            color: "#fff",
            show: false,
          },
          data: data5,
        }
      ],
      yAxis: [
        {
          type: "value",
          z: 500,
          show: false,
          splitNumber: 14,
          splitLine: {
            show: false,
            lineStyle: {
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#a0a1df",
              width: 5
            },
          },
          axisPointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            formatter: (v) => { return v / 1000000000 + "B" }
          },
          position: "left"
        },
        {
          type: "value",
          splitNumber: 14,
          z: 300,
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#a0a1df",
              width: 2,
            }
          },
          axisPointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            formatter: (v) => { return "$" + v }
          },
          position: "left"
        }
      ],
      color: ['#68da9b','#9e74fd', '#f7ec74'],
      series: [
        {
          tooltip: {
            //backgroundColor: '#fff',
            //borderColor: '#fff',
          },
          type: 'line',
          stack: true,
          id: "one",
          name: firstCoin,
          smooth: 0,
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              color: '#68da9b',
              borderColor: "#68da9b",
              borderWidth: 3,
              opacity: 1,
            },
          },
          label: {
            backgroundColor: '#fff',
            color: '#fff',
            borderColor: '#fff',            
          },
          symbolSize: 9,
          lineStyle: {
            backgroundColor: '#68da9b',
            color: '#68da9b',
            width: 5,
            curveness: 1,
            opacity: 1,
          },
          data: data1,
        },
        {
          type: 'line',
          id: "two",
          name: secondCoin,
          smooth: 0,
          itemStyle: {
            normal: {
              opacity: 0
            },
            emphasis: {
              color: '#9e74fd',
              borderColor: "#9e74fd",
              borderWidth: 3,
              opacity: 1,
            },
          },
          symbolSize: 9,
          yAxisIndex: 1,
          lineStyle: {
            color: new graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: '#9e74fd'
              },
              {
                offset: 1,
                color: '#9e74fd'
              }
            ]),
            width: 5,
            curveness: 1,
          },
          data: data2,
        },
        {
          type: 'line',
          id: "three",
          name: thirdCoin,
          smooth: 0,
          itemStyle: {
            normal: {
              opacity: 0
            },
            emphasis: {
              color: '#f7ec74',
              borderColor: "#f7ec74",
              borderWidth: 3,
              opacity: 1,
            },
          },
          symbolSize: 9,
          yAxisIndex: 1,
          lineStyle: {
            color: new graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: '#f7ec74'
              },
              {
                offset: 1,
                color: '#f7ec74'
              }
            ]),
            width: 5,
            curveness: 1,
            shadowColor: "#f6ed8e",
            shadowBlur: 10,
          },
          data: data3,
        }
      ]
    }
  }
}
