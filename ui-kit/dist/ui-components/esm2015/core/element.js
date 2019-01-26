/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this._elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @param {...?} attributes
     * @return {?}
     */
    _hasHostAttributes(...attributes) {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Element.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb3JlL2VsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxPQUFPOzs7O0lBSWhCLFlBQVksVUFBc0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUE7SUFDakMsQ0FBQzs7OztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsR0FBRyxVQUFvQjtRQUN0QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDdEYsQ0FBQztDQUVKOzs7Ozs7SUFkRyw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gZWxlbWVudFJlZlxuICAgIH1cblxuICAgIGdldEhvc3RFbGVtZW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBfaGFzSG9zdEF0dHJpYnV0ZXMoLi4uYXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZShhdHRyaWJ1dGUgPT4gdGhpcy5nZXRIb3N0RWxlbWVudCgpLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKVxuICAgIH1cblxufVxuIl19