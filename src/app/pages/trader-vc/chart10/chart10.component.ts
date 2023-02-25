import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-chart10',
  templateUrl: './chart10.component.html',
  styleUrls: ['./chart10.component.scss']
})
export class Chart10Component implements OnInit {
  interval:Subscription;
// interval(1000).subscribe(_ => {
    //   this.updateData();
    // })
    //this.interval.unsubscribe();
  option: EChartOption;

  testData: any[] = [];
  dataOptions:any;
  dates: any[];
  data: any[];
  chartSize=30;
  latestPrice:any;
  minuteArray:any=[];
  minuteNumber:any=0;
  totalMin:any=[];
  totalMax:any=[];
  sInterval:any;
  constructor() { }
  removeChartData=()=>{
    
    console.log(this.sInterval);
    clearInterval(this.sInterval);
    this.minuteArray=[];
    this.rawData=[];
    this.minuteNumber=0;
    this.totalMin=0;
    this.totalMax=0;
    this.latestPrice=0;
    this.data=[];
    this.dates=[];
    this.setData();
    this.setOption();
    this.sInterval=null;
      
  }
setChartData=(data)=>{
  this.latestPrice=data;
  if(this.rawData.length==0)
  {
    console.log('inside first');
    
      let now=new Date();
      this.minuteNumber=now.getMinutes();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let _time = (hour < 10 ? "0" : "") + hour+":"+(min < 10 ? "0" : "") + min+":"+(sec < 10 ? "0" : "") + sec;
    let _price=parseFloat(this.latestPrice);
    this.rawData.push([_time, _price, _price,_price, _price]);
  }


    if(!this.sInterval)
    this.sInterval=setInterval(() => {
      
      if(this.rawData.length>this.chartSize)
        this.rawData.shift();
      
      let newNow=new Date();
      let _hour = newNow.getHours();
    let _min = newNow.getMinutes();
    let _sec = newNow.getSeconds();
    let time = (_hour < 10 ? "0" : "") + _hour+":"+(_min < 10 ? "0" : "") + _min+":"+(_sec < 10 ? "0" : "") + _sec;
     
      this.minuteArray.push(this.latestPrice);
      let price = parseFloat(this.latestPrice);
      if(this.minuteNumber==newNow.getMinutes() && newNow.getSeconds()<=59)
      {
          this.rawData[this.rawData.length-1][2]=price;
          this.rawData[this.rawData.length-1][3]=Math.min.apply(null,this.minuteArray);
          this.rawData[this.rawData.length-1][4]=Math.max.apply(null,this.minuteArray);

      }
      console.log(newNow.getMinutes(), this.minuteNumber);
      if(newNow.getMinutes()!=this.minuteNumber)
      {
        console.log(newNow.getMinutes());
      console.log(this.minuteNumber);

        this.minuteNumber=newNow.getMinutes();
        // this.rawData.push([time, price*Math.random()*2.5, price*Math.random()*29,price*Math.random()*2.5, price*Math.random()*2.5]);
        this.rawData.push([time, price, price,price, price]);
        this.minuteArray.length=0;
        this.minuteArray.push(price);
        
      }
      
      
      this.setData();
      this.setOption()
    }, 1000)

}
  ngOnInit() {
    this.chartSize=30;
    if (window.innerWidth < 768) {
      this.chartSize=10;
      this.rawData = [
      ];
    }   
    
  }
  	

  rawData = [
  // ['01:06:05', '3145.76', '3157.7', '3139.05', '3166.42'],
  // ['01:06:06', '3090.49', '3141.59', '46.47', '1.50%', '3084.25', '3142.1', '193817136', '22508492', '-'],
  // ['01:06:07', '3063.51', '3095.12', '19.22', '0.62%', '3049.11', '3119.03', '206108384', '24071968', '-'],
  // ['01:06:08', '3120.09', '3075.91', '-60.62', '-1.93%', '3052.94', '3129.54', '246749680', '26650278', '-'],
  // ['01:06:09', '3251.21', '3136.53', '-37.6', '-1.18%', '3135.82', '3251.21', '306139296', '34826696', '-'],
  // ['01:06:10', '3212.82', '3174.13', '-30.78', '-0.96%', '3171.14', '3238.98', '249098080', '29015516', '-'],
  // ['01:06:11', '3156.09', '3204.91', '76.61', '2.45%', '3129.73', '3207.94', '248192160', '28335594', '-'],
  // ['01:06:12', '3148.14', '3128.3', '-82.06', '-2.56%', '3122.57', '3175.13', '250861632', '26684996', '-'],
  // ['01:06:13', '3273.75', '3210.36', '-51.94', '-1.59%', '3210.31', '3288.5', '258312544', '28426564', '-'],
  // ['01:06:14', '3259', '3262.3', '-43.43', '-1.31%', '3234.24', '3286.79', '274658624', '29642450', '-'],
  // ['01:06:15', '3325.72', '3305.74', '-47.22', '-1.41%', '3294.66', '3354.8', '301927104', '34156428', '-'],
  // ['01:06:16', '3389.85', '3352.96', '-30.22', '-0.89%', '3290.22', '3390.22', '374517568', '41829884', '-'], 
  // ['01:06:17', '3347.26', '3383.18', '31.42', '0.94%', '3321.31', '3384.8', '317540992', '35842744', '-'],
  // ['01:06:18', '3357.1', '3351.76', '8.42', '0.25%', '3328.29', '3406.79', '366249248', '42097952', '-'],
  // ['01:06:19', '3327.32', '3343.34', '19.73', '0.59%', '3293.98', '3352.38', '353382976', '40787408', '-'],
  // ['01:06:20', '3189.08', '3323.61', '150.56', '4.74%', '3178.34', '3337', '410956032', '47375868', '-'],
  // ['01:06:21', '3114.56', '3173.05', '56.7', '1.82%', '3100.48', '3190.25', '357080800', '41629524', '-'],
  // ['01:06:22', '3189.73', '3116.35', '-260.14', '-7.70%', '3095.07', '3262.21', '401098784', '40988600', '-'],
  // ['01:06:23', '3343.6', '3376.5', '40.04', '1.20%', '3340.49', '3400.32', '339876768', '39225388', '-'],
  // ['01:06:24', '3224.07', '3336.46', '114.02', '3.54%', '3207.54', '3337.08', '282546240', '33061054', '-'], 
  // ['01:06:25', '3242.34', '3222.44', '-12.86', '-0.40%', '3193.98', '3268.48', '240190752', '26720452', '-'],
  // ['01:06:26', '3223.54', '3235.3', '5.98', '0.19%', '3214.41', '3259.39', '230725760', '27358878', '-'],
  // ['01:06:27', '3258.21', '3229.32', '-56.1', '-1.71%', '3191.58', '3275.19', '322064672', '36627308', '-'],
  // ['01:06:28', '3276.97', '3285.41', '-8.04', '-0.24%', '3267.51', '3404.83', '410240864', '45864804', '-'],
  // ['01:06:29', '3371.96', '3293.46', '-80.5', '-2.39%', '3285.09', '3381.57', '371131200', '39923032', '-'],
  // ['01:06:30', '3326.65', '3373.95', '22.51', '0.67%', '3312.21', '3374.9', '391918880', '43641672', '-'],
  // ['01:06:31', '3330.8', '3351.45', '0.93', '0.03%', '3303.18', '3394.22', '501661696', '53239848', '-'], 
];

  setData() {
    this.dates = this.rawData.map(function (item) {
      return item[0];
    });
    this.data = this.rawData.map(function (item) {
      return [+item[1], +item[2], +item[3], +item[4]];
    });
    let _offMin=[];
    this.rawData.map(x=>{
      _offMin.push(x[1])
      _offMin.push(x[2])
      _offMin.push(x[3])
      _offMin.push(x[4])
    });
    this.totalMin=Math.min.apply(null,_offMin)-5;
    this.totalMax= Math.max.apply(null,_offMin)+5;
  }

  calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += data[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  }

  setOption() {
    this.option = {
      animation: false,
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: 10,
        left: 60,
        right: 20,
		bottom: 40,
      },
      xAxis: {
        type: 'category',
        data: this.dates,
        axisLine: { lineStyle: { color: '#d1d1ff' } },		
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#d1d1ff' } },
        splitLine: { show: false },
    min: this.totalMin,
    max: this.totalMax,
      },
      series: [
        {
          // dimensions: [null, 'Open', 'Close', 'Lowest', 'Highest'],
          type: 'candlestick',
          data: this.data,
          itemStyle: {
            normal: {
              color: '#97f186',
              color0: '#f0355c',
              borderColor: '#97f186',
              borderColor0: '#f0355c',
              shadowBlur: 3,
              shadowColor: "transparent"
            }
          }
        }
      ]
    };
  }

}
