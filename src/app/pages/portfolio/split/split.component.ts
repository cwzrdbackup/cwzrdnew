import { Component, OnInit,Input } from '@angular/core';
import { EChartOption } from 'echarts';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {
  // baseData=[];

  constructor(private pipe: DecimalPipe) { }
  setData=data=>{
    // this.baseData=data;
    // console.log(data);
   
    this.setOption(this.label, null,this.perc, this.radius,data);
  }
  radius:any;
  baseData:any[]=[];
  waseData=[
    { value: 90,count:1.3, type:'BTC', name: 'BITCOIN', label: { rich: { c: { color: "#ef4f64", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: "/assets/Bitcoin.svg" } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropdown.svg" } } } } },
    { value: 4367,count:1.3, type:'ETH', name: 'ETHEREUM', label: { rich: { c: { color: "#5cef4f", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: "/assets/ethereum.svg" } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropup.svg" } } } } },
    { value: 5166,count:1.3, type:'LTC', name: 'LITECOIN', label: { rich: { c: { color: "#ef4f64", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: "/assets/Litecoin.png" } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropdown.svg" } } } } },
    { value: 3944,count:1.3, type:'EOS', name: 'EOS',  label: { rich: { c: { color: "#5cef4f", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: "/assets/eos.svg" } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropup.svg" } } } } },
    { value: 3275,count:1.3, type:'XRP', name: 'RIPPLE', label: { rich: { c: { color: "#ef4f64", fontSize: "2px" }, icon1: { width: 30, height: 30, backgroundColor: { image: "/assets/ripple.svg" } } , icon2: { width: 18, height: 18, backgroundColor: { image: "/assets/dropdown.svg" } } } } }
  ];
  label:any;
  legend:any;
  perc:any;
  ngOnInit() {
   
    if (window.innerWidth < 768) {
      this.radius = "60%";
      this.label = {
        position: "inner",
        normal: {
          show: false,
          position: "inner",
        },
        emphasis: {
          show: true,
          position: "",
          formatter: (p) => {
            return `{icon1|} ${p.name} (${p.percent}%) \n      {c|${'$' + this.pipe.transform(p.data.value, '1.2-2')}} {icon2|}`
          },
          color: "#fff",
          lineHeight: 18,
          fontSize: 16,
		  fontFamily: "Exo",
          backgroundColor: "rgba(61,44,128,.8)",
          borderColor: "#a1a1e5",
          borderRadius: 8,
          borderWidth: 2,
          padding: 12
        }
      }      
      this.legend = {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
      
        itemHeight: 24,
        padding: 16,
        textStyle: {
          color: "#fff",
          fontSize: 16,
		  lineHeight: 16,
		  fontFamily: "Exo",
        },
        data: ['BITCOIN', 'ETHEREUM', 'LITECOIN', 'CARDANO', 'RIPPLE']
      }
      this.perc = ["50%", "40%"];
      this.setOption(this.label, this.legend, this.perc, this.radius,this.baseData);
    } else if (768 <= window.innerWidth && window.innerWidth < 992) {
      this.radius = "40%";
      this.label = {
        position: "outside",
		fontWeight: 'bolder',
        formatter: (p) => {
          return `{icon1|} ${p.name} (${p.percent}%) \n      {c|${'$' + this.pipe.transform(p.data.value, '1.2-2')}} {icon2|}`
        },
        color: "#fff",
        lineHeight: 16,
        fontSize: 14,
		    fontFamily: "Exo",
      }      
      this.perc=["50%", "50%"];
      this.setOption(this.label, null, this.perc, this.radius,this.baseData);
      
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.radius = "52%";
      this.label = {
        position: "outside",
		fontWeight: 'bolder',
        formatter: (p) => {
          return `{icon1|} ${p.name} (${p.percent}%) \n      {c|${'$' + this.pipe.transform(p.data.value, '1.2-2')}} {icon2|}`
        },
        color: "#fff",
        lineHeight: 22,
        fontSize: 20,
		    fontFamily: "Exo",
      }      
      this.perc =["50%", "50%"];
      this.setOption(this.label, null, this.perc, this.radius,this.baseData);
      
    } else if (window.innerWidth >= 1200) {
      this.radius = "70%";
      this.label = {
        position: "outside",
		fontWeight: 'bolder',
        formatter: (p) => {
          return `{icon1|} ${p.name} (${p.percent}%) \n      {c|${'$' + this.pipe.transform(p.data.value, '1.2-2')}} {icon2|}`
        },
        color: "#fff",
        lineHeight: 22,
        fontSize: 20,
		    fontFamily: "Exo",
      }    
      this.perc=  ["50%", "50%"];
      this.setOption(this.label, null,this.perc, this.radius,this.baseData);
      
    } 
  }

  barStyle = {
  }

  chartOption: EChartOption;

  setOption(label: any, legend: any, center: string[], radius: string, baseData) {
    this.chartOption = {
      animation: true,
      color: ["#dd4b63", "#9d5ae5", "#5fabf7", "#b3f134", "#f89c40"],
      // grid: {
      //   show: true,
      //   bottom: -10,
      //   top: -10,
      //   left: -10,
      //   right: -10
      // },
      legend: legend,
      series: [
        {
          type: 'pie',
          radius: radius,
          center: center,
          data: baseData,
          label: label,
          labelLine: {
            show: true,
            length: 24,
            length2: 48,
            lineStyle: {
              color: "#a1a1e5",
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
  }

  djoka = {
    value: 6000000,
    name: 'Bitcoin',
    itemStyle: this.barStyle,
    label: {
      rich: {
        c: {
          color: "#fff"
        },
        icon2: {
          backgroundColor: {
            image: "/assets/dropdown.svg"
          }
        },
        Icon22: {
          backgroundColor: {
            image: "/assets/dropdown.svg"
          }
        }
      }
    }
  };

}



// {
//   color: ["#007bff", "#d500f9", "#00e5ff", "#76ff03", "#ffea00", "#ff9100"],
//   grid: {
//     show: true,
//     bottom: -10,
//     top: -10,
//     left: -10,
//     right: -10
//   },
//   animation: false,
//   legend: legend,
//   series: [
//     {
//       type: "pie",
//       radius: ['50%', '70%'],
//       center: center,
//       avoidLabelOverlap: false,
//       label: label,
//       labelLine: {
//         show: true,
//         length: 24,
//         length2: 48,
//         lineStyle: {
//           color: "#fff"
//         }
//       },
//       data: [
//         { value: 6000000, name: 'BITCOIN', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon2: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
//         { value: 4400000, name: 'ETHEREUM', itemStyle: this.barStyle, label: { rich: { c: { color: "#5cef4f" }, Icon2: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
//         { value: 2800000, name: 'LITECOIN', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon2: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
//         { value: 1900000, name: 'CARDANO', itemStyle: this.barStyle, label: { rich: { c: { color: "#5cef4f" }, Icon2: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
//         { value: 2200000, name: 'RIPPLE', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon2: { backgroundColor: { image: "/assets/dropdown.svg" } } } } }
//       ]
//     }
//   ]
// }