import { ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ControlValueAccessor } from '@angular/forms';
import { ColorElement } from '../core/color-element';
export declare enum TransitionCheckState {
    Init = 0,
    Checked = 1,
    Unchecked = 2
}
export declare class CheckboxChangeEvent {
    source: Checkbox;
    checked: boolean;
}
export declare const CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
export declare class Checkbox extends ColorElement implements ControlValueAccessor {
    private _checked;
    private _changeDetectorRef;
    private _focusMonitor;
    readonly change: EventEmitter<CheckboxChangeEvent>;
    private _controlValueAccessorChangeFn;
    private _onTouched;
    private _currentCheckState;
    constructor(changeDetectorRef: ChangeDetectorRef, focusMonitor: FocusMonitor, elementRef: ElementRef);
    checked: boolean;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    _onInputClick(event: Event): void;
    _onInteractionEvent(event: Event): void;
    toggle(): void;
    private _transitionCheckState;
    private _emitChangeEvent;
}
