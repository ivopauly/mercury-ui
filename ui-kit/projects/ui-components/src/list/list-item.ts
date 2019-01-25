import {
    Component,
    ElementRef
} from '@angular/core'

import { Element } from '../core/element'

@Component({
    selector: 'hg-list-item',
    exportAs: 'ListItem',
    templateUrl: 'list-item.html',
    styleUrls: ['list.scss']
})
export class ListItem extends Element {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
