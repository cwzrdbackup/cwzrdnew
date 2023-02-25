import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class WindowService {

  get windowRef() {
    return window;
  }
}
