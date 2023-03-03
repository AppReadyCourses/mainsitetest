import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../auth/login/login.component'
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingRoutingModule {}
