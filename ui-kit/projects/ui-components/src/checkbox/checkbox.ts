import {
    Component,
    ElementRef,
    ChangeDetectorRef,
    Output,
    EventEmitter,
    forwardRef
} from '@angular/core'

import { FocusMonitor } from '@angular/cdk/a11y'

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import { ColorElement } from '../core/color-element'

export enum TransitionCheckState {
    Init,
    Checked,
    Unchecked
}

export class CheckboxChangeEvent {
    source: Checkbox
    checked: boolean
}

export const CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
}

@Component({
    selector: 'hg-checkbox',
    exportAs: 'Checkbox',
    templateUrl: 'checkbox.html',
    styleUrls: ['checkbox.scss'],
    inputs: ['color','checked'],
    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR],
    host: {
        '[class.hg-checkbox-checked]': 'checked'
    }
})
export class Checkbox extends ColorElement implements ControlValueAccessor {

    private _checked: boolean = false

    private _changeDetectorRef: ChangeDetectorRef
    private _focusMonitor: FocusMonitor
    
    @Output() 
    readonly change: EventEmitter<CheckboxChangeEvent> = new EventEmitter<CheckboxChangeEvent>()

    private _controlValueAccessorChangeFn: (value: any) => void = () => {}
    private _onTouched: () => any = () => {}

    private _currentCheckState: TransitionCheckState = TransitionCheckState.Init;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        focusMonitor: FocusMonitor,
        elementRef: ElementRef
    ) {
    
        super(elementRef)

        this._changeDetectorRef = changeDetectorRef
        this._focusMonitor = focusMonitor

    }

    get checked(): boolean {
        return this._checked
    }

    set checked(value: boolean) {
        if (value != this._checked) {
            this._checked = value
            this._changeDetectorRef.markForCheck()
        }
    }

    writeValue(value: any) {
        this.checked = !!value;
    }

    registerOnChange(fn: (value: any) => void) {
        this._controlValueAccessorChangeFn = fn
    }
    
    registerOnTouched(fn: any) {
        this._onTouched = fn
    }

    _onInputClick(event: Event) {
        event.stopPropagation()

        this.toggle()

        this._transitionCheckState(
            this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked
        )

        this._emitChangeEvent()
    }

    _onInteractionEvent(event: Event) {
        event.stopPropagation()
    }

    toggle() {
        this._checked = !this._checked   
    }

    private _transitionCheckState(newState: TransitionCheckState) {
        const oldState = this._currentCheckState
        
        if (oldState === newState) {
            return
        }

        this._currentCheckState = newState
    }

    private _emitChangeEvent() {
        const event = new CheckboxChangeEvent()
        event.source = this
        event.checked = this._checked

        this._controlValueAccessorChangeFn(this.checked)
        this.change.emit(event)
    }

}
