import { ElementRef } from '@angular/core'

export class Element {

    private _elementRef: ElementRef

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef
    }

    getHostElement(): any {
        return this._elementRef.nativeElement
    }

    _hasHostAttributes(...attributes: string[]) {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute))
    }

}
