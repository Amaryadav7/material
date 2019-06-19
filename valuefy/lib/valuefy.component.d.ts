import { OnInit } from '@angular/core';
import { SharedserviceService } from 'sharedservice';
import { SharedeventService } from 'sharedevent';
export declare class ValuefyComponent implements OnInit {
    private sharedserviceService;
    private sharedeventService;
    constructor(sharedserviceService: SharedserviceService, sharedeventService: SharedeventService);
    ngOnInit(): void;
}
