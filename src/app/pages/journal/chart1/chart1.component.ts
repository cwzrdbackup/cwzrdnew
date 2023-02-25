import { Configuration } from './../../dataservice/app.constant.component';
import {Component, Input, OnInit} from '@angular/core';
import {EChartOption, graphic} from 'echarts';
@Component({
    selector: 'trader-log-chart1',
    templateUrl: './chart1.component.html',
    styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

    @Input() data: any[];

    flipped: boolean = false;
    isLoaded: boolean = false;

    // data = [];
    chartOption: EChartOption;

    constructor(private _configuration: Configuration) {
    }

    ngOnChanges(changes: any) {
        if (this.data) {
        this.setOptions(this.data.map(x => {
            return x.TotalNumber;
        }), this.data.map(x => {
            return x.closeDate;
        }), true);
    }
        if (this.chartOption) {
            // console.log('this.chartOption');
            // console.log(this.chartOption.series[0]['data'].length);
            if (this.chartOption.series[0]['data'].length > 0) {
                this.isLoaded = true;
            }
        }
    }


    ngOnInit() {
        //this.generateData(true, 7)
    }

    flip() {
        this.flipped = !this.flipped;
    }

    generateData(isNew: boolean, less: number) {
        for (let i = 0; i < less; i++) {
            isNew ? '' : this.data.shift();
            this.data.push(Math.round(Math.random() * 1000));
        }
    }    

    setOptions(data, weekDays, animation) {
        console.log(weekDays);
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
                position: function (point, params, dom, rect, size) {
                    let left  = +point[0];
                    let top  = +point[1];
        
                    if (size['viewSize'][0] - left < 50 ) {
                        left -= 50;
                    } else {
                        left += 15;
                    }
        
                    if ( size['viewSize'][1] - top < 50 ) {
                      top -= 50;
                    }
                    return {left, top};
                },
                backgroundColor: 'rgba(117, 71, 208, .3)',
                borderColor: '#b18af7',
                borderWidth: 2,
                padding: 8,
                formatter: '{c}'
            },
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#d1d1ff',
                    fontSize: 12,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#d1d1ff',
                    }
                },
                axisTick: {
                    show: false,
                },
                axisPointer: {
                    show: false,
                    lineStyle: {
                        color: '#d1d1ff',
                        type: 'dashed'
                    },
                    label: {
                        show: false
                    }
                },
                data: weekDays,//['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                show: true
            },
            yAxis: {
                type: 'value',
                show: false,
                boundaryGap: [0, '5%'],
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#3d3780'
                    }
                },
            },
            toolbox: {
                show: false,
            },
            series: [{
                data: data,
                type: 'bar',
                barMaxWidth: 14,
                itemStyle: {
                    shadowBlur: 0.5,
                    shadowColor: '#fff',
                    width: 10,
                    normal: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ffeb3b',
                        }, {
                            offset: 1,
                            color: '#ffc107',
                        }]),
                        opacity: 1,
                        shadowColor: '#fff',
                        shadowBlur: 6,
                    },
                },
                emphasis: {},
                lineStyle: {
                    shadowColor: '#fff',
                    shadowBlur: 12,
                    width: 3
                }
            }],
            color: ['#985fff']
        };
    }
}
