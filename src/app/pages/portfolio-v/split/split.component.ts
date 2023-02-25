import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

  constructor(private pipe: DecimalPipe) { }

  ngOnInit() {
    if (window.innerWidth > 500) {
      const label = {
        position: "outside",
        formatter: (p) => {
          return `${p.name} ${p.percent}% \n {c|${this.pipe.transform(p.data.value)}} {Icon|}`
        },
        color: "#fff",
        lineHeight: 24,
        fontSize: 18
      }
      this.setOption(label, null, ["50%", "50%"]);
    } else {
      const label = {
        position: "inner",
        normal: {
          show: false,
          position: "inner",
        },
        emphasis: {
          show: true,
          position: "inner",
          formatter: (p) => {
            return `${p.name} ${p.percent}% \n {c|${this.pipe.transform(p.data.value)}} {Icon|}`
          },
          color: "#fff",
          lineHeight: 18,
          fontSize: 12,
          backgroundColor: "rgba(61,44,128)",
          borderColor: "#fff",
          borderRadius: 8,
          borderWidth: 2,
          padding: 8
        }
      }
      const legend = {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        align: "left",
        itemHeight: 24,
        padding: 16,
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
        data: ['Bitcoin', 'Ethereum', 'Litecoin', 'Cardano', 'Ripple']
      }
      this.setOption(label, legend, ["50%", "40%"]);
    }
  }

  barStyle = {
    shadowColor: "#fff",
    shadowOffsetY: 1,
    shadowBlur: 12
  }
  chartOption: EChartOption;

  setOption(label: any, legend: any, center: string[]) {
    this.chartOption = {
      color: ["#007bff", "#d500f9", "#00e5ff", "#76ff03", "#ffea00", "#ff9100"],
      grid: {
        show: true,
        bottom: -10,
        top: -10,
        left: -10,
        right: -10
      },
      animation: false,
      legend: legend,
      series: [
        {
          type: "pie",
          radius: ['50%', '70%'],
          center: center,
          avoidLabelOverlap: false,
          label: label,
          labelLine: {
            show: true,
            length: 24,
            length2: 48,
            lineStyle: {
              color: "#fff"
            }
          },
          data: [
            { value: 6000000, name: 'Bitcoin', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
            { value: 4400000, name: 'Ethereum', itemStyle: this.barStyle, label: { rich: { c: { color: "#5cef4f" }, Icon: { backgroundColor: { image: "/assets/dropup.svg" } } } } },
            { value: 2800000, name: 'Litecoin', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon: { backgroundColor: { image: "/assets/dropdown.svg" } } } } },
            { value: 1900000, name: 'Cardano', itemStyle: this.barStyle, label: { rich: { c: { color: "#5cef4f" }, Icon: { backgroundColor: { image: "/assets/dropup.svg" } } } } },
            { value: 2200000, name: 'Ripple', itemStyle: this.barStyle, label: { rich: { c: { color: "#ef4f64" }, Icon: { backgroundColor: { image: "/assets/dropdown.svg" } } } } }
          ]
        }
      ]
    }
  }

}
