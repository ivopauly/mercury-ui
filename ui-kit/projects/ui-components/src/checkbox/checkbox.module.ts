import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Checkbox
} from './checkbox'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Checkbox
    ],
    declarations: [
        Checkbox
    ]
})
export class CheckboxModule {}
