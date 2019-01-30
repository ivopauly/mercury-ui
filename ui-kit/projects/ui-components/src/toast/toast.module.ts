import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { OverlayModule } from '@angular/cdk/overlay'

import {
    HgToast, HgToastComponent
} from './toast'

@NgModule({
    imports: [
        CommonModule,
        OverlayModule
    ],
    declarations: [
        HgToastComponent
    ],
    providers: [
        HgToast
    ],
    entryComponents: [
        HgToastComponent
    ],
    exports: [
    ]
})
export class HgToastModule {}

