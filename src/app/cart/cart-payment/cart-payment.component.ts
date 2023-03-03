import {
    Component,
    ElementRef,
    NgZone,
    OnInit,
    ViewChild,
} from '@angular/core'
import { Router } from '@angular/router'
import { HotToastService } from '@ngneat/hot-toast'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { Course } from 'src/app/courses/model/course.model'
import { addPaidCourseToMyLearning } from 'src/app/my-learning/store/mylearning.actions'
import {
    deleteAllItemsFromCart,
    loadItemsInCart,
} from '../store/cart.actions'
import { selectLoadCart } from '../store/cart.selectors'

declare var paypal: any

@Component({
    selector: 'app-cart-payment',
    templateUrl: './cart-payment.component.html',
    styleUrls: ['./cart-payment.component.scss'],
})
export class CartPaymentComponent implements OnInit {
    @ViewChild('paypal', { static: true })
    paypalElement: ElementRef
    subscription$: Subscription
    cartItems$: any = null
    totalPrice: number = 0
    cartItems: any
    coursePrice: number = 0
    token: any
    cartItemIds: any = []
    noItemInCart = false

    constructor(
        private store: Store,
        private toastService: HotToastService,
        private router: Router,
        private zone: NgZone
    ) {}

    ngOnInit(): void {
        this.store.dispatch(loadItemsInCart())

        this.cartItems$ = this.store.select(selectLoadCart)

        this.loadCart()

        this.token = localStorage.getItem('token')

        paypal
            .Buttons({
                style: {
                    shape: 'pill',
                    color: 'silver',
                    layout: 'vertical',
                    label: 'pay',
                },
                createOrder: (data: any, actions: any) => {
                    // return actions.order.create({
                    //     purchase_units: [
                    //         {
                    //             description:
                    //                 this.product
                    //                     .description,
                    //             amount: {
                    //                 currency_code: 'USD',
                    //                 value: this.product
                    //                     .price,
                    //             },
                    //         },
                    //     ],
                    // })
                    return fetch(
                        'http://localhost:4000/payments',
                        {
                            method: 'post',
                            headers: {
                                'content-type':
                                    'application/json',
                            },
                            body: JSON.stringify({
                                token: this.token,
                            }),
                        }
                    )
                        .then(function (res) {
                            console.log('res', res)
                            return res.json()
                        })
                        .then(function (data) {
                            console.log('data', data)
                            return data
                        })
                },

                onApprove: async (
                    data: any,
                    actions: any
                ) => {
                    const order =
                        await actions.order.capture()
                    console.log('order', order)

                    if (order.status === 'COMPLETED') {
                        this.zone.run(() => {
                            this.store.dispatch(
                                addPaidCourseToMyLearning({
                                    courseIds:
                                        this.cartItemIds,
                                })
                            )

                            this.store.dispatch(
                                deleteAllItemsFromCart()
                            )

                            this.router.navigateByUrl(
                                '/mylearning'
                            )
                        })
                    }

                    // console.log('order: ', order)
                },
                onCancel: function (
                    data: any,
                    actions: any
                ) {
                    // Redirect to cancel url
                    return actions.redirect('/')
                },

                onError: (err: any) => {
                    console.log('Error: ', err)
                },
            })
            .render(this.paypalElement.nativeElement)
    }

    loadCart() {
        this.subscription$ = this.store
            .select(selectLoadCart)
            // .pipe(withLatestFrom(this.store))
            .subscribe((data: any) => {
                if (data) {
                    this.cartItems = data
                    this.noItemInCart = true
                    // console.log(
                    //     'cartItems',
                    //     this.cartItems[0].id
                    // )
                }

                console.log('load pay cart data', data)

                let price = 0
                for (let i = 0; i < data.length; i++) {
                    // console.log('i', i)
                    price = price + +data[i].coursePrice
                }

                let newArray: any = []
                let newArrayIds: any = []

                if (newArray.includes(data) === false) {
                    newArray.push(data)
                }

                this.cartItemIds = newArray[0].map(
                    (res: Course) => res.id
                )

                this.totalPrice = price

                console.log('cart item', this.cartItems)
                console.log('newArray', newArray)
                console.log('newArrayIds', newArrayIds)
                // console.log('filtered', filtered)
                // console.log('course price in llop', price)
                console.log(
                    'this.cartItemIds',
                    this.cartItemIds
                )
            })
    }

    cancelOrder() {
        console.log('cancel order btn clicked')
        this.router.navigateByUrl('/cart')
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
    }

    clicked() {
        console.log('you cliekd')
    }
}
