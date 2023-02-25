
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rank-up-animation',
  templateUrl: './rank-up-animation.component.html',
  styleUrls: ['./rank-up-animation.component.scss']
})
export class RankUpAnimationComponent implements OnInit {
  @Input() rankName = '';
  @Output() closeRankUp = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {

  }
}
