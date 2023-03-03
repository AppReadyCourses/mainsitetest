import { DOCUMENT } from '@angular/common'
import {
    Component,
    Inject,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core'
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
} from '@angular/router'
import { map, mergeMap, Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'
import { NavbarDataService } from './navbar/navbarData.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'hsmynewapp'
    message: any = ''
    subscription: Subscription
    changeBg: boolean = false

    constructor(
        @Inject(DOCUMENT) private document: any,
        private renderer: Renderer2,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        // this.router.events
        //     .pipe(
        //         filter(
        //             (event: any) =>
        //                 event instanceof NavigationEnd
        //         )
        //     )
        //     .pipe(map(() => this.activatedRoute))
        //     .pipe(
        //         map((route) => {
        //             while (route.firstChild) {
        //                 route = route.firstChild
        //             }
        //             return route
        //         })
        //     )
        //     .pipe(
        //         filter(
        //             (route: any) =>
        //                 route.outlet === 'primary'
        //         )
        //     )
        //     .pipe(mergeMap((route: any) => route.data))
        //     .subscribe((event: any) =>
        //         this.updateBodyClass(event.bodyClass)
        //     )
        // var darkModeFromStorage = JSON.parse(
        //     localStorage['dark-mode']
        // )
        // if (darkModeFromStorage) {
        //     console.log(
        //         'load dark mode runs',
        //         darkModeFromStorage
        //     )
        //     console.log(
        //         'load dark mode runs test',
        //         darkModeFromStorage['darkMode']
        //     )
        //     if (darkModeFromStorage['darkMode']) {
        //         console.log('itrs true')
        //         this.renderer.addClass(
        //             this.document.body,
        //             'dark-mode'
        //         )
        //     } else {
        //         this.renderer.addClass(
        //             this.document.body,
        //             'light-mode'
        //         )
        //     }
        // }
    }

    // private updateBodyClass(customBodyClass?: string) {
    //     this.renderer.setAttribute(
    //         this.document?.body,
    //         'class1',
    //         ''
    //     )

    //     if (customBodyClass) {
    //         this.renderer.addClass(
    //             this.document?.body,
    //             customBodyClass
    //         )
    //     }
    // }
}
