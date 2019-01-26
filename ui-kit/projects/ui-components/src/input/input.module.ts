import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Input
} from './input'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Input
    ],
    declarations: [
        Input
    ]
})
export class InputModule {}
