import {
    Component,
    ElementRef
} from '@angular/core'

import { Element } from '../core/element'

@Component({
    selector: 'hg-slider',
    exportAs: 'Slider',
    templateUrl: 'slider.html',
    styleUrls: ['slider.scss']
})
export class Slider extends Element {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
