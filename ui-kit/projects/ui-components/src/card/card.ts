import {
    Component,
    ElementRef
} from '@angular/core'


@Component({
    selector: 'hg-card',
    exportAs: 'Card',
    templateUrl: './card.html',
    styleUrls: ['card.scss'],
    host: {
        'class': 'hg-card'
    }
})
export class HgCard {

    constructor(elementRef: ElementRef) {

    }

}
