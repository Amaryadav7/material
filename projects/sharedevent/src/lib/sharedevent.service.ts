import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
interface Message {
  type: string;
  payload: any;
}
type MessageCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class SharedeventService {


  private handler = new Subject<Message>();
  public eventNames = {
    USERDETAILSNEEDED: 'USERDETAILSNEEDED'
  };

  constructor() {
  }

  broadcast(type: string, payload: any) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler
      .filter(message => message.type === type)
      .map(message => message.payload)
      .subscribe(callback);
  }

}






