/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SharedeventService } from 'sharedevent';
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
export { Valuefy1Component };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Valuefy1Component.prototype.sharedeventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVmeTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmFsdWVmeTEvIiwic291cmNlcyI6WyJsaWIvdmFsdWVmeTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRDtJQVdFLDJCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7Ozs7SUFFL0Qsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGlCQUFpQjs7OztRQUFFLFVBQUMsT0FBTztZQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdEQUlUO2lCQUVGOzs7O2dCQVRRLGtCQUFrQjs7SUFvQjNCLHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FWWSxpQkFBaUI7Ozs7OztJQUVoQiwrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkZXZlbnRTZXJ2aWNlIH0gZnJvbSAnc2hhcmVkZXZlbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXZhbHVlZnkxJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHZhbHVlZnkxIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWYWx1ZWZ5MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZWRldmVudFNlcnZpY2U6IFNoYXJlZGV2ZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaGFyZWRldmVudFNlcnZpY2Uuc3Vic2NyaWJlKHRoaXMuc2hhcmVkZXZlbnRTZXJ2aWNlLmV2ZW50TmFtZXMuVVNFUkRFVEFJTFNORUVERUQsIChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=