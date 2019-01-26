import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { OverlayModule } from '@angular/cdk/overlay'

import {
    Select
} from './select'

import {
    SelectItem
} from './select-item'

@NgModule({
    imports: [
        CommonModule,
        OverlayModule
    ],
    exports: [
        Select,
        SelectItem
    ],
    declarations: [
        Select,
        SelectItem
    ]
})
export class SelectModule {}
