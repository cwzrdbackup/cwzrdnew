import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
export class TraderVService implements OnInit
{
    private url = 'https://streamer.cryptocompare.com/';
    // private subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD', '11~BTC', '11~ETH'];
  private socket;
  constructor() { 
   this.socket = io(this.url);
    
  }

  ngOnInit() {
}
public setSubscription=(sub)=>{
  this.socket.emit('SubAdd', { subs: sub });
}
public removeSubscription=(sub)=>{
    this.socket.emit('SubRemove', { subs: sub });
  }

public getMessages = () => {
  return Observable.create((observer) => {
      this.socket.on('m', (message) => {
          let trynext = {data:'m',message:message}
          observer.next(trynext);
      });
  });
}
}