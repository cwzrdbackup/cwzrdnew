import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart9',
  templateUrl: './chart9.component.html',
  styleUrls: ['./chart9.component.scss']
})
export class Chart9Component implements OnInit {
  colors:any=['#ff3333','#26b3fa','#5eff32','#fffc33','#9f79f2','#740c82','#f55105']
  chart: any;
  loading:any=true;
  constructor() { }
  getUniqueDays = data => {
    var flags = [], output = [], l = data.length, i;
    for (i = 0; i < l; i++) {
      if (flags[data[i].dateChange]) continue;
      flags[data[i].dateChange] = true;
      output.push(data[i].dateChange);
    }

    return output;
  }
  getUniqueCoin = data => {
    var flags = [], output = [], l = data.length, i;
    for (i = 0; i < l; i++) {
      if (flags[data[i].coinName]) continue;
      if(data[i].coinName)
      {
        flags[data[i].coinName] = true;
        output.push(data[i].coinName);
      }
      
    }

    return output;
  }
  setData=data=>{
    let uniqueDays = this.getUniqueDays(data);
    let uniqueCoins = this.getUniqueCoin(data);
    let dataset = [];
    //data.map(x=>{return{...x, changePercent:(x.changePercent==null?0:x.changePercent)}})
    let counter=0;
    
    

        uniqueCoins.map(r=>{
          let cData=[];
          uniqueDays.map(p=>{
            let coin = data.filter(x=>x.coinName==r && x.dateChange==p)[0];
            if(coin)
            cData.push(coin.changePercent);
            else
            cData.push(0);
          })
          
          
          
          dataset.push({
            label: r,
            data: cData,
            borderColor: this.colors[counter],
            backgroundColor: this.colors[counter],
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 5,
          });
          
          counter=counter+1;
        })

    

    console.log(dataset);
    this.setOptions(uniqueDays, dataset);
    // console.log(uniqueCoins);
        this.loading=false;
    //this.data=data;
  }
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
  setOptions=(labels, dataset)=>{
    this.chart = new Chart('canvas', {
      type: 'line',
      grid: {
        top: -50,
        left: -50,
        right: -50,
		bottom: -50,
      },
      data: {
        labels: labels,
        datasets: dataset,
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
  ngAfterContentInit(): void {
    
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

}
