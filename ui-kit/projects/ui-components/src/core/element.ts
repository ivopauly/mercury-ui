import { ElementRef } from '@angular/core'

/**
 * Abstract Element used as a base class
 */
export abstract class Element {

    /**
     * @ignore
     * Private Element Reference
     */
    private _elementRef: ElementRef

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef
    }

    /**
     * Returns the host element
     */
    getHostElement(): any {
        return this._elementRef.nativeElement
    }

    /**
     * Checks if the host contains any of the given attributes
     * 
     * @param attributes List of possible attributes
     * 
     * @returns boolean
     */
    _hasHostAttributes(...attributes: string[]): boolean {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute))
    }

}
