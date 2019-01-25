import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemesService {
    constructor() { }
}
ThemesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ThemesService.ctorParameters = () => [];
/** @nocollapse */ ThemesService.ngInjectableDef = defineInjectable({ factory: function ThemesService_Factory() { return new ThemesService(); }, token: ThemesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ThemesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-themes',
                template: `
    <p>
      themes works!
    </p>
  `
            }] }
];
/** @nocollapse */
ThemesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemesModule {
}
ThemesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ThemesComponent],
                imports: [],
                exports: [ThemesComponent]
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

export { ThemesService, ThemesComponent, ThemesModule };

//# sourceMappingURL=themes.js.map