import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgToolbar
} from './toolbar'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgToolbar
    ],
    declarations: [
        HgToolbar
    ]
})
export class HgToolbarModule {}
