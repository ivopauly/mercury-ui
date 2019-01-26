import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    HgList
} from './list'

import { 
    HgListItem
} from './list-item'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HgList,
        HgListItem
    ],
    declarations: [
        HgList,
        HgListItem
    ]
})
export class HgListModule {}
