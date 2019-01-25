import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Element {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Button extends Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
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
                selector: 'hg-button',
                exportAs: 'Button',
                template: "<button class=\"hg-button\">\n    <ng-content></ng-content>\n</button>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".hg-button{border:none;font-size:24px}"]
            }] }
];
/** @nocollapse */
Button.ctorParameters = () => [
    { type: ElementRef }
];
Button.propDecorators = {
    disabled: [{ type: Input, args: ['disabled',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
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