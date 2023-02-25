import { Component, OnInit } from '@angular/core';

import { HubService } from './HubService';

export class Subscriber implements OnInit {
    constructor(private hubService: HubService) {

        this.hubService.getMessages().subscribe((message: any) => {
            console.log(message);
        });

     }
    ngOnInit(): void {}
}