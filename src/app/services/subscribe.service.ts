
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  //mailChimpEndpoint = 'https://telus.us3.list-manage.com/subscribe/post-json?u=b736eb9e9077236cbd681a53b&id=4b66a82360';
  mailChimpEndpoint = 'https://cryptowzrd.us20.list-manage.com/subscribe/post?u=1358406b41421ca8616efb98b&amp;id=7eafccf5af';
  constructor(
    private http: HttpClient
  ) { }
  subscribeToList(email) {
    const params = new HttpParams()
      .set('EMAIL', email);
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    console.log(mailChimpUrl);
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}