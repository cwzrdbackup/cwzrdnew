import { Component,Input, OnChanges,SimpleChanges} from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
  selector: 'app-custom-day-cell',
  templateUrl: './custom-day-cell.component.html',
  styleUrls: ['./custom-day-cell.component.scss'],
  host: { '(click)': 'onClick()', 'class': 'day-cell' }
})
export class CustomDayCellComponent extends NbCalendarDayCellComponent<Date> {

  static dates: any[] = [];

  parseDate(date: Date) {
    return CustomDayCellComponent.checkDate(date);
  }
  
  static checkDate(date: Date) {
    let index = this.dates.findIndex(d => d.toDateString() === date.toDateString());
    
    if (index >= 0) {
      return {
        day: date.getDate(),
        event: true
      }
    } else {
      return {
        day: date.getDate(),
        event: false
      };
    }

  }

  ngOnInit(): void {
  }

  static setDates(dates: any[]) {
    // console.log("CUSTOM COPM: ", dates);
    // this.dates.push(...dates);
    this.dates = [];
    this.dates = dates;
  }
}
