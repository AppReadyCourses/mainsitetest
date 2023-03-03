import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileMainComponent } from './profile-main/profile-main.component'
import { ProfileRoutingModule } from './profile-routing.module'
import { NavbarModule } from '../navbar/navbar.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SharedModule } from '../shared/shared.module'
import { VimeModule } from '@vime/angular'

@NgModule({
    declarations: [ProfileMainComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NavbarModule,
        AngularSvgIconModule,
        SharedModule,
        VimeModule,
    ],
})
export class ProfileModule {}
