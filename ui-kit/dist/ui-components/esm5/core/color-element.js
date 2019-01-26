/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Element } from './element';
var ColorElement = /** @class */ (function (_super) {
    tslib_1.__extends(ColorElement, _super);
    function ColorElement(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    Object.defineProperty(ColorElement.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._color) {
                if (this._color) {
                    this.getHostElement().classList.remove("hg-" + this._color);
                }
                if (value) {
                    this.getHostElement().classList.add("hg-" + value);
                }
                this._color = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ColorElement;
}(Element));
export { ColorElement };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColorElement.prototype._color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb3JlL2NvbG9yLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBSW5DO0lBQWtDLHdDQUFPO0lBSXJDLHNCQUFZLFVBQXNCO2VBQzlCLGtCQUFNLFVBQVUsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksK0JBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0QixDQUFDOzs7OztRQUVELFVBQVUsS0FBaUI7WUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQU0sSUFBSSxDQUFDLE1BQVEsQ0FBQyxDQUFBO2lCQUM5RDtnQkFFRCxJQUFJLEtBQUssRUFBRTtvQkFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFNLEtBQU8sQ0FBQyxDQUFBO2lCQUNyRDtnQkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTthQUN0QjtRQUNMLENBQUM7OztPQWRBO0lBZ0JMLG1CQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFrQyxPQUFPLEdBMEJ4Qzs7Ozs7OztJQXhCRyw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudCdcblxuZXhwb3J0IHR5cGUgVGhlbWVDb2xvciA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2FjY2VudCcgfCB1bmRlZmluZWRcblxuZXhwb3J0IGNsYXNzIENvbG9yRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuXG4gICAgcHJpdmF0ZSBfY29sb3I6IFRoZW1lQ29sb3JcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZilcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclxuICAgIH1cblxuICAgIHNldCBjb2xvcih2YWx1ZTogVGhlbWVDb2xvcikge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShgaGctJHt0aGlzLl9jb2xvcn1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgaGctJHt2YWx1ZX1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==