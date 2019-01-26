/**
 * @license
 * Copyright Pascal Wilbrink
 *
 * License Apache 2.0
 * https://www.apache.org/licenses/LICENSE-2.0
 */


import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core'

import { coerceBooleanProperty } from '@angular/cdk/coercion'

import { ColorElement } from '../core/color-element'

/**
 * List of attributes that can be added as classes to the button
 */
const HOST_ATTRIBUTES = [
    'hg-button',
    'rounded'
]
 
/**
 * Mercury Button
 * 
 * Can be colorized
 * 
 * @example
 * <button 
 *                  hg-button 
 *                  color="primary" 
 *                  (click)="onClick()"
 *              >
 *              Go!
 * </button>
 * 
 * <button
 *                  hg-button
 *                  color="accent"
 *                  (click)="onClick()"
 *                  rounded
 *              >
 *              Go!
 * </button>
 * 
 */
@Component({
    selector: 'button[hg-button]',
    exportAs: 'Button',
    templateUrl: './button.html',
    styleUrls: ['./button.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['disabled', 'color'],
    host: {
        '[disabled]': 'disabled || null'
    }
})
export class HgButton extends ColorElement {

    /**
     * @ignore
     * Private disabled state
     */
    private _disabled: boolean

    /**
     * 
     * @param elementRef Element Reference needed by parent Element
     */
    constructor(elementRef: ElementRef) {
        super(elementRef)

        for (const attr of HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this.getHostElement().classList.add(attr)
            }
        }    
        
    }

    /**
     * @ignore
     * Gets the disabled state of the button
     */
    get disabled() {
        return this._disabled
    }

    /**
     * @ignore
     * Sets the disabled state of the button
     */
    set disabled(value: any) {
        this._disabled = coerceBooleanProperty(value)
    }
    
    /**
     * Focuses the button
     */
    focus(): void {
        this.getHostElement().focus()
    }

}
