import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  minDate = new Date();
  eventForm = new FormGroup({
    date: new FormControl('', Validators.required),
    event: new FormControl('', Validators.required),
  });
  constructor(private ref: NbDialogRef<any>) { }

  ngOnInit() {
  }

  add() {
    this.ref.close(this.eventForm.value);
  }

  reset() {
    this.eventForm.reset();
    this.ref.close();
  }

}
