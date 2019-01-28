import { NgModule } from '@angular/core'

import { CoreModule } from '../core/core.module'

// Routing
import { routing } from './auth.routing'

// Services
import { AuthService } from './auth.service'

// Components
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    CoreModule,
    routing
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
