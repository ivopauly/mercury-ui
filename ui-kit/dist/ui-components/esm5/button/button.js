/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, Input, } from '@angular/core';
import { Element } from '../core/element';
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(elementRef) {
        return _super.call(this, elementRef) || this;
    }
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
                    selector: 'hg-button',
                    exportAs: 'Button',
                    template: "<button class=\"hg-button\">\n    <ng-content></ng-content>\n</button>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".hg-button{border:none;font-size:24px}"]
                }] }
    ];
    /** @nocollapse */
    Button.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    Button.propDecorators = {
        disabled: [{ type: Input, args: ['disabled',] }]
    };
    return Button;
}(Element));
export { Button };
if (false) {
    /** @type {?} */
    Button.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLEtBQUssR0FDUixNQUFNLGVBQWUsQ0FBQTtBQUl0QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFekM7SUFRNEIsa0NBQU87SUFLL0IsZ0JBQVksVUFBc0I7ZUFDOUIsa0JBQU0sVUFBVSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDakMsQ0FBQzs7Z0JBbkJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLGtGQUE0QjtvQkFFNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDbEQ7Ozs7Z0JBakJHLFVBQVU7OzsyQkFvQlQsS0FBSyxTQUFDLFVBQVU7O0lBV3JCLGFBQUM7Q0FBQSxBQXJCRCxDQVE0QixPQUFPLEdBYWxDO1NBYlksTUFBTTs7O0lBRWYsMEJBQ2lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJ1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vY29yZS9lbGVtZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hnLWJ1dHRvbicsXG4gICAgZXhwb3J0QXM6ICdCdXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuXG4gICAgQElucHV0KCdkaXNhYmxlZCcpXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZilcbiAgICB9XG5cbiAgICBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRIb3N0RWxlbWVudCgpLmZvY3VzKClcbiAgICB9XG5cbn1cbiJdfQ==