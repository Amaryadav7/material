/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
/** @type {?} */
var routes = [
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
export function FirstModule() {
    return FirstmoduleModule;
}
/**
 * @return {?}
 */
export function SecondModule() {
    return SecondmoduleModule;
}
var LibRoutingModule = /** @class */ (function () {
    function LibRoutingModule() {
    }
    LibRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                },] }
    ];
    return LibRoutingModule;
}());
export { LibRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmFsdWVmeS8iLCJzb3VyY2VzIjpbImxpYi9saWItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQUVsRSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsV0FBVztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLFlBQVk7S0FDM0I7Q0FDRjs7OztBQUNELE1BQU0sVUFBVSxXQUFXO0lBRXpCLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQzs7OztBQUNELE1BQU0sVUFBVSxZQUFZO0lBRTFCLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUdEO0lBQUE7SUFJZ0MsQ0FBQzs7Z0JBSmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUMrQix1QkFBQztDQUFBLEFBSmpDLElBSWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJzdG1vZHVsZU1vZHVsZSB9IGZyb20gJy4vZmlyc3Rtb2R1bGUvZmlyc3Rtb2R1bGUubW9kdWxlJztcbmltcG9ydCB7IFNlY29uZG1vZHVsZU1vZHVsZSB9IGZyb20gJy4vc2Vjb25kbW9kdWxlL3NlY29uZG1vZHVsZS5tb2R1bGUnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdmaXJzdG1vZHVsZScsXG4gICAgbG9hZENoaWxkcmVuOiBGaXJzdE1vZHVsZVxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NlY29uZG1vZHVsZScsXG4gICAgbG9hZENoaWxkcmVuOiBTZWNvbmRNb2R1bGVcbiAgfVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBGaXJzdE1vZHVsZSgpIHtcblxuICByZXR1cm4gRmlyc3Rtb2R1bGVNb2R1bGU7XG59XG5leHBvcnQgZnVuY3Rpb24gU2Vjb25kTW9kdWxlKCkge1xuXG4gIHJldHVybiBTZWNvbmRtb2R1bGVNb2R1bGU7XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTGliUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==