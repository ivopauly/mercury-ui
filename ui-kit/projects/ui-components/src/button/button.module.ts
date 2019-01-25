import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Button
} from './button'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Button
    ],
    declarations: [
        Button
    ]
})
export class ButtonModule {}
