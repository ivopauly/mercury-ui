import { Routes, RouterModule } from '@angular/router'

import { OverviewComponent } from './overview/overview.component'

const devicesRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'overview'
    },
    {
        path: 'overview', component: OverviewComponent
    }
]

export const routing = RouterModule.forChild(devicesRoutes)
