/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ChangeDetectorRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorElement } from '../core/color-element';
/** @enum {number} */
var TransitionCheckState = {
    Init: 0,
    Checked: 1,
    Unchecked: 2,
};
export { TransitionCheckState };
TransitionCheckState[TransitionCheckState.Init] = 'Init';
TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
var CheckboxChangeEvent = /** @class */ (function () {
    function CheckboxChangeEvent() {
    }
    return CheckboxChangeEvent;
}());
export { CheckboxChangeEvent };
if (false) {
    /** @type {?} */
    CheckboxChangeEvent.prototype.source;
    /** @type {?} */
    CheckboxChangeEvent.prototype.checked;
}
/** @type {?} */
export var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Checkbox; }),
    multi: true
};
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox(changeDetectorRef, focusMonitor, elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this._checked = false;
        _this.change = new EventEmitter();
        _this._controlValueAccessorChangeFn = function () { };
        _this._onTouched = function () { };
        _this._currentCheckState = TransitionCheckState.Init;
        _this._changeDetectorRef = changeDetectorRef;
        _this._focusMonitor = focusMonitor;
        return _this;
    }
    Object.defineProperty(Checkbox.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != this._checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    Checkbox.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Checkbox.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Checkbox.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Checkbox.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggle();
        this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        this._emitChangeEvent();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Checkbox.prototype._onInteractionEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    Checkbox.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this._checked = !this._checked;
    };
    /**
     * @private
     * @param {?} newState
     * @return {?}
     */
    Checkbox.prototype._transitionCheckState = /**
     * @private
     * @param {?} newState
     * @return {?}
     */
    function (newState) {
        /** @type {?} */
        var oldState = this._currentCheckState;
        if (oldState === newState) {
            return;
        }
        this._currentCheckState = newState;
    };
    /**
     * @private
     * @return {?}
     */
    Checkbox.prototype._emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new CheckboxChangeEvent();
        event.source = this;
        event.checked = this._checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    Checkbox.decorators = [
        { type: Component, args: [{
                    selector: 'hg-checkbox',
                    exportAs: 'Checkbox',
                    template: "<input\n    #input \n    class=\"hg-checkbox\"\n    type=\"checkbox\"\n    [checked]=\"checked\"\n    (change)=\"_onInteractionEvent($event)\"\n    (click)=\"_onInputClick($event)\" />\n",
                    inputs: ['checked'],
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    Checkbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: ElementRef }
    ]; };
    Checkbox.propDecorators = {
        change: [{ type: Output }]
    };
    return Checkbox;
}(ColorElement));
export { Checkbox };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._checked;
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._focusMonitor;
    /** @type {?} */
    Checkbox.prototype.change;
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._controlValueAccessorChangeFn;
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    Checkbox.prototype._currentCheckState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRWhELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7OztJQUdoRCxPQUFJO0lBQ0osVUFBTztJQUNQLFlBQVM7Ozs7OztBQUdiO0lBQUE7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZHLHFDQUFnQjs7SUFDaEIsc0NBQWdCOzs7QUFHcEIsTUFBTSxLQUFPLCtCQUErQixHQUFRO0lBQ2hELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQztJQUN2QyxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBRUQ7SUFROEIsb0NBQVk7SUFldEMsa0JBQ0ksaUJBQW9DLEVBQ3BDLFlBQTBCLEVBQzFCLFVBQXNCO1FBSDFCLFlBTUksa0JBQU0sVUFBVSxDQUFDLFNBSXBCO1FBdkJPLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFNeEIsWUFBTSxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQTtRQUVwRixtQ0FBNkIsR0FBeUIsY0FBTyxDQUFDLENBQUE7UUFDOUQsZ0JBQVUsR0FBYyxjQUFPLENBQUMsQ0FBQTtRQUVoQyx3QkFBa0IsR0FBeUIsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1FBVXpFLEtBQUksQ0FBQyxrQkFBa0IsR0FB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b25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknXG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQgeyBDb2xvckVsZW1lbnQgfSBmcm9tICcuLi9jb3JlL2NvbG9yLWVsZW1lbnQnXG5cbmV4cG9ydCBlbnVtIFRyYW5zaXRpb25DaGVja1N0YXRlIHtcbiAgICBJbml0LFxuICAgIENoZWNrZWQsXG4gICAgVW5jaGVja2VkXG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveENoYW5nZUV2ZW50IHtcbiAgICBzb3VyY2U6IENoZWNrYm94XG4gICAgY2hlY2tlZDogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hnLWNoZWNrYm94JyxcbiAgICBleHBvcnRBczogJ0NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjaGVja2JveC5zY3NzJ10sXG4gICAgaW5wdXRzOiBbJ2NoZWNrZWQnXSxcbiAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbG9yRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHByaXZhdGUgX2NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcbiAgICBcbiAgICBAT3V0cHV0KCkgXG4gICAgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2hlY2tib3hDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENoZWNrYm94Q2hhbmdlRXZlbnQ+KClcblxuICAgIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge31cbiAgICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9XG5cbiAgICBwcml2YXRlIF9jdXJyZW50Q2hlY2tTdGF0ZTogVHJhbnNpdGlvbkNoZWNrU3RhdGUgPSBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5Jbml0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgICApIHtcbiAgICBcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZilcblxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZiA9IGNoYW5nZURldGVjdG9yUmVmXG4gICAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvciA9IGZvY3VzTW9uaXRvclxuICAgIH1cblxuICAgIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tlZFxuICAgIH1cblxuICAgIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLl9jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja2VkID0gdmFsdWVcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm5cbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmblxuICAgIH1cblxuICAgIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgdGhpcy50b2dnbGUoKVxuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25DaGVja1N0YXRlKFxuICAgICAgICAgICAgdGhpcy5fY2hlY2tlZCA/IFRyYW5zaXRpb25DaGVja1N0YXRlLkNoZWNrZWQgOiBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5VbmNoZWNrZWRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpXG4gICAgfVxuXG4gICAgX29uSW50ZXJhY3Rpb25FdmVudChldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrZWQgPSAhdGhpcy5fY2hlY2tlZCAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25DaGVja1N0YXRlKG5ld1N0YXRlOiBUcmFuc2l0aW9uQ2hlY2tTdGF0ZSkge1xuICAgICAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuX2N1cnJlbnRDaGVja1N0YXRlXG4gICAgICAgIFxuICAgICAgICBpZiAob2xkU3RhdGUgPT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGVja1N0YXRlID0gbmV3U3RhdGVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IENoZWNrYm94Q2hhbmdlRXZlbnQoKVxuICAgICAgICBldmVudC5zb3VyY2UgPSB0aGlzXG4gICAgICAgIGV2ZW50LmNoZWNrZWQgPSB0aGlzLl9jaGVja2VkXG5cbiAgICAgICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpXG4gICAgfVxuXG59XG4iXX0=