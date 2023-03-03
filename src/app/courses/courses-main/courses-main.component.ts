import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
} from '@angular/core'
import { select, Store } from '@ngrx/store'
import { DarkModeService } from 'angular-dark-mode'
import { Observable, Subscription } from 'rxjs'

import { Course } from '../model/course.model'

import {
    deleteCourse,
    loadCourse,
    loadCourses,
} from '../store/course.actions'
import { CourseState } from '../store/course.reducer'
import {
    selectCourse,
    selectCourses,
    selectFreeCourses,
    selectPaidCourses,
} from '../store/course.selectors'

@Component({
    selector: 'app-courses-main',
    templateUrl: './courses-main.component.html',
    styleUrls: ['./courses-main.component.scss'],
})
export class CoursesMainComponent implements OnInit {
    constructor(
        private store: Store<CourseState>,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private darkModeService: DarkModeService
    ) {}

    itsDark = false
    darkMode$ = this.darkModeService.darkMode$
    subscription$: Subscription
    courses$: Observable<Course[]>
    freeCourses$: Observable<Course[]>
    paidCourses$: Observable<Course[]>
    coursesArray: Course[]
    course$: Observable<Course>
    searchBarShow = false
    valueStatusFree = false
    valueStatusPaid = false
    valueStatusMyCourses = false
    valueStatusSetNormal = false
    allListeners: (() => void)[] = []

    ngOnInit(): void {
        this.store.dispatch(loadCourses())

        this.courses$ = this.store.select(selectCourses)
    }

    // ngAfterViewInit() {
    //     const myComponent = this.elementRef
    //         .nativeElement as HTMLElement

    //     const clickableElements =
    //         myComponent.querySelectorAll('a')

    //     clickableElements.forEach((eachElem) => {
    //         const listener = this.renderer.listen(
    //             eachElem,
    //             'click',
    //             () => {
    //                 console.log(
    //                     'course - main Element clicked',
    //                     eachElem.textContent
    //                 )
    //                 // Close sidenav

    //                 if (eachElem.textContent === 'Free') {
    //                     this.valueStatusPaid = false
    //                     this.valueStatusFree = true
    //                     this.valueStatusMyCourses = false
    //                     this.valueStatusSetNormal = true
    //                 } else if (
    //                     eachElem.textContent === 'Paid'
    //                 ) {
    //                     this.valueStatusFree = false
    //                     this.valueStatusPaid = true
    //                     this.valueStatusMyCourses = false
    //                     this.valueStatusSetNormal = true
    //                 } else if (
    //                     eachElem.textContent ===
    //                     'Our Courses'
    //                 ) {
    //                     this.valueStatusFree = false
    //                     this.valueStatusPaid = false
    //                     this.valueStatusMyCourses = true
    //                     this.valueStatusSetNormal = false
    //                 }
    //             }
    //         )
    //         this.allListeners.push(listener)
    //     })
    // }

    // getAllCourses() {
    //     this.courses$ = this.store.select(selectCourses)
    // }

    // getPaidCourses() {
    //     this.courses$ = this.store.select(selectPaidCourses)
    // }
    // getFreeCourses() {
    //     this.courses$ = this.store.select(selectFreeCourses)
    // }

    // deleteCourse(id: any) {
    //     this.store.dispatch(deleteCourse({ id }))
    //     this.store.dispatch(loadCourses())
    // }

    // openSearchBar() {
    //     this.searchBarShow = !this.searchBarShow
    // }

    // getKeys(obj: any) {
    //     return Object.keys(obj)
    // }

    ngOnDestroy() {
        // this.subscription$.unsubscribe()
        this.allListeners.forEach((listener) => listener())
    }

    onToggle(): void {
        this.darkModeService.toggle()
        this.itsDark = !this.itsDark
    }
}
