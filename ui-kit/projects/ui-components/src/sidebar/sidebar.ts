import {
    Component,
    ElementRef
} from '@angular/core'

import { Element } from '../core/element'

@Component({
    selector: 'hg-sidebar',
    exportAs: 'Sidebar',
    templateUrl: 'sidebar.html',
    styleUrls: ['sidebar.scss']
})
export class HgSidebar extends Element {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
