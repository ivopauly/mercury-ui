import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, NgModule, ChangeDetectorRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
    /**
     * @param {...?} attributes
     * @return {?}
     */
    _hasHostAttributes(...attributes) {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColorElement extends Element {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HOST_ATTRIBUTES = [
    'hg-button',
    'rounded'
];
class Button extends ColorElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        for (const attr of HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this.getHostElement().classList.add(attr);
            }
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
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
Button.ctorParameters = () => [
    { type: ElementRef }
];

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
class List extends Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
}
List.decorators = [
    { type: Component, args: [{
                selector: 'hg-list',
                exportAs: 'List',
                template: "<ul>\n    <ng-content></ng-content>\n</ul>",
                styles: [""]
            }] }
];
/** @nocollapse */
List.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListItem extends Element {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
}
ListItem.decorators = [
    { type: Component, args: [{
                selector: 'hg-list-item',
                exportAs: 'ListItem',
                template: "<li>\n    <ng-content></ng-content>\n</li>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListItem.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListModule {
}
ListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    List,
                    ListItem
                ],
                declarations: [
                    List,
                    ListItem
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
class Card {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
    }
}
Card.decorators = [
    { type: Component, args: [{
                selector: 'hg-card',
                exportAs: 'Card',
                template: "<div class=\"hg-card\">\n    <ng-content></ng-content>\n</div>",
                styles: [".hg-card{border:1px solid rgba(150,150,150,.8);padding:16px}"]
            }] }
];
/** @nocollapse */
Card.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    Card
                ],
                declarations: [
                    Card
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
class Toolbar extends ColorElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
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
Toolbar.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToolbarModule {
}
ToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    Toolbar
                ],
                declarations: [
                    Toolbar
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
/** @enum {number} */
const TransitionCheckState = {
    Init: 0,
    Checked: 1,
    Unchecked: 2,
};
TransitionCheckState[TransitionCheckState.Init] = 'Init';
TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
class CheckboxChangeEvent {
}
/** @type {?} */
const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
class Checkbox extends ColorElement {
    /**
     * @param {?} changeDetectorRef
     * @param {?} focusMonitor
     * @param {?} elementRef
     */
    constructor(changeDetectorRef, focusMonitor, elementRef) {
        super(elementRef);
        this._checked = false;
        this.change = new EventEmitter();
        this._controlValueAccessorChangeFn = () => { };
        this._onTouched = () => { };
        this._currentCheckState = TransitionCheckState.Init;
        this._changeDetectorRef = changeDetectorRef;
        this._focusMonitor = focusMonitor;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        if (value != this._checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        event.stopPropagation();
        this.toggle();
        this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        this._emitChangeEvent();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInteractionEvent(event) {
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    toggle() {
        this._checked = !this._checked;
    }
    /**
     * @private
     * @param {?} newState
     * @return {?}
     */
    _transitionCheckState(newState) {
        /** @type {?} */
        const oldState = this._currentCheckState;
        if (oldState === newState) {
            return;
        }
        this._currentCheckState = newState;
    }
    /**
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        /** @type {?} */
        const event = new CheckboxChangeEvent();
        event.source = this;
        event.checked = this._checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
}
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
Checkbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: ElementRef }
];
Checkbox.propDecorators = {
    change: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    Checkbox
                ],
                declarations: [
                    Checkbox
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

export { ButtonModule, Button, ListModule, List, ListItem, CardModule, Card, ToolbarModule, Toolbar, CheckboxModule, TransitionCheckState, CheckboxChangeEvent, CHECKBOX_CONTROL_VALUE_ACCESSOR, Checkbox, ColorElement as ɵa, Element as ɵb };

//# sourceMappingURL=ui-components.js.map