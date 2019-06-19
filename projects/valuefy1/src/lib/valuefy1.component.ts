import { Component, OnInit } from '@angular/core';
import { SharedeventService } from 'sharedevent';
@Component({
  selector: 'lib-valuefy1',
  template: `
    <p>
      valuefy1 works!
    </p>
  `,
  styles: []
})
export class Valuefy1Component implements OnInit {

  constructor(private sharedeventService: SharedeventService) { }

  ngOnInit() {
    this.sharedeventService.subscribe(this.sharedeventService.eventNames.USERDETAILSNEEDED, (payload) => {
      console.log(payload);
    });
  }

}
