import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ochart1new',
  templateUrl: './ochart1new.component.html',
  styleUrls: ['./ochart1new.component.scss']
})
export class ochart1newComponentnew implements OnInit {
  loading:boolean=true;
  dataOptions:any;
  balance:any;
  obsData:any;
  setData=(data)=>{
    this.dataOptions={
      series: [{
        data: data.graph
      }]
    };
    if(this.selectedCoin)
    {
      
      let p =data.graph.filter(x=>x.name==this.selectedCoin)[0];
      console.log(p);
      this.selectedPrice=p.value.toFixed(2);
      this.selectedColor=p.color;
      this.selectedArrow=p.arrow;
      this.selectedPercent=p.percent.toFixed(2);
    }
    this.obsData=data.graph;
    this.balance=data.balance;
    this.loading=false;
  }
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
  
  secondRowData = [
    { title: "PORTFOLIO BALANCE", value: 9535.45, percent: 0, change: 100, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart1" },
    { title: "TOTAL MARKET CAP", value: 248.56, percent: 0, change: 1, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
    { title: "TOTAL VOLUME", value: 94.54, percent: 0, change: 1, arrow: "nb-arrow-dropdown", color: "#00ff39", app: "app-ochart1" },
    { title: "MARKET DOMINANCE", value: 67.5, percent: 0, change: 0.6, arrow: "nb-arrow-dropup", color: "#00ff39", app: "app-ochart2" },
	
  ]
  
  interval: Subscription;

  barStyle = {
  }
  
  ngOnInit() {
  
  
  
  
  if (window.innerWidth > 1280) {
    this.chartOption1.legend["orient"] = "vertical";
    this.chartOption1.legend["x"] = "center";
    this.chartOption1.legend["y"] = "center";
    this.chartOption1.legend["itemWidth"] = 48;
    this.chartOption1.legend["itemHeight"] = 24;
    this.chartOption1.legend["left"] = "0";
    this.chartOption1.series[0]["center"] = ["50%", "50%"];
  }
 
   
  }
  
  

  toogle = false;
  revealed = false;
  
  
percentV: number;
  chartOption2: EChartOption;
  selectedCoin: string;
  selectedPrice: string;
  selectedPercent: string;
  selectedColor:string;
  selectedArrow:string;
  constructor() { }



  chartOption1: EChartOption = {
    tooltip: {
      show: true,
        trigger: "axis",
        padding: 16,
    },
    color: ["#dd4b64", "#9d5ae5", "#5fabf7", "#b5e659", "#ffea00", "#f09537"],
    legend: {
      orient: 'horizontal',
	  show: false,
	  selectedMode: false,
      x: 'center',
      y: 'bottom',
      align: "center",
      itemHeight: 24,
      padding: 16,
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
      data: []
    },
    grid: {
      show: true,
      bottom: -10,
      top: -30,
      left: -10,
      right: -10,
    },
    series: [
      {
        type: "pie",
		hoverOffset: 0,
		hoverAnimation: false,
        radius: ['0%', '100%'],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          color: "#fff",
          fontSize: 12,
          fontWeight: "lighter",
          formatter: "Total Market Cap \n \n $1.321.132.546,21",
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          // { value: 3350.34, name: 'Bitcoin'},
          // { value: 2100.67, name: 'Ethereum'},
          // { value: 2345.11, name: 'Bitcoin Cash'},
          // { value: 1350.57, name: 'Lite Coin'},
          // { value: 948.89, name: 'XRP'},
          // { value: 848.35, name: 'EOS'},
        ]
      }
    ]
  }


  clicked(e) {
    this.selectedCoin = e.data.name;
	  this.selectedPrice = e.data.value.toFixed(2);
    this.selectedPercent = e.data.percent.toFixed(2);
    this.selectedArrow=e.data.arrow;
    this.selectedColor=e.data.color;
    this.revealed = true;
    // this.setChartOption2();
  }
  off=()=>{
    this.selectedCoin=null;
    this.selectedPrice=null;
    this.selectedPercent=null;
    this.revealed=false;
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.interval.unsubscribe();
  }

  getData(idx: number, val: string) {
    return this.secondRowData[idx][val];
  }

  

}
