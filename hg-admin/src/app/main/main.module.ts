import { NgModule } from '@angular/core'

import { CoreModule } from '../core/core.module'

import { ComponentsModule } from '../components/components.module'
// Routing
import { routing } from './main.routing'

// Components
import { MainComponent } from './main.component'
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    routing
  ],
  declarations: [
    MainComponent, 
    DashboardComponent
  ],
})
export class MainModule { }
