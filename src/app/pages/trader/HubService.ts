import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
export class HubService implements OnInit
{
    private url = 'http://localhost:3000/tradersHub';
  private socket;
  constructor() { 
    this.socket = io(this.url);
    
  }

  ngOnInit() {
}

public getMessages = () => {
  return Observable.create((observer) => {
      this.socket.on('trader', (message) => {
          let trynext = {data:'trader',message:message}
          observer.next(trynext);
      });
  });
}
}