/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ColorElement } from '../core/color-element';
var Toolbar = /** @class */ (function (_super) {
    tslib_1.__extends(Toolbar, _super);
    function Toolbar(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    Toolbar.decorators = [
        { type: Component, args: [{
                    selector: 'hg-toolbar',
                    exportAs: 'Toolbar',
                    template: "<div class=\"hg-toolbar\">\n    <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: ['color'],
                    styles: [".hg-toolbar{padding:16px 32px;background:inherit;height:48px;box-sizing:border-box}"]
                }] }
    ];
    /** @nocollapse */
    Toolbar.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Toolbar;
}(ColorElement));
export { Toolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0b29sYmFyL3Rvb2xiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUVwRDtJQVM2QixtQ0FBWTtJQUVyQyxpQkFBWSxVQUFzQjtlQUM5QixrQkFBTSxVQUFVLENBQUM7SUFDckIsQ0FBQzs7Z0JBYkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsU0FBUztvQkFDbkIsNkVBQTZCO29CQUU3QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQzs7aUJBQ3BCOzs7O2dCQWZHLFVBQVU7O0lBc0JkLGNBQUM7Q0FBQSxBQWZELENBUzZCLFlBQVksR0FNeEM7U0FOWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBDb2xvckVsZW1lbnQgfSBmcm9tICcuLi9jb3JlL2NvbG9yLWVsZW1lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGctdG9vbGJhcicsXG4gICAgZXhwb3J0QXM6ICdUb29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90b29sYmFyLnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGlucHV0czogWydjb2xvciddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb2xvckVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmKVxuICAgIH1cblxufVxuIl19