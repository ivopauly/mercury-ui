/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, Input, } from '@angular/core';
import { Element } from '../core/element';
export class Button extends Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
    /**
     * @return {?}
     */
    focus() {
        this.getHostElement().focus();
    }
}
Button.decorators = [
    { type: Component, args: [{
                selector: 'hg-button',
                exportAs: 'Button',
                template: "<button class=\"hg-button\">\n    <ng-content></ng-content>\n</button>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".hg-button{border:none;font-size:24px}"]
            }] }
];
/** @nocollapse */
Button.ctorParameters = () => [
    { type: ElementRef }
];
Button.propDecorators = {
    disabled: [{ type: Input, args: ['disabled',] }]
};
if (false) {
    /** @type {?} */
    Button.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsS0FBSyxHQUNSLE1BQU0sZUFBZSxDQUFBO0FBSXRCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQVV6QyxNQUFNLE9BQU8sTUFBTyxTQUFRLE9BQU87Ozs7SUFLL0IsWUFBWSxVQUFzQjtRQUM5QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckIsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDakMsQ0FBQzs7O1lBbkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGtGQUE0QjtnQkFFNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNsRDs7OztZQWpCRyxVQUFVOzs7dUJBb0JULEtBQUssU0FBQyxVQUFVOzs7O0lBQWpCLDBCQUNpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbidcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2NvcmUvZWxlbWVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZy1idXR0b24nLFxuICAgIGV4cG9ydEFzOiAnQnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcblxuICAgIEBJbnB1dCgnZGlzYWJsZWQnKVxuICAgIGRpc2FibGVkOiBib29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYpXG4gICAgfVxuXG4gICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpXG4gICAgfVxuXG59XG4iXX0=