import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    OnInit,
} from '@angular/core'

import { coerceBooleanProperty } from '@angular/cdk/coercion'

import { Element } from '../core/element'

const HOST_ATTRIBUTES = [
    'rounded'
]

@Component({
    selector: 'hg-button',
    exportAs: 'Button',
    templateUrl: './button.html',
    styleUrls: ['./button.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['disabled']
})
export class Button extends Element {

    private _disabled: boolean

    constructor(elementRef: ElementRef) {
        super(elementRef)

        for (const attr of HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this.getHostElement().classList.add(attr)
            }
        }       
    }

    get disabled() {
        return this._disabled
    }

    set disabled(value: any) {
        this._disabled = coerceBooleanProperty(value)
    }
    
    focus(): void {
        this.getHostElement().focus()
    }

}
