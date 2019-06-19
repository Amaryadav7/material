/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SharedeventService } from 'sharedevent';
export class Valuefy1Component {
    /**
     * @param {?} sharedeventService
     */
    constructor(sharedeventService) {
        this.sharedeventService = sharedeventService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sharedeventService.subscribe(this.sharedeventService.eventNames.USERDETAILSNEEDED, (/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            console.log(payload);
        }));
    }
}
Valuefy1Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-valuefy1',
                template: `
    <p>
      valuefy1 works!
    </p>
  `
            }] }
];
/** @nocollapse */
Valuefy1Component.ctorParameters = () => [
    { type: SharedeventService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    Valuefy1Component.prototype.sharedeventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVmeTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmFsdWVmeTEvIiwic291cmNlcyI6WyJsaWIvdmFsdWVmeTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVVqRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQzs7OztJQUUvRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGlCQUFpQjs7OztRQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7OztHQUlUO2FBRUY7Ozs7WUFUUSxrQkFBa0I7Ozs7Ozs7SUFZYiwrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkZXZlbnRTZXJ2aWNlIH0gZnJvbSAnc2hhcmVkZXZlbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXZhbHVlZnkxJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHZhbHVlZnkxIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWYWx1ZWZ5MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZWRldmVudFNlcnZpY2U6IFNoYXJlZGV2ZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaGFyZWRldmVudFNlcnZpY2Uuc3Vic2NyaWJlKHRoaXMuc2hhcmVkZXZlbnRTZXJ2aWNlLmV2ZW50TmFtZXMuVVNFUkRFVEFJTFNORUVERUQsIChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=