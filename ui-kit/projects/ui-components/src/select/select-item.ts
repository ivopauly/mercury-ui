import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core'


import { Element } from '../core/element'

@Component({
    selector: 'hg-select-item',
    exportAs: 'SelectItem',
    templateUrl: './select-item.html',
    styleUrls: ['./select.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HgSelectItem extends Element {

    constructor(
        elementRef: ElementRef
    ) {
        super(elementRef)
    }

}
