(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('sharedservice'), require('sharedevent'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('valuefy', ['exports', '@angular/core', 'sharedservice', 'sharedevent', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory(global.valuefy = {}, global.ng.core, global.sharedservice, global.sharedevent, global.ng.router, global.ng.common));
}(this, function (exports, core, sharedservice, sharedevent, router, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValuefyService = /** @class */ (function () {
        function ValuefyService() {
        }
        ValuefyService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ValuefyService.ctorParameters = function () { return []; };
        /** @nocollapse */ ValuefyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ValuefyService_Factory() { return new ValuefyService(); }, token: ValuefyService, providedIn: "root" });
        return ValuefyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValuefyComponent = /** @class */ (function () {
        function ValuefyComponent(sharedserviceService, sharedeventService) {
            this.sharedserviceService = sharedserviceService;
            this.sharedeventService = sharedeventService;
        }
        /**
         * @return {?}
         */
        ValuefyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.sharedserviceService.getData();
            this.sharedeventService.broadcast(this.sharedeventService.eventNames.USERDETAILSNEEDED, { userDetails: 'userdata' });
        };
        ValuefyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-valuefy',
                        template: "\n    <p>\n      valuefy works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ValuefyComponent.ctorParameters = function () { return [
            { type: sharedservice.SharedserviceService },
            { type: sharedevent.SharedeventService }
        ]; };
        return ValuefyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-components',
                        template: "<p>\n  components works!\n\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ComponentsComponent.ctorParameters = function () { return []; };
        return ComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-button',
                        template: "<button [disabled]=\"disabled\">{{text}}</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            text: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [];
    var FirstmoduleRoutingModule = /** @class */ (function () {
        function FirstmoduleRoutingModule() {
        }
        FirstmoduleRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return FirstmoduleRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FirstmoduleModule = /** @class */ (function () {
        function FirstmoduleModule() {
        }
        FirstmoduleModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule,
                            FirstmoduleRoutingModule
                        ]
                    },] }
        ];
        return FirstmoduleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes$1 = [];
    var SecondmoduleRoutingModule = /** @class */ (function () {
        function SecondmoduleRoutingModule() {
        }
        SecondmoduleRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return SecondmoduleRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SecondmoduleModule = /** @class */ (function () {
        function SecondmoduleModule() {
        }
        SecondmoduleModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule,
                            SecondmoduleRoutingModule
                        ]
                    },] }
        ];
        return SecondmoduleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes$2 = [
        {
            path: 'firstmodule',
            loadChildren: FirstModule
        },
        {
            path: 'secondmodule',
            loadChildren: SecondModule
        }
    ];
    /**
     * @return {?}
     */
    function FirstModule() {
        return FirstmoduleModule;
    }
    /**
     * @return {?}
     */
    function SecondModule() {
        return SecondmoduleModule;
    }
    var LibRoutingModule = /** @class */ (function () {
        function LibRoutingModule() {
        }
        LibRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$2)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return LibRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValuefyModule = /** @class */ (function () {
        function ValuefyModule() {
        }
        ValuefyModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ValuefyComponent, ComponentsComponent, ButtonComponent],
                        imports: [
                            LibRoutingModule, FirstmoduleModule, SecondmoduleModule, sharedservice.SharedserviceModule, sharedevent.SharedeventModule
                        ],
                        exports: [ValuefyComponent, ComponentsComponent, ButtonComponent]
                    },] }
        ];
        return ValuefyModule;
    }());

    exports.ValuefyComponent = ValuefyComponent;
    exports.ValuefyModule = ValuefyModule;
    exports.ValuefyService = ValuefyService;
    exports.ɵa = ComponentsComponent;
    exports.ɵb = ButtonComponent;
    exports.ɵc = FirstModule;
    exports.ɵd = SecondModule;
    exports.ɵe = LibRoutingModule;
    exports.ɵf = FirstmoduleModule;
    exports.ɵg = FirstmoduleRoutingModule;
    exports.ɵh = SecondmoduleModule;
    exports.ɵi = SecondmoduleRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=valuefy.umd.js.map
