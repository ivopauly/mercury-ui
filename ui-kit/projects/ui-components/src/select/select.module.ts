import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { OverlayModule } from '@angular/cdk/overlay'

import {
    HgSelect
} from './select'

import {
    HgSelectItem
} from './select-item'

@NgModule({
    imports: [
        CommonModule,
        OverlayModule
    ],
    exports: [
        HgSelect,
        HgSelectItem
    ],
    declarations: [
        HgSelect,
        HgSelectItem
    ]
})
export class HgSelectModule {}
