import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { HgToastModule, HgButtonModule } from '../../projects/ui-components/src/public_api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HgToastModule,
    HgButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
