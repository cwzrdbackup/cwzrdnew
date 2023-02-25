import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EChartOption, registerMap } from 'echarts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.scss']
})
export class Chart5Component implements OnInit {


  chartOption: EChartOption;

  zoom: number = 1.5;

  @ViewChild("map") map:ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/assets/world.json").subscribe(res => {
      registerMap("world", res);
      this.setOption(this.zoom);

    })
  }
  setOption(zoom: number) {
    this.chartOption = {
      series: [
        {
          type: 'map',
          map: "world",
          roam: true,
          zoom: zoom,
          selectedMode: "single",
          scaleLimit: {
            min: 1,
            max: 9
          },
          itemStyle: {
            areaColor: "#7659ff",
            borderColor: "#3c2c8a",
            emphasis: {
              areaColor: "rgba(100, 255, 218, 0.33)",
              borderColor: "#64ffda",
              borderWidth: 1
            }
          },
          label: {
            normal: {
              show: false,
              formatter: ""
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        }
      ]
    };

  }

  zoomIn() {
    if (this.zoom < 8) {
      this.zoom += 1;
      this.setOption(this.zoom)
    }
  }

  zoomOut() {
    if (this.zoom > 2) {
      this.zoom -= 1;
      this.setOption(this.zoom)
    }
  }

}
