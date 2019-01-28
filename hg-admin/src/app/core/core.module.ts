import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { FlexLayoutModule } from '@angular/flex-layout'

import {
  HgCardModule,
  HgButtonModule
} from '@mercury/ui-components'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    HgCardModule,
    HgButtonModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    HgCardModule,
    HgButtonModule,
  ]
})
export class CoreModule { }
