(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/map')) :
    typeof define === 'function' && define.amd ? define('sharedevent', ['exports', '@angular/core', 'rxjs', 'rxjs/add/operator/filter', 'rxjs/add/operator/map'], factory) :
    (global = global || self, factory(global.sharedevent = {}, global.ng.core, global.rxjs));
}(this, function (exports, core, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedeventService = /** @class */ (function () {
        function SharedeventService() {
            this.handler = new rxjs.Subject();
            this.eventNames = {
                USERDETAILSNEEDED: 'USERDETAILSNEEDED'
            };
        }
        /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        SharedeventService.prototype.broadcast = /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        function (type, payload) {
            this.handler.next({ type: type, payload: payload });
        };
        /**
         * @param {?} type
         * @param {?} callback
         * @return {?}
         */
        SharedeventService.prototype.subscribe = /**
         * @param {?} type
         * @param {?} callback
         * @return {?}
         */
        function (type, callback) {
            return this.handler
                .filter((/**
             * @param {?} message
             * @return {?}
             */
            function (message) { return message.type === type; }))
                .map((/**
             * @param {?} message
             * @return {?}
             */
            function (message) { return message.payload; }))
                .subscribe(callback);
        };
        SharedeventService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SharedeventService.ctorParameters = function () { return []; };
        /** @nocollapse */ SharedeventService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SharedeventService_Factory() { return new SharedeventService(); }, token: SharedeventService, providedIn: "root" });
        return SharedeventService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedeventComponent = /** @class */ (function () {
        function SharedeventComponent() {
        }
        /**
         * @return {?}
         */
        SharedeventComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SharedeventComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-sharedevent',
                        template: "\n    <p>\n      sharedevent works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SharedeventComponent.ctorParameters = function () { return []; };
        return SharedeventComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedeventModule = /** @class */ (function () {
        function SharedeventModule() {
        }
        SharedeventModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SharedeventComponent],
                        imports: [],
                        exports: [SharedeventComponent]
                    },] }
        ];
        return SharedeventModule;
    }());

    exports.SharedeventComponent = SharedeventComponent;
    exports.SharedeventModule = SharedeventModule;
    exports.SharedeventService = SharedeventService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sharedevent.umd.js.map
