import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import {EChartOption, graphic} from 'echarts';

@Component({
    selector: 'trader-log-chart4',
    templateUrl: './chart4.component.html',
    styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {

    @Input() inputData: any[];

    flipped: boolean = false;
    isLoaded: boolean = false;

    data = [];
    chartOption: EChartOption;

    constructor(private _configuration: Configuration) {
    }

    ngOnInit() {
        // this.generateData(true, 12)
        // this.setOptions(this.data, true);
    }

    ngOnChanges(changes: any) {
        this.setOptions(this.inputData.map(x => {
            return x.TotalNumber;
        }), this.inputData.map(x => {
            return x.closeDate;
        }), true);
        // console.log('this.inputData.length');
        // console.log(this.inputData.length);
        if (this.inputData.length > 0) {
            this.isLoaded = true;
        }
        console.log(this.inputData);
    }

    // parseData(): number {
    //   let total = 0;
    //   if (this.inputData) {
    //     this.inputData.forEach(d => total += d.pip);
    //   }
    //   return total;
    // }

    flip() {
        this.flipped = !this.flipped;
    }

    // generateData(isNew: boolean, less: number) {
    //   for (let i = 0; i < less; i++) {
    //     isNew ? '' : this.data.shift();
    //     this.data.push(Math.round(Math.random() * 1000))
    //   }
    // }

    setOptions(data, columns, animation) {

        this.chartOption = {
            animation: animation,
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                position: 'bottom',
                padding: 8,
                //formatter: '{c}'
            },
            grid: {
                left: 30,
                right: 20,
                bottom: 20,
                top: 10
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#d1d1ff',
                    }
                },
                axisLabel: {
                    fontSize: 8
                },
                axisPointer: {
                    show: true,
                    lineStyle: {
                        color: '#d1d1ff',
                        type: 'dashed'
                    },
                    label: {
                        show: false
                    }
                },
                data: columns,// ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
                show: true
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#d1d1ff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#3d3780'
                    }
                },
                axisLabel: {
                    fontSize: 8
                }
            },
            series: [{
                data: data,
                type: 'line',
                symbolSize: 9,
                itemStyle: {
                    shadowColor: 'rgba(255,255,255,.7)',
                    shadowBlur: 12,
                    color: '#fff',
                },
                emphasis: {
                    itemStyle: {
                        color: '#20c997',
                        borderColor: '#00ffb4',
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
            color: ['#985fff']
        };
    }
}
