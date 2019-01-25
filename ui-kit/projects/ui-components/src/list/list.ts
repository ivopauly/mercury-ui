import {
    Component,
    ElementRef
} from '@angular/core'

import { Element } from '../core/element'

@Component({
    selector: 'hg-list',
    exportAs: 'List',
    templateUrl: 'list.html',
    styleUrls: ['list.scss']
})
export class List extends Element {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
