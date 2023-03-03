import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarRoutingModule } from './navbar-routing.module'
import { NavbarMainComponent } from './navbar-main/navbar-main.component'
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { HttpClientModule } from '@angular/common/http'

import { MenuMainComponent } from './menu-main/menu-main.component'
import { SidebarMenuMainComponent } from './sidebar-menu-main/sidebar-menu-main.component'
import { NavbarWideComponent } from './navbar-side/navbar-wide.component'
import { NavbarSimpleComponent } from './navbar-simple/navbar-simple.component';
import { NewnavbarComponent } from './newnavbar/newnavbar.component'

@NgModule({
    declarations: [
        NavbarMainComponent,
        NavbarProfileComponent,
        MenuMainComponent,
        SidebarMenuMainComponent,
        NavbarWideComponent,
        NavbarSimpleComponent,
        NewnavbarComponent,
    ],
    imports: [
        CommonModule,
        NavbarRoutingModule,
        HttpClientModule,
        AngularSvgIconModule,
    ],
    exports: [
        NavbarMainComponent,
        MenuMainComponent,
        NavbarSimpleComponent,
        SidebarMenuMainComponent,
        NavbarWideComponent,
        NewnavbarComponent
    ],
})
export class NavbarModule {}
