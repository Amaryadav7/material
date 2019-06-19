/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
/** @type {?} */
const routes = [
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
export class LibRoutingModule {
}
LibRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmFsdWVmeS8iLCJzb3VyY2VzIjpbImxpYi9saWItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztNQUVsRSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsV0FBVztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLFlBQVk7S0FDM0I7Q0FDRjs7OztBQUNELE1BQU0sVUFBVSxXQUFXO0lBRXpCLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQzs7OztBQUNELE1BQU0sVUFBVSxZQUFZO0lBRTFCLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQU9ELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZpcnN0bW9kdWxlTW9kdWxlIH0gZnJvbSAnLi9maXJzdG1vZHVsZS9maXJzdG1vZHVsZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2Vjb25kbW9kdWxlTW9kdWxlIH0gZnJvbSAnLi9zZWNvbmRtb2R1bGUvc2Vjb25kbW9kdWxlLm1vZHVsZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2ZpcnN0bW9kdWxlJyxcbiAgICBsb2FkQ2hpbGRyZW46IEZpcnN0TW9kdWxlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2Vjb25kbW9kdWxlJyxcbiAgICBsb2FkQ2hpbGRyZW46IFNlY29uZE1vZHVsZVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIEZpcnN0TW9kdWxlKCkge1xuXG4gIHJldHVybiBGaXJzdG1vZHVsZU1vZHVsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBTZWNvbmRNb2R1bGUoKSB7XG5cbiAgcmV0dXJuIFNlY29uZG1vZHVsZU1vZHVsZTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJSb3V0aW5nTW9kdWxlIHsgfVxuIl19