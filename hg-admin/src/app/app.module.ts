import { BrowserModule } from '@angular/platform-browser'

import { NgModule } from '@angular/core'

import { CoreModule } from './core/core.module'

// Routing
import { routing } from './app.routing'

// Components
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
