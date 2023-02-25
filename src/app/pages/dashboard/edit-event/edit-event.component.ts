import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  @Input() date: Date;
  @Input() event;
  todayDate = new Date();
  canEdit = false;
  editdate;
  constructor(private ref: NbDialogRef<any>) { }

  ngOnInit() {
    this.editdate = new Date(this.date);
    const eventDate = new Date(this.date);
    if (eventDate.getDate() >= this.todayDate.getDate() &&
      eventDate.getMonth() >= this.todayDate.getMonth() &&
      eventDate.getFullYear() >= this.todayDate.getFullYear()) {
      this.canEdit = true;
    } else {
      this.canEdit = false;
    }
    console.log('Date', this.date, this.canEdit);
  }
  save() {
    this.ref.close({
      type: 'save',
      date: this.editdate,
      event: this.event
    });
  }

  delete() {
    this.ref.close({
      type: 'delete'
    });
  }
}
