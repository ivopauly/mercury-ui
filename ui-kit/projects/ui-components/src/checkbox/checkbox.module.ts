import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgCheckbox
} from './checkbox'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgCheckbox
    ],
    declarations: [
        HgCheckbox
    ]
})
export class HgCheckboxModule {}
