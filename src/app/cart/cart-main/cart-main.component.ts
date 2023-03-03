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
import {
    Observable,
    Subscription,
    throwError,
    withLatestFrom,
} from 'rxjs'
import { Course } from 'src/app/courses/model/course.model'
import { addPaidCourseToMyLearning } from 'src/app/my-learning/store/mylearning.actions'
import { Cart } from '../model/cart.model'
import {
    addItemsToCart,
    deleteAllItemsFromCart,
    deleteItemFromCart,
    loadItemsInCart,
} from '../store/cart.actions'
import { selectLoadCart } from '../store/cart.selectors'

declare var paypal: any

@Component({
    selector: 'app-cart-main',
    templateUrl: './cart-main.component.html',
    styleUrls: ['./cart-main.component.scss'],
})
export class CartMainComponent implements OnInit {
    subscription$: Subscription
    constructor(
        private store: Store,
        private toastService: HotToastService,
        private router: Router,
        private zone: NgZone
    ) {}

    cartItems$: any = null
    cartItems: any
    coursePrice: number = 0
    totalPrice: number = 0
    token: any
    cartItemIds: any = []
    showSummary = false

    @ViewChild('paypal', { static: true })
    paypalElement: ElementRef

    noItemInCart = false

    ngOnInit(): void {
        this.store.dispatch(loadItemsInCart())

        this.cartItems$ = this.store.select(selectLoadCart)

        this.loadCart()

        this.token = localStorage.getItem('token')

        // paypal
        //     .Buttons({
        //         style: {
        //             shape: 'pill',
        //             color: 'silver',
        //             layout: 'vertical',
        //             label: 'pay',
        //         },
        //         createOrder: (data: any, actions: any) => {
        //             return fetch(
        //                 'http://localhost:4000/payments',
        //                 {
        //                     method: 'post',
        //                     headers: {
        //                         'content-type':
        //                             'application/json',
        //                     },
        //                     body: JSON.stringify({
        //                         token: this.token,
        //                     }),
        //                 }
        //             )
        //                 .then(function (res) {
        //                     console.log('res', res)
        //                     return res.json()
        //                 })
        //                 .then(function (data) {
        //                     console.log('data', data)
        //                     return data
        //                 })
        //         },

        //         onApprove: async (
        //             data: any,
        //             actions: any
        //         ) => {
        //             const order =
        //                 await actions.order.capture()
        //             console.log('order', order)

        //             if (order.status === 'COMPLETED') {
        //                 this.zone.run(() => {
        //                     this.store.dispatch(
        //                         addPaidCourseToMyLearning({
        //                             courseIds:
        //                                 this.cartItemIds,
        //                         })
        //                     )

        //                     this.store.dispatch(
        //                         deleteAllItemsFromCart()
        //                     )

        //                     this.router.navigateByUrl(
        //                         '/mylearning'
        //                     )
        //                 })
        //             }

        //             // console.log('order: ', order)
        //         },
        //         onCancel: function (
        //             data: any,
        //             actions: any
        //         ) {
        //             // Redirect to cancel url
        //             return actions.redirect('/')
        //         },

        //         onError: (err: any) => {
        //             console.log('Error: ', err)
        //         },
        //     })
        //     .render(this.paypalElement.nativeElement)
    }

    removeItem(id: any, course: any) {
        console.log('gte id', id)

        this.store.dispatch(
            deleteItemFromCart({ courseId: id })
        )

        console.log('find course', course)
        this.coursePrice =
            this.coursePrice - +course.coursePrice

        this.toastService.success('Course removed', {
            theme: 'snackbar',
            position: 'top-center',
            style: {
                padding: '16px',
                borderRadius: '1rem',
            },
        })
    }

    loadCart() {
        this.subscription$ = this.store
            .select(selectLoadCart)
            // .pipe(withLatestFrom(this.store))
            .subscribe((data: any) => {
                if (data) {
                    this.cartItems = data

                    // console.log(
                    //     'cartItems',
                    //     this.cartItems[0].id
                    // )
                }
                if (data.length > 0) {
                    this.noItemInCart = false
                } else if (data.length === 0) {
                    this.noItemInCart = true
                }
                // console.log('load card data', data.length)

                if (data) {
                }
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

    buyNow() {}

    red() {
        this.router
            .navigateByUrl('/', {
                skipLocationChange: true,
            })
            .then(() =>
                this.router.navigate(['/mylearning'])
            )
    }

    // test() {
    //     this.store.dispatch(
    //         addPaidCourseToMyLearning({
    //             courseIds: this.cartItemIds,
    //         })
    //     )
    // }

    emptyMycart() {
        this.store.dispatch(deleteAllItemsFromCart())
    }

    placeOrder() {
        this.router.navigate(['/cart/pay'])
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
    }
}
