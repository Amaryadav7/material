import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'sharedservice';
import { SharedeventService } from 'sharedevent';
@Component({
  selector: 'lib-valuefy',
  template: `
  <lib-valuefy1></lib-valuefy1>
  `
  ,
  styles: []
})
export class ValuefyComponent implements OnInit {

  constructor(private sharedserviceService: SharedserviceService, private sharedeventService: SharedeventService) { }

  ngOnInit() {
    const self = this;
    this.sharedserviceService.getData();
    this.sharedeventService.broadcast(this.sharedeventService.eventNames.USERDETAILSNEEDED, { userDetails: 'userdata' });
  }

}
