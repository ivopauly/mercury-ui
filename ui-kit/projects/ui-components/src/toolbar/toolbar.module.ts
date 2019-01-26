import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Toolbar
} from './toolbar'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Toolbar
    ],
    declarations: [
        Toolbar
    ]
})
export class ToolbarModule {}
