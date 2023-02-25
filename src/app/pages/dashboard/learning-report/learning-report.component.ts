import { Component, OnInit, Input, HostListener } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-learningReport',
  templateUrl: './learning-report.component.html',
  styleUrls: ['./learning-report.component.scss']
})
export class LearningReportComponent implements OnInit {
  @Input() usefulProgress: any;

  progress: any;
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];
  data5: any[] = [];
  timeStart: string;
  timeMilli: any;

  chartOption: EChartOption;
  windowWidth: number;

  constructor() { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.data1 = [0, 0, 0, 0, 0, 0, 0];
    this.data2 = [0, 0, 0, 0, 0, 0, 0];
    this.data3 = [0, 0, 0, 0, 0, 0, 0];

    this.data5 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //this.setOption(this.data1, this.data2, this.data3, this.data5, true);



  }

  ngOnChanges(): void {
    //console.log("phrase equals: ", this.usefulProgress); // logs correct data, yay!

    if (this.usefulProgress) {
      this.progress = this.usefulProgress;
      this.progress.course.forEach(item => {
        item.progress = item.progress.toFixed(2);
      });
      this.progress.book.forEach(item => {
        item.progress = item.progress.toFixed(2);
      });
      this.progress.exam.forEach(item => {
        item.progress = item.progress.toFixed(2);
      });
      this.makeFix(this.data1, this.progress.course);
      this.makeFix(this.data2, this.progress.book);
      this.makeFix(this.data3, this.progress.exam);
    }

  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  makeFix = (data, dd) => {

    for (var i = 0; i < this.data5.length; i++) {
      let _obj = dd.filter(x => x.dayName == this.data5[i])[0];
      if (_obj) {
        // let index = this.progress.course.indexOf(_obj);
        data[i] = _obj.progress;
      }

    }


    this.setOption(this.data1, this.data2, this.data3, this.data5, true);
  }

  setOption(data1, data2, data3, data5, animation) {
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
        top: 20,
        bottom: 50,
        left: 40,
        right: 20
      },
      tooltip: {
        show: true,
        trigger: "axis",
        padding: 5,
        position: function (pos, params, dom, rect, size: any) {
          if (window.innerWidth < 768 && pos[0] > (size.viewSize[0] / 7) * 5) {
            pos[0] = (size.viewSize[0] / 7) * 5;
          }
          return window.innerWidth < 768 ? [pos[0], '2%'] : [pos[0], '30%'];
      },
        formatter: '{b}<br /> <div style=\"width: 8px;  height: 8px; background-color: #68da9b; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a0}: {c0}%<br /> <div style=\"width: 8px; height: 8px; background-color: #9e74fd; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a1}: {c1}% <br/> <div style=\"width: 8px; height: 8px; background-color: #f7ec74; border-radius: 50%; margin-right: 2px; margin-bottom: 1px; display: inline-block; line-height: 12px;\"></div> {a2}: {c2}% '
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
              show: true,
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#a0a1df",
              width: 2,
            },
          },
          axisLabel: {
            color: "#fff",
            show: this.isXsScreen ? true : false,
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
          min: 0,
          max: 100,
          splitLine: {
            show: false,
            lineStyle: {
            }
          },
          axisLine: {
            show: true,
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
          splitNumber: 6,
          min: 0,
          max: 100,
          z: 300,
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            show: true,
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
            formatter: (v) => { return v }
          },
          position: "left"
        }
      ],
      series: [
        {
          type: 'line',
          stack: true,
          id: "one",
          name: "Course",
          smooth: .3,
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
          areaStyle: {
            color: '#367368',
            opacity: 0.7,
          },
          symbolSize: 9,
          lineStyle: {
            color: new graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: '#68da9b'
              },
              {
                offset: 1,
                color: '#68da9b'
              }
            ]),
            width: 5,
            curveness: 1,
            opacity: 1,
          },
          data: data1,
        },
        {
          type: 'line',
          id: "two",
          name: "Library",
          smooth: .3,
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
          areaStyle: {
            color: '#7a81d2',
            opacity: .7,
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
          name: "Exams",
          smooth: .3,
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
          areaStyle: {
            color: '#f6f0aa',
            opacity: .7,
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
