import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgSidebar
} from './sidebar'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgSidebar
    ],
    declarations: [
        HgSidebar
    ]
})
export class HgSidebarModule {}
