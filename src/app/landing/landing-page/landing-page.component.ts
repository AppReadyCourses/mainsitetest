import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map, Observable, Subscription } from 'rxjs'
import { GalleryItem, ImageItem } from 'ng-gallery'
import { Router } from '@angular/router'
import { DarkModeService } from 'angular-dark-mode'

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],

    // encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {
    constructor(
        private apollo: Apollo,
        private router: Router,
        private elementRef: ElementRef,
        private darkModeService: DarkModeService
    ) {}
    itsDark = false
    darkMode$ = this.darkModeService.darkMode$
    users: any
    ideas: any
    alreadySignedIn = false
    courses$: Observable<any[]>
    foundUser = false

    ngAfterViewInit() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        //     '#1B1B1B'
    }

    images: GalleryItem[]

    private querySubscription: Subscription

    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.alreadySignedIn = true
        } else {
            this.alreadySignedIn = false
        }

        this.darkMode$.subscribe((v) => {
            console.log('dark mode valuie', v)
        })
    }

    signout() {
        localStorage.removeItem('token')
        let currentUrl = this.router.url
        this.router.routeReuseStrategy.shouldReuseRoute =
            () => false
        this.router.onSameUrlNavigation = 'reload'
        this.router.navigate([currentUrl])
        window.location.reload()
    }

    onToggle(): void {
        this.darkModeService.toggle()
        this.itsDark = !this.itsDark
    }
}
