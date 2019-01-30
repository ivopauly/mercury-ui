import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/auth'
    },
    {
        path: 'auth', loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'main', loadChildren: './main/main.module#MainModule'
    }
]

export const routing = RouterModule.forRoot(appRoutes)
