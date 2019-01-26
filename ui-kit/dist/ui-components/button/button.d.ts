import { ElementRef } from '@angular/core';
import { ColorElement } from '../core/color-element';
export declare class Button extends ColorElement {
    private _disabled;
    constructor(elementRef: ElementRef);
    disabled: any;
    focus(): void;
}
