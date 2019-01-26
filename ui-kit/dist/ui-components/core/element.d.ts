import { ElementRef } from '@angular/core';
export declare class Element {
    private _elementRef;
    constructor(elementRef: ElementRef);
    getHostElement(): any;
    _hasHostAttributes(...attributes: string[]): boolean;
}
