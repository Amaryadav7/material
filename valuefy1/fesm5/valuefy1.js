import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { SharedeventService, SharedeventModule } from 'sharedevent';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Valuefy1Service = /** @class */ (function () {
    function Valuefy1Service() {
    }
    Valuefy1Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Valuefy1Service.ctorParameters = function () { return []; };
    /** @nocollapse */ Valuefy1Service.ngInjectableDef = ɵɵdefineInjectable({ factory: function Valuefy1Service_Factory() { return new Valuefy1Service(); }, token: Valuefy1Service, providedIn: "root" });
    return Valuefy1Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Valuefy1Component = /** @class */ (function () {
    function Valuefy1Component(sharedeventService) {
        this.sharedeventService = sharedeventService;
    }
    /**
     * @return {?}
     */
    Valuefy1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.sharedeventService.subscribe(this.sharedeventService.eventNames.USERDETAILSNEEDED, (/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            console.log(payload);
        }));
    };
    Valuefy1Component.decorators = [
        { type: Component, args: [{
                    selector: 'lib-valuefy1',
                    template: "\n    <p>\n      valuefy1 works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    Valuefy1Component.ctorParameters = function () { return [
        { type: SharedeventService }
    ]; };
    return Valuefy1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Valuefy1Module = /** @class */ (function () {
    function Valuefy1Module() {
    }
    Valuefy1Module.decorators = [
        { type: NgModule, args: [{
                    declarations: [Valuefy1Component],
                    imports: [SharedeventModule
                    ],
                    exports: [Valuefy1Component]
                },] }
    ];
    return Valuefy1Module;
}());

export { Valuefy1Component, Valuefy1Module, Valuefy1Service };
//# sourceMappingURL=valuefy1.js.map
