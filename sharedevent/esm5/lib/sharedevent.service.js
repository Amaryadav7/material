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
var SharedeventService = /** @class */ (function () {
    function SharedeventService() {
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
    SharedeventService.prototype.broadcast = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        this.handler.next({ type: type, payload: payload });
    };
    /**
     * @param {?} type
     * @param {?} callback
     * @return {?}
     */
    SharedeventService.prototype.subscribe = /**
     * @param {?} type
     * @param {?} callback
     * @return {?}
     */
    function (type, callback) {
        return this.handler
            .filter((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return message.type === type; }))
            .map((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return message.payload; }))
            .subscribe(callback);
    };
    SharedeventService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SharedeventService.ctorParameters = function () { return []; };
    /** @nocollapse */ SharedeventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SharedeventService_Factory() { return new SharedeventService(); }, token: SharedeventService, providedIn: "root" });
    return SharedeventService;
}());
export { SharedeventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SharedeventService.prototype.handler;
    /** @type {?} */
    SharedeventService.prototype.eventNames;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZGV2ZW50LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZGV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sdUJBQXVCLENBQUM7Ozs7O0FBQy9CLHNCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYTs7QUFJZjtJQVdFO1FBTFEsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsZUFBVSxHQUFHO1lBQ2xCLGlCQUFpQixFQUFFLG1CQUFtQjtTQUN2QyxDQUFDO0lBR0YsQ0FBQzs7Ozs7O0lBRUQsc0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsT0FBWTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCxzQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxRQUF5QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2hCLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFyQixDQUFxQixFQUFDO2FBQ3hDLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxFQUFDO2FBQy9CLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkJBYkQ7Q0FvQ0MsQUF6QkQsSUF5QkM7U0F0Qlksa0JBQWtCOzs7Ozs7SUFHN0IscUNBQXlDOztJQUN6Qyx3Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbn1cbnR5cGUgTWVzc2FnZUNhbGxiYWNrID0gKHBheWxvYWQ6IGFueSkgPT4gdm9pZDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkZXZlbnRTZXJ2aWNlIHtcblxuXG4gIHByaXZhdGUgaGFuZGxlciA9IG5ldyBTdWJqZWN0PE1lc3NhZ2U+KCk7XG4gIHB1YmxpYyBldmVudE5hbWVzID0ge1xuICAgIFVTRVJERVRBSUxTTkVFREVEOiAnVVNFUkRFVEFJTFNORUVERUQnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBicm9hZGNhc3QodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZXIubmV4dCh7IHR5cGUsIHBheWxvYWQgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUodHlwZTogc3RyaW5nLCBjYWxsYmFjazogTWVzc2FnZUNhbGxiYWNrKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyXG4gICAgICAuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZS50eXBlID09PSB0eXBlKVxuICAgICAgLm1hcChtZXNzYWdlID0+IG1lc3NhZ2UucGF5bG9hZClcbiAgICAgIC5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cblxuXG5cbiJdfQ==