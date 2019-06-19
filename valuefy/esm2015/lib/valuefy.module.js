/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ValuefyComponent } from './valuefy.component';
import { ComponentsComponent } from './components/components.component';
import { ButtonComponent } from './button/button.component';
import { LibRoutingModule } from './lib-routing.module';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
import { SharedserviceModule } from 'sharedservice';
import { SharedeventModule } from 'sharedevent';
export class ValuefyModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92YWx1ZWZ5LyIsInNvdXJjZXMiOlsibGliL3ZhbHVlZnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU2hELE1BQU0sT0FBTyxhQUFhOzs7WUFQekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQztnQkFDdEUsT0FBTyxFQUFFO29CQUNQLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQjtpQkFDaEc7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO2FBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbHVlZnlDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlZnkuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaWJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9saWItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmlyc3Rtb2R1bGVNb2R1bGUgfSBmcm9tICcuL2ZpcnN0bW9kdWxlL2ZpcnN0bW9kdWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWNvbmRtb2R1bGVNb2R1bGUgfSBmcm9tICcuL3NlY29uZG1vZHVsZS9zZWNvbmRtb2R1bGUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZHNlcnZpY2VNb2R1bGUgfSBmcm9tICdzaGFyZWRzZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZGV2ZW50TW9kdWxlIH0gZnJvbSAnc2hhcmVkZXZlbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtWYWx1ZWZ5Q29tcG9uZW50LCBDb21wb25lbnRzQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTGliUm91dGluZ01vZHVsZSwgRmlyc3Rtb2R1bGVNb2R1bGUsIFNlY29uZG1vZHVsZU1vZHVsZSwgU2hhcmVkc2VydmljZU1vZHVsZSwgU2hhcmVkZXZlbnRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1ZhbHVlZnlDb21wb25lbnQsIENvbXBvbmVudHNDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVmFsdWVmeU1vZHVsZSB7IH1cbiJdfQ==