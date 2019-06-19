import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedeventService {
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
/** @nocollapse */ SharedeventService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedeventService_Factory() { return new SharedeventService(); }, token: SharedeventService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedeventComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SharedeventComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sharedevent',
                template: `
    <p>
      sharedevent works!
    </p>
  `
            }] }
];
/** @nocollapse */
SharedeventComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedeventModule {
}
SharedeventModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SharedeventComponent],
                imports: [],
                exports: [SharedeventComponent]
            },] }
];

export { SharedeventComponent, SharedeventModule, SharedeventService };
//# sourceMappingURL=sharedevent.js.map
