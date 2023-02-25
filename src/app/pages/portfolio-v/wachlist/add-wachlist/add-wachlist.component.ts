import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-wachlist',
  templateUrl: './add-wachlist.component.html',
  styleUrls: ['./add-wachlist.component.scss']
})
export class AddWachlistComponent implements OnInit {

  constructor(private ref: NbDialogRef<AddWachlistComponent>) { }

  ngOnInit() {
  }

  add() {
    this.ref.close();
  }
}
