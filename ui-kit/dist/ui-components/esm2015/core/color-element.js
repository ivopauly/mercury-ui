/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Element } from './element';
export class ColorElement extends Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        if (value !== this._color) {
            if (this._color) {
                this.getHostElement().classList.remove(`hg-${this._color}`);
            }
            if (value) {
                this.getHostElement().classList.add(`hg-${value}`);
            }
            this._color = value;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColorElement.prototype._color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb3JlL2NvbG9yLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFJbkMsTUFBTSxPQUFPLFlBQWEsU0FBUSxPQUFPOzs7O0lBSXJDLFlBQVksVUFBc0I7UUFDOUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFpQjtRQUN2QixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBQzlEO1lBRUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFBO2FBQ3JEO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDdEI7SUFDTCxDQUFDO0NBRUo7Ozs7OztJQXhCRyw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudCdcblxuZXhwb3J0IHR5cGUgVGhlbWVDb2xvciA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2FjY2VudCcgfCB1bmRlZmluZWRcblxuZXhwb3J0IGNsYXNzIENvbG9yRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuXG4gICAgcHJpdmF0ZSBfY29sb3I6IFRoZW1lQ29sb3JcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZilcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclxuICAgIH1cblxuICAgIHNldCBjb2xvcih2YWx1ZTogVGhlbWVDb2xvcikge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShgaGctJHt0aGlzLl9jb2xvcn1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgaGctJHt2YWx1ZX1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==