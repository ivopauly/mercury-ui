import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    Sidebar
} from './sidebar'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Sidebar
    ],
    declarations: [
        Sidebar
    ]
})
export class SidebarModule {}
