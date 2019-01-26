/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Element = /** @class */ (function () {
    function Element(elementRef) {
        this._elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    Element.prototype.getHostElement = /**
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /**
     * @param {...?} attributes
     * @return {?}
     */
    Element.prototype._hasHostAttributes = /**
     * @param {...?} attributes
     * @return {?}
     */
    function () {
        var _this = this;
        var attributes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attributes[_i] = arguments[_i];
        }
        return attributes.some(function (attribute) { return _this.getHostElement().hasAttribute(attribute); });
    };
    return Element;
}());
export { Element };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Element.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb3JlL2VsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBSUksaUJBQVksVUFBc0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUE7SUFDakMsQ0FBQzs7OztJQUVELGdDQUFjOzs7SUFBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFRCxvQ0FBa0I7Ozs7SUFBbEI7UUFBQSxpQkFFQztRQUZrQixvQkFBdUI7YUFBdkIsVUFBdUIsRUFBdkIscUJBQXVCLEVBQXZCLElBQXVCO1lBQXZCLCtCQUF1Qjs7UUFDdEMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFBO0lBQ3RGLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7Ozs7OztJQWRHLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudCB7XG5cbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBlbGVtZW50UmVmXG4gICAgfVxuXG4gICAgZ2V0SG9zdEVsZW1lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIF9oYXNIb3N0QXR0cmlidXRlcyguLi5hdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKGF0dHJpYnV0ZSA9PiB0aGlzLmdldEhvc3RFbGVtZW50KCkuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpXG4gICAgfVxuXG59XG4iXX0=