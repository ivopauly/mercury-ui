import { NgModule } from '@angular/core'

import { CoreModule } from '../core/core.module'

// Components
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    HeaderComponent, 
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
