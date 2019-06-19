import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedserviceService = /** @class */ (function () {
    function SharedserviceService() {
    }
    /**
     * @return {?}
     */
    SharedserviceService.prototype.getData = /**
     * @return {?}
     */
    function () {
        alert('service data');
    };
    SharedserviceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SharedserviceService.ctorParameters = function () { return []; };
    /** @nocollapse */ SharedserviceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SharedserviceService_Factory() { return new SharedserviceService(); }, token: SharedserviceService, providedIn: "root" });
    return SharedserviceService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedserviceComponent = /** @class */ (function () {
    function SharedserviceComponent() {
    }
    /**
     * @return {?}
     */
    SharedserviceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SharedserviceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sharedservice',
                    template: "\n    <p>\n      sharedservice works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SharedserviceComponent.ctorParameters = function () { return []; };
    return SharedserviceComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedserviceModule = /** @class */ (function () {
    function SharedserviceModule() {
    }
    SharedserviceModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SharedserviceComponent],
                    imports: [],
                    exports: [SharedserviceComponent]
                },] }
    ];
    return SharedserviceModule;
}());

export { SharedserviceComponent, SharedserviceModule, SharedserviceService };
//# sourceMappingURL=sharedservice.js.map
