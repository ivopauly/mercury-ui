import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ThemesService = /** @class */ (function () {
    function ThemesService() {
    }
    ThemesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ThemesService.ctorParameters = function () { return []; };
    /** @nocollapse */ ThemesService.ngInjectableDef = defineInjectable({ factory: function ThemesService_Factory() { return new ThemesService(); }, token: ThemesService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { ThemesService, ThemesComponent, ThemesModule };

//# sourceMappingURL=themes.js.map