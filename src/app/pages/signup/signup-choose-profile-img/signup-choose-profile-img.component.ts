import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-signup-choose-profile-img',
  templateUrl: './signup-choose-profile-img.component.html',
  styleUrls: ['./signup-choose-profile-img.component.scss']
})
export class SignupChooseProfileImgComponent implements OnInit {

  images = [    
	"/assets/Avatars/4.png",
	"/assets/Avatars/8.png",
	"/assets/Avatars/15.png",
	"/assets/Avatars/16.png",
  ]

  @Input() selected = "";

  constructor(private ref: NbDialogRef<any>) { }

  ngOnInit() {
    
  }

  apply() {
    this.ref.close(this.selected);
  }


}
