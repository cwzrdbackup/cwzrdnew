import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.scss']
})
export class AddBalanceComponent implements OnInit {

  
  constructor(private ref: NbDialogRef<any>) { }

  ngOnInit() {
  }

  add(value) {
    this.ref.close(value)
  }

}
