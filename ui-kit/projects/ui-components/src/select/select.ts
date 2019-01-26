import {
    Component,
    ElementRef,
    ChangeDetectorRef,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core'


import { Element } from '../core/element'

@Component({
    selector: 'hg-select',
    exportAs: 'Select',
    templateUrl: 'select.html',
    styleUrls: ['select.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HgSelect extends Element {

    private _panelOpen: boolean = false
    private _changeDetectorRef: ChangeDetectorRef

    constructor(
        elementRef: ElementRef,
        changeDetectorRef: ChangeDetectorRef
    ) {
    
        super(elementRef)

        this._changeDetectorRef = changeDetectorRef
    }

    get panelOpen() {
        return this._panelOpen
    }

    toggle() {
        this.panelOpen ? this.close() : this.open()
    }

    _onAttached() {
        this._changeDetectorRef.detectChanges()
    }

    close() {
        if (this._panelOpen) {
            this._panelOpen = false
            this._changeDetectorRef.markForCheck()
        }
    }

    open() {
        if (this.panelOpen) {
            return
        }

        this._panelOpen = true

        this._changeDetectorRef.markForCheck()
    }
}
