import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { SharedeventService, SharedeventModule } from 'sharedevent';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Valuefy1Service {
    constructor() { }
}
Valuefy1Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Valuefy1Service.ctorParameters = () => [];
/** @nocollapse */ Valuefy1Service.ngInjectableDef = ɵɵdefineInjectable({ factory: function Valuefy1Service_Factory() { return new Valuefy1Service(); }, token: Valuefy1Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Valuefy1Component {
    /**
     * @param {?} sharedeventService
     */
    constructor(sharedeventService) {
        this.sharedeventService = sharedeventService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sharedeventService.subscribe(this.sharedeventService.eventNames.USERDETAILSNEEDED, (/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            console.log(payload);
        }));
    }
}
Valuefy1Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-valuefy1',
                template: `
    <p>
      valuefy1 works!
    </p>
  `
            }] }
];
/** @nocollapse */
Valuefy1Component.ctorParameters = () => [
    { type: SharedeventService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Valuefy1Module {
}
Valuefy1Module.decorators = [
    { type: NgModule, args: [{
                declarations: [Valuefy1Component],
                imports: [SharedeventModule
                ],
                exports: [Valuefy1Component]
            },] }
];

export { Valuefy1Component, Valuefy1Module, Valuefy1Service };
//# sourceMappingURL=valuefy1.js.map
