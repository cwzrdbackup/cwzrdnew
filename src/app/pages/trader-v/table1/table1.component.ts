import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
	    
  data1: any[] = [];
  
    ngOnInit() {      
    //   this.setOption(this.data1);
    //   setInterval(() => {      
  	//   this.data1 = this.randomData(1000, this.data1, false, 1);
    //   }, 200);
    }

    randomData(x, data: any[], isNew: boolean, val: number): any[] {
      for (let i = 0; i < val; i++) {
        isNew ? '' : data.shift();
        data.push((Math.random() * x + 100 * (Math.round(Math.random()) * 2 - 1
  ) + 7800).toFixed(2));
      }
      return data;
    }      

    change(e) {
  	this.data1 = this.randomData(1000, [], true, 12);
    }
  
  constructor() { }
setOption(data1) {}

}
