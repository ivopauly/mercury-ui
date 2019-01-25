import {
    Component,
    ElementRef
} from '@angular/core'


@Component({
    selector: 'hg-card',
    exportAs: 'Card',
    templateUrl: 'card.html',
    styleUrls: ['card.scss']
})
export class Card {

    constructor(elementRef: ElementRef) {

    }

}
