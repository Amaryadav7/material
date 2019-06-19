/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Message() { }
if (false) {
    /** @type {?} */
    Message.prototype.type;
    /** @type {?} */
    Message.prototype.payload;
}
export class SharedeventService {
    constructor() {
        this.handler = new Subject();
        this.eventNames = {
            USERDETAILSNEEDED: 'USERDETAILSNEEDED'
        };
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    broadcast(type, payload) {
        this.handler.next({ type, payload });
    }
    /**
     * @param {?} type
     * @param {?} callback
     * @return {?}
     */
    subscribe(type, callback) {
        return this.handler
            .filter((/**
         * @param {?} message
         * @return {?}
         */
        message => message.type === type))
            .map((/**
         * @param {?} message
         * @return {?}
         */
        message => message.payload))
            .subscribe(callback);
    }
}
SharedeventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SharedeventService.ctorParameters = () => [];
/** @nocollapse */ SharedeventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SharedeventService_Factory() { return new SharedeventService(); }, token: SharedeventService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SharedeventService.prototype.handler;
    /** @type {?} */
    SharedeventService.prototype.eventNames;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZGV2ZW50LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZGV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sdUJBQXVCLENBQUM7Ozs7O0FBQy9CLHNCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYTs7QUFPZixNQUFNLE9BQU8sa0JBQWtCO0lBUTdCO1FBTFEsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsZUFBVSxHQUFHO1lBQ2xCLGlCQUFpQixFQUFFLG1CQUFtQjtTQUN2QyxDQUFDO0lBR0YsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxPQUFZO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxRQUF5QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2hCLE1BQU07Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDO2FBQ3hDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUM7YUFDL0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFJQyxxQ0FBeUM7O0lBQ3pDLHdDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xufVxudHlwZSBNZXNzYWdlQ2FsbGJhY2sgPSAocGF5bG9hZDogYW55KSA9PiB2b2lkO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRldmVudFNlcnZpY2Uge1xuXG5cbiAgcHJpdmF0ZSBoYW5kbGVyID0gbmV3IFN1YmplY3Q8TWVzc2FnZT4oKTtcbiAgcHVibGljIGV2ZW50TmFtZXMgPSB7XG4gICAgVVNFUkRFVEFJTFNORUVERUQ6ICdVU0VSREVUQUlMU05FRURFRCdcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGJyb2FkY2FzdCh0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlci5uZXh0KHsgdHlwZSwgcGF5bG9hZCB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZSh0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBNZXNzYWdlQ2FsbGJhY2spOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJcbiAgICAgIC5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLnR5cGUgPT09IHR5cGUpXG4gICAgICAubWFwKG1lc3NhZ2UgPT4gbWVzc2FnZS5wYXlsb2FkKVxuICAgICAgLnN1YnNjcmliZShjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuXG5cblxuIl19