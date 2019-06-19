(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sharedservice', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.sharedservice = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SharedserviceService.ctorParameters = function () { return []; };
        /** @nocollapse */ SharedserviceService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SharedserviceService_Factory() { return new SharedserviceService(); }, token: SharedserviceService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [SharedserviceComponent],
                        imports: [],
                        exports: [SharedserviceComponent]
                    },] }
        ];
        return SharedserviceModule;
    }());

    exports.SharedserviceComponent = SharedserviceComponent;
    exports.SharedserviceModule = SharedserviceModule;
    exports.SharedserviceService = SharedserviceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sharedservice.umd.js.map
