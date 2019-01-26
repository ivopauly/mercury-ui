import { ElementRef } from '@angular/core'

import { Element } from './element'

/**
 * Colors types: primary, secondary, accent, undefined
 */
export type ThemeColor = 'primary' | 'secondary' | 'accent' | undefined

/**
 * Abstract Element that can have a color
 */
export abstract class ColorElement extends Element {

    /**
     * @ignore
     * Private color state
     */
    private _color: ThemeColor

    /**
     * 
     * @param elementRef Element Reference needed by parent Element
     */
    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

    /**
     * @ignore
     * Gets the color
     */
    get color() {
        return this._color
    }

    /**
     * @ignore
     * Sets the color and adds the class to the host element
     */
    set color(value: ThemeColor) {
        if (value !== this._color) {
            if (this._color) {
                this.getHostElement().classList.remove(`hg-${this._color}`)
            }

            if (value) {
                this.getHostElement().classList.add(`hg-${value}`)
            }

            this._color = value
        }
    }

}
