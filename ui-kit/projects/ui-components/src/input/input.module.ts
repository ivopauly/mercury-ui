import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgInput
} from './input'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgInput
    ],
    declarations: [
        HgInput
    ]
})
export class HgInputModule {}
