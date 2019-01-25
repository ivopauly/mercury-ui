import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';

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
    return Element;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        Button
                    ],
                    declarations: [
                        Button
                    ]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonModule, Button, Element as ɵa };

//# sourceMappingURL=ui-components.js.map