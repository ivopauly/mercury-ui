(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('themes', ['exports', '@angular/core'], factory) :
    (factory((global.themes = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemesService = /** @class */ (function () {
        function ThemesService() {
        }
        ThemesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ThemesService.ctorParameters = function () { return []; };
        /** @nocollapse */ ThemesService.ngInjectableDef = i0.defineInjectable({ factory: function ThemesService_Factory() { return new ThemesService(); }, token: ThemesService, providedIn: "root" });
        return ThemesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemesComponent = /** @class */ (function () {
        function ThemesComponent() {
        }
        /**
         * @return {?}
         */
        ThemesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ThemesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-themes',
                        template: "\n    <p>\n      themes works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ThemesComponent.ctorParameters = function () { return []; };
        return ThemesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemesModule = /** @class */ (function () {
        function ThemesModule() {
        }
        ThemesModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ThemesComponent],
                        imports: [],
                        exports: [ThemesComponent]
                    },] }
        ];
        return ThemesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ThemesService = ThemesService;
    exports.ThemesComponent = ThemesComponent;
    exports.ThemesModule = ThemesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=themes.umd.js.map