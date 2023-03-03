import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CartMainComponent } from './cart-main/cart-main.component'
import { CartPaymentComponent } from './cart-payment/cart-payment.component'

const routes: Routes = [
    {
        path: 'pay',
        component: CartPaymentComponent,
    },
    {
        path: '',
        component: CartMainComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CartRoutingModule {}
