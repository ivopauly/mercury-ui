import { ElementRef } from '@angular/core';
import { Element } from '../core/element';
export declare class Button extends Element {
    disabled: boolean;
    constructor(elementRef: ElementRef);
    focus(): void;
}
