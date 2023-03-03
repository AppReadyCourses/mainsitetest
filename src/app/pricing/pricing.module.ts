import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PricingMainComponent } from './pricing-main/pricing-main.component'
import { PricingRoutingModule } from './pricing-routing.module'
import { NavbarModule } from '../navbar/navbar.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SharedModule } from '../shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { NgxPayPalModule } from 'ngx-paypal'

@NgModule({
    declarations: [PricingMainComponent],

    imports: [
        PricingRoutingModule,
        CommonModule,
        NavbarModule,
        AngularSvgIconModule,
        SharedModule,
        HttpClientModule,
        NgxPayPalModule,
    ],
})
export class PricingModule {}
