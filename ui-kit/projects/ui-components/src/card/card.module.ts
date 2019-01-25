import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Card
} from './card'


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Card
    ],
    declarations: [
        Card
    ]
})
export class CardModule {}
