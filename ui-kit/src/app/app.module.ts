import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { ToastModule, ButtonModule } from '../../projects/ui-components/src/public_api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
