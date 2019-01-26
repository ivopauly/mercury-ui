import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { OverlayModule } from '@angular/cdk/overlay'

import {
    Toast, ToastComponent
} from './toast'

@NgModule({
    imports: [
        CommonModule,
        OverlayModule
    ],
    declarations: [
        ToastComponent
    ],
    providers: [
        Toast
    ],
    entryComponents: [
        ToastComponent
    ],
    exports: [
        ToastComponent
    ]
})
export class ToastModule {}

