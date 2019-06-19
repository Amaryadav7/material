import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ SharedeventService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedeventService_Factory() { return new SharedeventService(); }, token: SharedeventService, providedIn: "root" });
    return SharedeventService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedeventComponent = /** @class */ (function () {
    function SharedeventComponent() {
    }
    /**
     * @return {?}
     */
    SharedeventComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SharedeventComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sharedevent',
                    template: "\n    <p>\n      sharedevent works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SharedeventComponent.ctorParameters = function () { return []; };
    return SharedeventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedeventModule = /** @class */ (function () {
    function SharedeventModule() {
    }
    SharedeventModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SharedeventComponent],
                    imports: [],
                    exports: [SharedeventComponent]
                },] }
    ];
    return SharedeventModule;
}());

export { SharedeventComponent, SharedeventModule, SharedeventService };
//# sourceMappingURL=sharedevent.js.map
