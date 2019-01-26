import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { __extends, __values } from 'tslib';
import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, NgModule, ChangeDetectorRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorElement = /** @class */ (function (_super) {
    __extends(ColorElement, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HOST_ATTRIBUTES = [
    'hg-button',
    'rounded'
];
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(elementRef) {
        var e_1, _a;
        var _this = _super.call(this, elementRef) || this;
        try {
            for (var HOST_ATTRIBUTES_1 = __values(HOST_ATTRIBUTES), HOST_ATTRIBUTES_1_1 = HOST_ATTRIBUTES_1.next(); !HOST_ATTRIBUTES_1_1.done; HOST_ATTRIBUTES_1_1 = HOST_ATTRIBUTES_1.next()) {
                var attr = HOST_ATTRIBUTES_1_1.value;
                if (_this._hasHostAttributes(attr)) {
                    _this.getHostElement().classList.add(attr);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (HOST_ATTRIBUTES_1_1 && !HOST_ATTRIBUTES_1_1.done && (_a = HOST_ATTRIBUTES_1.return)) _a.call(HOST_ATTRIBUTES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    Object.defineProperty(Button.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
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
    Button.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Button;
}(ColorElement));

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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(elementRef) {
        return _super.call(this, elementRef) || this;
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
    List.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return List;
}(Element));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(elementRef) {
        return _super.call(this, elementRef) || this;
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
    ListItem.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ListItem;
}(Element));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListModule = /** @class */ (function () {
    function ListModule() {
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
    return ListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Card = /** @class */ (function () {
    function Card(elementRef) {
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
    Card.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Card;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardModule = /** @class */ (function () {
    function CardModule() {
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
    return CardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
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
    return ToolbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var TransitionCheckState = {
    Init: 0,
    Checked: 1,
    Unchecked: 2,
};
TransitionCheckState[TransitionCheckState.Init] = 'Init';
TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
var CheckboxChangeEvent = /** @class */ (function () {
    function CheckboxChangeEvent() {
    }
    return CheckboxChangeEvent;
}());
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Checkbox; }),
    multi: true
};
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
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
    return CheckboxModule;
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

export { ButtonModule, Button, ListModule, List, ListItem, CardModule, Card, ToolbarModule, Toolbar, CheckboxModule, TransitionCheckState, CheckboxChangeEvent, CHECKBOX_CONTROL_VALUE_ACCESSOR, Checkbox, ColorElement as ɵa, Element as ɵb };

//# sourceMappingURL=ui-components.js.map