import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart9',
  templateUrl: './chart9.component.html',
  styleUrls: ['./chart9.component.scss']
})
export class Chart9Component implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit() {
    
//register custome positioner
Chart.Tooltip.positioners.custom = function(elements, position) {
  if (!elements.length) {
    return false;
  }
  var offset = 0;
  //adjust the offset left or right depending on the event position
  if (elements[0]._chart.width / 2 > position.x) {
    offset = 20;
  } else {
    offset = -20;
  }
  return {
    x: position.x + offset,
    y: position.y
  }
}
  }

  ngAfterContentInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      grid: {
        top: -50,
        left: -50,
        right: -50,
		bottom: -50,
      },
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'BTC',
          data: [0, 6, -5.5, 6.5, this.random(), this.random()],
          borderColor: "#ff3333",
          backgroundColor: "#ff3333",
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 5,
        }, {
          label: 'ETH',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          borderColor: "#26b3fa",
          backgroundColor: "#26b3fa",
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 5,
        }, {
          label: 'XRP',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          borderColor: "#5eff32",
          backgroundColor: "#5eff32",		  
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 5,
        }, {
          label: 'LTC',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          borderColor: "#fffc33",
          backgroundColor: "#fffc33",
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 5,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          position: "custom",
          mode: 'index',
          axis: 'y',
		  backgroundColor: 'rgba(117, 71, 208, .3)',
		  borderColor: '#b18af7',
		  borderWidth: 2,      
        },
        legend: {
          position: 'top',		  
		  height: 25,
          labels: {
		    padding: 20,
            fontColor: "#fff",
			boxWidth: 8,
			itemGap: 20,
			boxHeight: 2,
			selectedMode: false,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                display: false,
                color: "#d1d1ff",
              },
              ticks: {
                fontColor: "#d1d1ff",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              scaleLabel: {
                display: false
              },
              gridLines: {
                display: false,
                color: "#d1d1ff",
              },
              ticks: {
                fontColor: "#d1d1ff",
              },
            },
          ],
        },
      }
    });
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

}
