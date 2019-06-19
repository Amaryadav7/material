import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
declare type MessageCallback = (payload: any) => void;
export declare class SharedeventService {
    private handler;
    eventNames: {
        USERDETAILSNEEDED: string;
    };
    constructor();
    broadcast(type: string, payload: any): void;
    subscribe(type: string, callback: MessageCallback): Subscription;
}
export {};
