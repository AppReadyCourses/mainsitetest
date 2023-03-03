import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartMainComponent } from './cart-main/cart-main.component'
import { CartRoutingModule } from './cart-routing.module'
import { NavbarModule } from '../navbar/navbar.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SharedModule } from '../shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'

import * as fromCart from './store/cart.reducers'
import { EffectsModule } from '@ngrx/effects'
import { CartEffects } from './store/cart.effects'
import { NgxPayPalModule } from 'ngx-paypal';
import { CartPaymentComponent } from './cart-payment/cart-payment.component'

@NgModule({
    declarations: [
    CartPaymentComponent
  ],
    imports: [
        CartRoutingModule,
        CommonModule,
        NavbarModule,
        AngularSvgIconModule,
        SharedModule,
        HttpClientModule,
        NgxPayPalModule,
        StoreModule.forFeature(
            fromCart.cartFeatureKey,
            fromCart.cartReducer
        ),
        EffectsModule.forFeature([CartEffects]),
    ],
})
export class CartModule {}
