import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http'
import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
// import * as paypal from '@paypal/checkout-server-sdk'
import {
    IPayPalConfig,
    ICreateOrderRequest,
} from 'ngx-paypal'
import { PricingModule } from '../pricing.module'
import { Router } from '@angular/router'

declare var paypal: any

@Component({
    selector: 'app-pricing-main',
    templateUrl: './pricing-main.component.html',
    styleUrls: ['./pricing-main.component.scss'],
})
export class PricingMainComponent implements OnInit {
    @ViewChild('paypal', { static: true })
    paypalElement: ElementRef
    product = {
        description: 'A new Course',
        price: 10,
    }
    public payPalConfig?: IPayPalConfig

    orderId: any

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods':
            'GET,POST,OPTIONS,DELETE,PUT',
    })
    // options: {
    //     headers?:
    //         | HttpHeaders
    //         | { [header: string]: string | string[] }
    //     observe?: 'body' | 'events' | 'response'
    //     params?:
    //         | HttpParams
    //         | {
    //               [param: string]:
    //                   | string
    //                   | number
    //                   | boolean
    //                   | ReadonlyArray<
    //                         string | number | boolean
    //                     >
    //           }
    //     reportProgress?: boolean
    //     responseType?:
    //         | 'arraybuffer'
    //         | 'blob'
    //         | 'json'
    //         | 'text'
    //     withCredentials?: boolean
    // }

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.initConfig()
        // paypal
        //     .Buttons({
        //         style: {
        //             shape: 'rect',
        //             color: 'gold',
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
        //                         userId: '1234567890',
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
        //             console.log('order: ', order)
        //         },
        //         onCancel: function (
        //             data: any,
        //             actions: any
        //         ) {
        //             return actions.redirect('/')
        //         },
        //         onError: (err: any) => {
        //             console.log('Error: ', err)
        //         },
        //     })
        //     .render(this.paypalElement.nativeElement)
    }

    checkOut() {
        // this.http
        //     .post(
        //         'http://localhost:4000/payments',
        //         this.headers
        //     )
        //     .subscribe((h: any) => {
        //         console.log('get paymenst data', h)
        //         // this.orderId = h.result.id
        //     })
        // Example POST method implementation:
        // fetch('http://localhost:4000/payments', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers':
        //             'Content-Type',
        //         'Access-Control-Allow-Methods':
        //             'GET,POST,OPTIONS,DELETE,PUT',
        //     },
        // }).then((data) => {
        //     console.log(data) // JSON data parsed by `data.json()` call
        // })
    }
}
