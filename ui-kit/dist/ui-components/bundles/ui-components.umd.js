(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ui-components', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ui-components'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            { type: core.Component, args: [{
                        selector: 'hg-button',
                        exportAs: 'Button',
                        template: "<button class=\"hg-button\">\n    <ng-content></ng-content>\n</button>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".hg-button{border:none;font-size:24px}"]
                    }] }
        ];
        /** @nocollapse */
        Button.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        Button.propDecorators = {
            disabled: [{ type: core.Input, args: ['disabled',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.ButtonModule = ButtonModule;
    exports.Button = Button;
    exports.ɵa = Element;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ui-components.umd.js.map