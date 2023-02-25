import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnInit {
  @Input() imgSrc: string = null;
  isLoading: boolean = true;
  constructor(protected ref: NbDialogRef<PreviewImageComponent>) { }

  ngOnInit() {
  	
  }

  loadingComplete() {
    this.isLoading = false;
  }

  closeModal() {
  this.ref.close()
  }
}
