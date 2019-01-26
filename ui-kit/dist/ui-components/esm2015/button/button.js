/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ColorElement } from '../core/color-element';
/** @type {?} */
const HOST_ATTRIBUTES = [
    'hg-button',
    'rounded'
];
export class Button extends ColorElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        for (const attr of HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this.getHostElement().classList.add(attr);
            }
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
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
                selector: 'button[hg-button]',
                exportAs: 'Button',
                template: "<span class=\"button-wrapper\">\n    <ng-content></ng-content>\n</span>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['disabled', 'color'],
                host: {
                    '[disabled]': 'disabled || null'
                },
                styles: [".hg-button{box-sizing:border-box;position:relative;display:inline-block;white-space:nowrap;text-decoration:none;overflow:visible;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent}.hg-button::-moz-focus-inner{border:0}.hg-button[disabled]{cursor:not-allowed}.hg-button.rounded{border-radius:24px}"]
            }] }
];
/** @nocollapse */
Button.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    Button.prototype._disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDMUIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFBOztNQUU5QyxlQUFlLEdBQUc7SUFDcEIsV0FBVztJQUNYLFNBQVM7Q0FDWjtBQWNELE1BQU0sT0FBTyxNQUFPLFNBQVEsWUFBWTs7OztJQUlwQyxZQUFZLFVBQXNCO1FBQzlCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUVqQixLQUFLLE1BQU0sSUFBSSxJQUFJLGVBQWUsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDNUM7U0FDSjtJQUVMLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDakMsQ0FBQzs7O1lBckNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUZBQTRCO2dCQUU1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7Z0JBQzdCLElBQUksRUFBRTtvQkFDRixZQUFZLEVBQUUsa0JBQWtCO2lCQUNuQzs7YUFDSjs7OztZQXpCRyxVQUFVOzs7Ozs7O0lBNEJWLDJCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJ1xuXG5pbXBvcnQgeyBDb2xvckVsZW1lbnQgfSBmcm9tICcuLi9jb3JlL2NvbG9yLWVsZW1lbnQnXG5cbmNvbnN0IEhPU1RfQVRUUklCVVRFUyA9IFtcbiAgICAnaGctYnV0dG9uJyxcbiAgICAncm91bmRlZCdcbl1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdidXR0b25baGctYnV0dG9uXScsXG4gICAgZXhwb3J0QXM6ICdCdXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGlucHV0czogWydkaXNhYmxlZCcsICdjb2xvciddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbG9yRWxlbWVudCB7XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhblxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmKVxuXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBIT1NUX0FUVFJJQlVURVMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNIb3N0QXR0cmlidXRlcyhhdHRyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SG9zdEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGF0dHIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkXG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpXG4gICAgfVxuICAgIFxuICAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldEhvc3RFbGVtZW50KCkuZm9jdXMoKVxuICAgIH1cblxufVxuIl19