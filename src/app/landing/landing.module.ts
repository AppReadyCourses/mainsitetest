import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { NavbarModule } from '../navbar/navbar.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { HttpClientModule } from '@angular/common/http'
import { GalleryModule } from 'ng-gallery'

import { LandingRoutingModule } from './landing-routing.module'

import { LogoutComponent } from './logout/logout.component'
import { RegisterComponent } from '../auth/register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
    declarations: [LandingPageComponent, LogoutComponent, AboutusComponent],
    imports: [
        CommonModule,
        NavbarModule,
        HttpClientModule,
        AngularSvgIconModule,
        ReactiveFormsModule,
        LandingRoutingModule,
        GalleryModule.withConfig({
            autoPlay: true,
            loop: true,
        }),
    ],
    exports: [LandingPageComponent],
})
export class LandingModule {}
