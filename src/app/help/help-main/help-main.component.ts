import { Component, OnInit } from '@angular/core'
import { of } from 'rxjs'

@Component({
    selector: 'app-help-main',
    templateUrl: './help-main.component.html',
    styleUrls: ['./help-main.component.scss'],
})
export class HelpMainComponent implements OnInit {
    data = [
        {
            id: 1,
            q: 'Who are we?',
            a: 'We are developers that are passionate to show you the newest and best technology to build your websites, apps. Our full stack courses are PROJECT - DRIVEN, meaning one course will provide the entire packages that you need to build you app(UI/UX, Frontend, Backend, database, SEO, Hosting, etc), there is no need to purchase multiple courses from different developers, no need to pick up different things from mulptile sources on line',
            open: false,
        },
        {
            id: 2,
            q: 'What kind of courses you are offering?',
            a: 'We are offering Free and Paid courses, for free courses all you have to do is just sign-up, enroll the course, and you are ready to go. For paid courses, you can check the price in our course section.',
            open: false,
        },
        {
            id: 3,
            q: 'Do you have any promo, or dicounts?',
            a: 'Sorry as for now, we are not offering any discounts yet.',
            open: false,
        },
        {
            id: 4,
            q: 'What do I get if I purchase your paid course?',
            a: 'All our paid courses are life-time use after purchased, you can get our updates and ask us questions regarding to the topic through emails.',
            open: false,
        },
        {
            id: 5,
            q: 'How do I purchase your course?',
            a: 'Please go to our courses section, click - More info, you can see the detail of the course, click  - add to cart, then go to the cart section, click - place order, you can see the PayPal button - Pay with Paypal, click the button to check out.',
            open: false,
        },
        {
            id: 6,
            q: 'What payment method do you accept?',
            a: 'As for now, we only accept PayPal payment. If you are new  to PayPal, you can visit www.paypal.com to register an account',
            open: false,
        },
        {
            id: 7,
            q: 'Can I find your courses in any other platform?',
            a: 'Yes, our courses will be available on other platforms such as Udemy. We will be announcing soon.',
            open: false,
        },
        {
            id: 8,
            q: 'How can I contact you if I have more questions?',
            a: 'You can reach us at stackmy@gmail.com. We will get back to you asap',
            open: false,
        },
    ]

    showAnswer = false
    items: any

    constructor() {}

    ngOnInit(): void {
        of(this.data).subscribe((da) => {
            this.items = da
        })
    }

    showQAnswer(id: number) {
        console.log('id', id)
        // this.showAnswer = !this.showAnswer
        const findItem = this.data.find(
            (item) => item.id == id
        )
        if (findItem) {
            findItem.open = true

            console.log('findItem,', findItem)
        }
    }

    closeQAnswer(id: number) {
        const findItem = this.data.find(
            (item) => item.id == id
        )

        if (findItem) {
            findItem.open = false

            console.log('findItem,', findItem)
        }
    }
}
