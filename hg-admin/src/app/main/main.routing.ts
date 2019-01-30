import { Routes, RouterModule } from '@angular/router'

// Components
import { MainComponent } from './main.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'dashboard'
            },
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'media', loadChildren: '../media/media.module#MediaModule'
            },
            {
                path: 'devices', loadChildren: '../devices/devices.module#DevicesModule'
            }
        ]
    }
]

export const routing = RouterModule.forChild(mainRoutes)
