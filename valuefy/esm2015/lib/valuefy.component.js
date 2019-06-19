/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SharedserviceService } from 'sharedservice';
import { SharedeventService } from 'sharedevent';
export class ValuefyComponent {
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
        /** @type {?} */
        const self = this;
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValuefyComponent.prototype.sharedserviceService;
    /**
     * @type {?}
     * @private
     */
    ValuefyComponent.prototype.sharedeventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92YWx1ZWZ5LyIsInNvdXJjZXMiOlsibGliL3ZhbHVlZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXakQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFBb0Isb0JBQTBDLEVBQVUsa0JBQXNDO1FBQTFGLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQzs7OztJQUVuSCxRQUFROztjQUNBLElBQUksR0FBRyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2SCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDthQUdGOzs7O1lBWFEsb0JBQW9CO1lBQ3BCLGtCQUFrQjs7Ozs7OztJQWFiLGdEQUFrRDs7Ozs7SUFBRSw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkc2VydmljZVNlcnZpY2UgfSBmcm9tICdzaGFyZWRzZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZGV2ZW50U2VydmljZSB9IGZyb20gJ3NoYXJlZGV2ZW50JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi12YWx1ZWZ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHZhbHVlZnkgd29ya3MhXG4gICAgPC9wPlxuICBgXG4gICxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWYWx1ZWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZHNlcnZpY2VTZXJ2aWNlOiBTaGFyZWRzZXJ2aWNlU2VydmljZSwgcHJpdmF0ZSBzaGFyZWRldmVudFNlcnZpY2U6IFNoYXJlZGV2ZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zaGFyZWRzZXJ2aWNlU2VydmljZS5nZXREYXRhKCk7XG4gICAgdGhpcy5zaGFyZWRldmVudFNlcnZpY2UuYnJvYWRjYXN0KHRoaXMuc2hhcmVkZXZlbnRTZXJ2aWNlLmV2ZW50TmFtZXMuVVNFUkRFVEFJTFNORUVERUQsIHsgdXNlckRldGFpbHM6ICd1c2VyZGF0YScgfSk7XG4gIH1cblxufVxuIl19