import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { DarkModeService } from 'angular-dark-mode'
import { Apollo, gql } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { Cart } from 'src/app/cart/model/cart.model'
import {
    deleteItemFromCart,
    loadItemsInCart,
} from 'src/app/cart/store/cart.actions'
import { selectLoadCart } from 'src/app/cart/store/cart.selectors'
import { NavbarDataService } from '../navbarData.service'

@Component({
    selector: 'app-navbar-wide',
    templateUrl: './navbar-wide.component.html',
    styleUrls: ['./navbar-wide.component.scss'],
})
export class NavbarWideComponent implements OnInit {
    itsDark = false
    darkMode$ = this.darkModeService.darkMode$
    subscription$: Subscription
    subscription2$: Subscription
    logInCondition = false
    logOutCondition = false
    showModal = false
    username: string
    interestedIn: string
    avatar: string
    showCartModal = false
    cartItems$: any = null
    cartItems: any = null
    totalPrice = 0

    // private querySubscription: Subscription
    constructor(
        private navbarDataService: NavbarDataService,
        private apollo: Apollo,
        private router: Router,
        private store: Store<Cart>,
        private darkModeService: DarkModeService
    ) {}

    ngOnInit(): void {
        const token = localStorage.getItem('token')
        if (token) {
            this.logInCondition = false
            this.logOutCondition = true
        } else {
            this.logInCondition = true
            this.logOutCondition = false
        }

        // this.darkMode$.subscribe((v) => {
        //     console.log('dark mode valuie', v)
        // })

        // console.log('ngoninit runs')
        this.subscription$ = this.apollo
            .watchQuery<any>({
                query: FETCH_USER_PROFILE_ONLY,
            })
            .valueChanges.subscribe(({ data }: any) => {
                // console.log('data from navbar', data)
                if (data) {
                    this.username = data.whoAmI.username
                    this.interestedIn =
                        data.whoAmI.interestedIn
                    this.avatar = data.whoAmI.avatar
                    // console.log(
                    //     'data who am i',
                    //     data.whoAmI
                    // )
                }
            })

        // this.store.dispatch(loadItemsInCart())
        this.cartItems$ = this.store.select(selectLoadCart)

        this.subscription2$ = this.store
            .select(selectLoadCart)
            .subscribe((data: any) => {
                if (data) {
                    this.cartItems = data
                    // console.log('nav bar    data', data)
                    let price = 0
                    for (let i = 0; i < data.length; i++) {
                        // console.log('i', i)
                        price = price + +data[i].coursePrice
                    }
                    this.totalPrice = price
                    // console.log(
                    //     'course price in llop',
                    //     price
                    // )
                }
            })
    }

    deleteItemFromCart(courseId: any, coursePrice: any) {
        console.log('coursePrice', coursePrice)
        this.store.dispatch(
            deleteItemFromCart({ courseId })
        )
        if (coursePrice && this.totalPrice) {
            this.totalPrice =
                this.totalPrice - +coursePrice.coursePrice
        }
        // console.log('price after delete', this.totalPrice)
    }

    logout() {
        // console.log('logout runs')

        this.showModal = !this.showModal
    }
    modalClose() {
        this.showModal = !this.showModal
    }

    cartModalClose() {
        this.showCartModal = !this.showCartModal
    }

    modalLogOut() {
        this.showModal = !this.showModal
        localStorage.removeItem('token')
        this.router.navigate(['/'])
    }

    goToCart() {
        this.showCartModal = false
    }

    ngOnDestroy() {
        // this.querySubscription.unsubscribe()
        this.subscription$.unsubscribe()
        this.subscription2$.unsubscribe()
    }

    signin() {
        this.router.navigate(['/auth/signin'])
    }

    showCart() {
        this.showCartModal = !this.showCartModal
    }

    onToggle(): void {
        this.darkModeService.toggle()
        this.itsDark = !this.itsDark
    }
}

const FETCH_USER_PROFILE_ONLY = gql`
    query {
        whoAmI {
            id
            username
            email
            interestedIn
            avatar
        }
    }
`
