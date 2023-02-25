import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-chart9',
  templateUrl: './chart9.component.html',
  styleUrls: ['./chart9.component.scss']
})
export class Chart9Component implements OnInit {

  myChart: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  
  this.myChart = new Chart('myChart', {  
          type: 'line',  
          data: {  
        	labels: ['January', 'February', 'March', 'April', 'May', 'June'],  
            datasets: [  
              {  
                data: [0, 6, -5.5, 6.5, 4, 6],
                borderColor: '#3cba9f',  
                backgroundColor: [  
                  "#3cb371",
                  "#0000FF",
                  "#9966FF",
                  "#4C4CFF",
                  "#00FFFF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#FF00FF",
                  "#FF00FF",
                  "#FF00FF",
                ],  
                fill: true  
              }  
            ]  
          },  
          options: {  
            legend: {  
              display: false  
            },  
            scales: {  
              xAxes: [{  
                display: true  
              }],  
              yAxes: [{  
                display: true  
              }],  
            }  
          }  
        });
		}

  private random() {
    return Math.round(Math.random() * 100);
  }

}
