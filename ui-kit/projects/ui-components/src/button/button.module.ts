import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgButton
} from './button'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgButton
    ],
    declarations: [
        HgButton
    ]
})
export class HgButtonModule {}
