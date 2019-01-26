import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgSlider
} from './slider'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgSlider
    ],
    declarations: [
        HgSlider
    ]
})
export class HgSliderModule {}
