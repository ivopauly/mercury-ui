import { ElementRef } from '@angular/core';
import { Element } from './element';
export declare type ThemeColor = 'primary' | 'secondary' | 'accent' | undefined;
export declare class ColorElement extends Element {
    private _color;
    constructor(elementRef: ElementRef);
    color: ThemeColor;
}
