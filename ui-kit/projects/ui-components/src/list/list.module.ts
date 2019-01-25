import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
    List
} from './list'

import { 
    ListItem
} from './list-item'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        List,
        ListItem
    ],
    declarations: [
        List,
        ListItem
    ]
})
export class ListModule {}
