import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
// tslint:disable-next-line: max-line-length
    { url: 'https://api.soundcloud.com/tracks/381376454/stream?client_id=b23455855ab96a4556cbd0a98397ae8c', 
      name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    {
// tslint:disable-next-line: max-line-length
      url: 'https://api.soundcloud.com/tracks/328761310/stream?client_id=b23455855ab96a4556cbd0a98397ae8c',
      name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    },
    { url: 'https://api.soundcloud.com/tracks/320540527/stream?client_id=b23455855ab96a4556cbd0a98397ae8c',
      name: 'Penny Lane',
      artist: 'The Beatles'
    }
  ];

  getFiles() {
   return of(this.files);
  }
}