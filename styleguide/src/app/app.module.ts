import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FlexLayoutModule } from '@angular/flex-layout'

import {
  HgButtonModule
} from '@mercury/ui-components'
//from '../../../ui-kit/projects/ui-components/src/public_api'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HgButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
