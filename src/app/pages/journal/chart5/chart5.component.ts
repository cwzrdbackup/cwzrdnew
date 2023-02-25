import {Component, Input, OnInit} from '@angular/core';
import {EChartOption} from 'echarts';
import {NbTooltipModule} from '@nebular/theme';

@Component({
    selector: 'trader-log-chart5',
    templateUrl: './chart5.component.html',
    styleUrls: ['./chart5.component.scss']
})
export class Chart5Component implements OnInit {

    @Input() inputData: any[];

    flipped: boolean = false;
    isLoaded: boolean = false;

    chartOption: EChartOption;

    constructor() {
    }

    ngOnInit() {
        //   this.setOption();
    }

    ngOnChanges(changes: any) {
        this.setOption(this.inputData);
        // console.log('this.inputData.length');
        // console.log(this.inputData.length);
        if (this.inputData.length > 0) {
            this.isLoaded = true;
        }
    }

    // parseData(): string {
    //   let s = 0;
    //   let l = 0;
    //   if (this.inputData) {
    //     this.inputData.forEach(d => {
    //       if (d.position.toLowerCase() === "short") {
    //         s += 1;
    //       } else if (d.position.toLowerCase() === "long") {
    //         l += 1;
    //       }
    //     })
    //   }
    //   return s > l ? "Short" : "Long"
    // }

    flip() {
        this.flipped = !this.flipped;
    }

    setOption(data) {
        console.log(data);
        console.log('chart5');
        this.chartOption = {
            color: ['#efaa47', '#4ba9d9'],
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                padding: 8,
                position: 'inside',
                formatter: '{b}-{c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    itemStyle: {
                        shadowBlur: 6,
                        shadowColor: '#fff'
                    },
                    data: data,
                    // data: [
                    //   { value: 335, name: 'SHORT' },
                    //   { value: 264, name: 'LONG' },
                    // ]
                }
            ]
        };
    }
}
