import { Routes, RouterModule } from '@angular/router'

// Components
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component'

const authRoutes: Routes = [
    {
        path: '', component: AuthComponent, children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'login'
            },
            {
                path: 'login', component: LoginComponent
            }
        ]
    }
]

export const routing = RouterModule.forChild(authRoutes)
