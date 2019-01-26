/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ColorElement } from '../core/color-element';
/** @type {?} */
var HOST_ATTRIBUTES = [
    'hg-button',
    'rounded'
];
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(elementRef) {
        var e_1, _a;
        var _this = _super.call(this, elementRef) || this;
        try {
            for (var HOST_ATTRIBUTES_1 = tslib_1.__values(HOST_ATTRIBUTES), HOST_ATTRIBUTES_1_1 = HOST_ATTRIBUTES_1.next(); !HOST_ATTRIBUTES_1_1.done; HOST_ATTRIBUTES_1_1 = HOST_ATTRIBUTES_1.next()) {
                var attr = HOST_ATTRIBUTES_1_1.value;
                if (_this._hasHostAttributes(attr)) {
                    _this.getHostElement().classList.add(attr);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (HOST_ATTRIBUTES_1_1 && !HOST_ATTRIBUTES_1_1.done && (_a = HOST_ATTRIBUTES_1.return)) _a.call(HOST_ATTRIBUTES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    Object.defineProperty(Button.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Button.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.getHostElement().focus();
    };
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
    Button.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Button;
}(ColorElement));
export { Button };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Button.prototype._disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTs7SUFFOUMsZUFBZSxHQUFHO0lBQ3BCLFdBQVc7SUFDWCxTQUFTO0NBQ1o7QUFFRDtJQVk0QixrQ0FBWTtJQUlwQyxnQkFBWSxVQUFzQjs7UUFBbEMsWUFDSSxrQkFBTSxVQUFVLENBQUMsU0FRcEI7O1lBTkcsS0FBbUIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7Z0JBQS9CLElBQU0sSUFBSSw0QkFBQTtnQkFDWCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDL0IsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzVDO2FBQ0o7Ozs7Ozs7Ozs7SUFFTCxDQUFDO0lBRUQsc0JBQUksNEJBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7OztRQUVELFVBQWEsS0FBVTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pELENBQUM7OztPQUpBOzs7O0lBTUQsc0JBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pDLENBQUM7O2dCQXJDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLG1GQUE0QjtvQkFFNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO29CQUM3QixJQUFJLEVBQUU7d0JBQ0YsWUFBWSxFQUFFLGtCQUFrQjtxQkFDbkM7O2lCQUNKOzs7O2dCQXpCRyxVQUFVOztJQXFEZCxhQUFDO0NBQUEsQUF2Q0QsQ0FZNEIsWUFBWSxHQTJCdkM7U0EzQlksTUFBTTs7Ozs7O0lBRWYsMkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nXG5cbmltcG9ydCB7IENvbG9yRWxlbWVudCB9IGZyb20gJy4uL2NvcmUvY29sb3ItZWxlbWVudCdcblxuY29uc3QgSE9TVF9BVFRSSUJVVEVTID0gW1xuICAgICdoZy1idXR0b24nLFxuICAgICdyb3VuZGVkJ1xuXVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2J1dHRvbltoZy1idXR0b25dJyxcbiAgICBleHBvcnRBczogJ0J1dHRvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2NvbG9yJ10sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29sb3JFbGVtZW50IHtcblxuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYpXG5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIEhPU1RfQVRUUklCVVRFUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0hvc3RBdHRyaWJ1dGVzKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYXR0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSlcbiAgICB9XG4gICAgXG4gICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpXG4gICAgfVxuXG59XG4iXX0=