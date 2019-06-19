import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { SharedserviceService, SharedserviceModule } from 'sharedservice';
import { SharedeventService, SharedeventModule } from 'sharedevent';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValuefyService {
    constructor() { }
}
ValuefyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValuefyService.ctorParameters = () => [];
/** @nocollapse */ ValuefyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValuefyService_Factory() { return new ValuefyService(); }, token: ValuefyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValuefyComponent {
    /**
     * @param {?} sharedserviceService
     * @param {?} sharedeventService
     */
    constructor(sharedserviceService, sharedeventService) {
        this.sharedserviceService = sharedserviceService;
        this.sharedeventService = sharedeventService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sharedserviceService.getData();
        this.sharedeventService.broadcast(this.sharedeventService.eventNames.USERDETAILSNEEDED, { userDetails: 'userdata' });
    }
}
ValuefyComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-valuefy',
                template: `
    <p>
      valuefy works!
    </p>
  `
            }] }
];
/** @nocollapse */
ValuefyComponent.ctorParameters = () => [
    { type: SharedserviceService },
    { type: SharedeventService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-components',
                template: "<p>\n  components works!\n\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: "<button [disabled]=\"disabled\">{{text}}</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    text: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [];
class FirstmoduleRoutingModule {
}
FirstmoduleRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FirstmoduleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$1 = [];
class SecondmoduleRoutingModule {
}
SecondmoduleRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SecondmoduleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$2 = [
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
class LibRoutingModule {
}
LibRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$2)],
                exports: [RouterModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValuefyModule {
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

export { ValuefyComponent, ValuefyModule, ValuefyService, ComponentsComponent as ɵa, ButtonComponent as ɵb, FirstModule as ɵc, SecondModule as ɵd, LibRoutingModule as ɵe, FirstmoduleModule as ɵf, FirstmoduleRoutingModule as ɵg, SecondmoduleModule as ɵh, SecondmoduleRoutingModule as ɵi };
//# sourceMappingURL=valuefy.js.map
