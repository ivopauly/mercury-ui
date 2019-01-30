import { NgModule } from '@angular/core'

import { CoreModule } from '../core/core.module'

// Routing
import { routing } from './media.routing'

// Components
import { OverviewComponent } from './overview/overview.component'

@NgModule({
  imports: [
    CoreModule,
    routing
  ],
  declarations: [
    OverviewComponent
  ]
})
export class MediaModule { }
