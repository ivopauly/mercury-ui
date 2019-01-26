import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Slider
} from './slider'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Slider
    ],
    declarations: [
        Slider
    ]
})
export class SliderModule {}
