(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('sharedevent')) :
    typeof define === 'function' && define.amd ? define('valuefy1', ['exports', '@angular/core', 'sharedevent'], factory) :
    (global = global || self, factory(global.valuefy1 = {}, global.ng.core, global.sharedevent));
}(this, function (exports, core, sharedevent) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Valuefy1Service = /** @class */ (function () {
        function Valuefy1Service() {
        }
        Valuefy1Service.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Valuefy1Service.ctorParameters = function () { return []; };
        /** @nocollapse */ Valuefy1Service.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Valuefy1Service_Factory() { return new Valuefy1Service(); }, token: Valuefy1Service, providedIn: "root" });
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
            { type: core.Component, args: [{
                        selector: 'lib-valuefy1',
                        template: "\n    <p>\n      valuefy1 works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        Valuefy1Component.ctorParameters = function () { return [
            { type: sharedevent.SharedeventService }
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
            { type: core.NgModule, args: [{
                        declarations: [Valuefy1Component],
                        imports: [sharedevent.SharedeventModule
                        ],
                        exports: [Valuefy1Component]
                    },] }
        ];
        return Valuefy1Module;
    }());

    exports.Valuefy1Component = Valuefy1Component;
    exports.Valuefy1Module = Valuefy1Module;
    exports.Valuefy1Service = Valuefy1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=valuefy1.umd.js.map
