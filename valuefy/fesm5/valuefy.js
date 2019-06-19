import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';
import { SharedserviceService, SharedserviceModule } from 'sharedservice';
import { SharedeventService, SharedeventModule } from 'sharedevent';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValuefyService = /** @class */ (function () {
    function ValuefyService() {
    }
    ValuefyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValuefyService.ctorParameters = function () { return []; };
    /** @nocollapse */ ValuefyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValuefyService_Factory() { return new ValuefyService(); }, token: ValuefyService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'lib-valuefy',
                    template: "\n    <p>\n      valuefy works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ValuefyComponent.ctorParameters = function () { return [
        { type: SharedserviceService },
        { type: SharedeventService }
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
        { type: Component, args: [{
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
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "<button [disabled]=\"disabled\">{{text}}</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        text: [{ type: Input }],
        disabled: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
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
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
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
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
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
        { type: NgModule, args: [{
                    declarations: [ValuefyComponent, ComponentsComponent, ButtonComponent],
                    imports: [
                        LibRoutingModule, FirstmoduleModule, SecondmoduleModule, SharedserviceModule, SharedeventModule
                    ],
                    exports: [ValuefyComponent, ComponentsComponent, ButtonComponent]
                },] }
    ];
    return ValuefyModule;
}());

export { ValuefyComponent, ValuefyModule, ValuefyService, ComponentsComponent as ɵa, ButtonComponent as ɵb, FirstModule as ɵc, SecondModule as ɵd, LibRoutingModule as ɵe, FirstmoduleModule as ɵf, FirstmoduleRoutingModule as ɵg, SecondmoduleModule as ɵh, SecondmoduleRoutingModule as ɵi };
//# sourceMappingURL=valuefy.js.map
