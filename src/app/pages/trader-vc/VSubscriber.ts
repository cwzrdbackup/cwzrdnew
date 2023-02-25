import { Component, OnInit } from '@angular/core';

import { VHubService } from './VHubService';

export class VSubscriber implements OnInit {
    constructor(private hubService: VHubService) {

        this.hubService.getMessages().subscribe((message: any) => {
            console.log(message);
        });

     }
    ngOnInit(): void {}
}