import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedserviceService {
    constructor() { }
    /**
     * @return {?}
     */
    getData() {
        alert('service data');
    }
}
SharedserviceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SharedserviceService.ctorParameters = () => [];
/** @nocollapse */ SharedserviceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedserviceService_Factory() { return new SharedserviceService(); }, token: SharedserviceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedserviceComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SharedserviceComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sharedservice',
                template: `
    <p>
      sharedservice works!
    </p>
  `
            }] }
];
/** @nocollapse */
SharedserviceComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedserviceModule {
}
SharedserviceModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SharedserviceComponent],
                imports: [],
                exports: [SharedserviceComponent]
            },] }
];

export { SharedserviceComponent, SharedserviceModule, SharedserviceService };
//# sourceMappingURL=sharedservice.js.map
