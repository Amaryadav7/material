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
export { ValuefyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92YWx1ZWZ5LyIsInNvdXJjZXMiOlsibGliL3ZhbHVlZnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWhEO0lBQUE7SUFPNkIsQ0FBQzs7Z0JBUDdCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7b0JBQ3RFLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUI7cUJBQ2hHO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQztpQkFDbEU7O0lBQzRCLG9CQUFDO0NBQUEsQUFQOUIsSUFPOEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWx1ZWZ5Q29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZWZ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGliUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbGliLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEZpcnN0bW9kdWxlTW9kdWxlIH0gZnJvbSAnLi9maXJzdG1vZHVsZS9maXJzdG1vZHVsZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2Vjb25kbW9kdWxlTW9kdWxlIH0gZnJvbSAnLi9zZWNvbmRtb2R1bGUvc2Vjb25kbW9kdWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRzZXJ2aWNlTW9kdWxlIH0gZnJvbSAnc2hhcmVkc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRldmVudE1vZHVsZSB9IGZyb20gJ3NoYXJlZGV2ZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVmFsdWVmeUNvbXBvbmVudCwgQ29tcG9uZW50c0NvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIExpYlJvdXRpbmdNb2R1bGUsIEZpcnN0bW9kdWxlTW9kdWxlLCBTZWNvbmRtb2R1bGVNb2R1bGUsIFNoYXJlZHNlcnZpY2VNb2R1bGUsIFNoYXJlZGV2ZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtWYWx1ZWZ5Q29tcG9uZW50LCBDb21wb25lbnRzQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFZhbHVlZnlNb2R1bGUgeyB9XG4iXX0=