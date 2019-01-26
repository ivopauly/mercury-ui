import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgCard
} from './card'


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgCard
    ],
    declarations: [
        HgCard
    ]
})
export class HgCardModule {}
