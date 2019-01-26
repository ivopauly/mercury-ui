import {
    Component,
    ElementRef
} from '@angular/core'

import { ColorElement } from '../core/color-element'

@Component({
    selector: 'hg-input',
    exportAs: 'Input',
    templateUrl: 'input.html',
    styleUrls: ['input.scss']
})
export class Input extends ColorElement {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
