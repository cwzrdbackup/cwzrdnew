import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class settingsComponent implements OnInit {

  loading: boolean = true;

  constructor(private zone: NgZone) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
  }

}
