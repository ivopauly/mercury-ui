import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core'

import { ColorElement } from '../core/color-element'

@Component({
    selector: 'hg-toolbar',
    exportAs: 'Toolbar',
    templateUrl: './toolbar.html',
    styleUrls: ['./toolbar.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['color']
})
export class HgToolbar extends ColorElement {

    constructor(elementRef: ElementRef) {
        super(elementRef)
    }

}
