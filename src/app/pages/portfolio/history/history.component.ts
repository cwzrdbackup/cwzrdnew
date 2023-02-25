import { Component, OnInit, Input } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import {ApiService} from '../../dataservice/apiservice.component';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history:any;
  size: any;
  loading:boolean=true;
  constructor(private _dataservice: ApiService) { }
  Dates:any=[];
  Data:any=[];
  fontSize:any;
  leftMargin:any;
  rightMargin:any;
  setData=data=>{
    this.history=data;
    console.log(data);
          data.map(x=>{            
            this.Dates.push(x.dateChange)
            this.Data.push(x.TotalHigh);
          })
          this.setChartOption();
          this.loading=false;
  }
  setTodayBalance=balance=>{
    
    this.Data[29]=balance;
    this.setChartOption();
  }
  ngOnInit() {
    if (window.innerWidth < 768) {
      this.fontSize = 8;
      this.leftMargin = 55;
      this.rightMargin = 22;
    } else if (768 <= window.innerWidth && window.innerWidth < 992) {
      this.fontSize = 10;
      this.leftMargin = 70;
      this.rightMargin = 35;
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.fontSize = 12;  
      this.leftMargin = 85;
      this.rightMargin = 40;    
    } else if (window.innerWidth >= 1200) {
      this.fontSize = 12;
      this.leftMargin = 90;
      this.rightMargin = 45;
    }
//{ json: true, authorization: "Apikey e2de24ba72261ce8580e4267648e0e27d234784f6e86b9004b8930ec28c073cb" }
    // this._dataservice.getAllOutside("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&api_key=e2de24ba72261ce8580e4267648e0e27d234784f6e86b9004b8930ec28c073cb")
    //   .subscribe((response: any) => {
    //     if(response.Response==="Success")
    //     {
    //       let data = response.Data.Data
    //       data.map(x=>{
            
    //         let  timestamp = x.time;
    //         let date = new Date(timestamp * 1000)
    //         this.Dates.push((date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear())
    //         this.Data.push(x.close);
    //       })
    //       this.setChartOption();
    //     }
          
    //       this.loading=false;  
    //   },
    //   () => {
    //     this.loading=false;
    //   });

  }
  chartOption: EChartOption;
  setChartOption()
  {
    this.chartOption= {
      tooltip: {
        trigger: "axis",
      backgroundColor: 'rgba(117,71,208,0.7)',
      borderWidth: 2,
      borderColor: 'rgb(177,138,247)',
        axisPointer: {
          axis: "x",
          type: "line",
        },
      textStyle: {
        fontWeight: "bolder",
      },
        padding: 16,
        formatter: (p: any) => {
          return p[0].name + " : " + "$" + p[0].value.toLocaleString('en-GB');
        }
      },
      grid: {
        left: this.leftMargin,
        right: this.rightMargin,
        bottom: 55,
        top: 20,
      show: true,
      borderColor: '#363077',
      borderWidth: 1,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,	  
      axisLabel: {
        fontSize: this.fontSize,
        show: true,
        color: "#ffffff",
      },
        splitLine: {
        show: true,
      color: "#363077",
      lineStyle: {
      color: "#363077",
      },
        },
      axisLine: {
      show: true,
        lineStyle: {
        color: "#fff",
      },
      },
        axisPointer: {
          show: true,
          lineStyle: {
            color: "#0dff92",
            type: "solid"
          },
          label: {
            show: false
          }
        },
        data: this.Dates,
        show: true
      },
      yAxis: {
        axisLabel: {
          fontSize: this.fontSize,       
          formatter: (v) => { return "$" + v.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        },
        splitLine: {
        show: true,
      color: "#363077",
      lineStyle: {
      color: "#363077",
      },
        },
        type: 'value',
        show: true,
      axisLine: {
      show: true,
        lineStyle: {
        color: "#fff",
      },
      },
      },
    
      axisPointer: {
        show: false,
        lineStyle: {
          color: "#0dff92",
          type: "dashed"
        },
        label: {
          show: true
        }
      },	    
      series: [{
        data: this.Data,
        type: 'line',
      showSymbol: false,
        symbolSize: 9,
        itemStyle: {
          shadowColor: "#fff",
          shadowBlur: 12
        },
        emphasis: {
          itemStyle: {
            color: '#20c997',
            borderColor: "#0dff92",
            borderWidth: 3,
            opacity: 0.6,
          }
        },
        lineStyle: {
          shadowColor: "#fff",
          shadowBlur: 12
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#3c397c'
            }, {
              offset: 1,
              color: '#605cc7'
            }
          ])
        }
      }],
      color: ["#0dff92"]
    };
  }
  
}
