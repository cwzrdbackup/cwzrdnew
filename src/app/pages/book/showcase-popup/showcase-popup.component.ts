import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {Configuration} from '../../dataservice/app.constant.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-showcase-popup',
  templateUrl: './showcase-popup.component.html',
  styleUrls: ['./showcase-popup.component.scss']
})

export class ShowcasePopupComponent implements OnInit {
  @Input() title;
  @Input() images;
  @Output() someEvent = new EventEmitter<string>();
  baseURL:string;
  constructor(private ref: NbDialogRef<any>,private _configuration: Configuration) { }
  callParent() {
    this.someEvent.emit('testChild');
    //this.someEvent.next('testChild');
  }
  ngOnInit() {
    this.baseURL=this._configuration.Server;
  }
  close=()=>{
    this.ref.close('test');
  }

}
