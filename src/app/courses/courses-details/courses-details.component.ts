import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { Observable, Subscription } from 'rxjs'
import { HotToastService } from '@ngneat/hot-toast'
import {
    addItemsToCart,
    loadItemsInCart,
} from 'src/app/cart/store/cart.actions'
import { selectLoadCart } from 'src/app/cart/store/cart.selectors'
import {
    addFreeCourseToMyLearning,
    getCourseFromMyLearning,
} from 'src/app/my-learning/store/mylearning.actions'
import {
    selectCoursesFromMyLearning,
    selectFreeCoursesFromML,
} from 'src/app/my-learning/store/mylearning.selectors'
import { Course } from '../model/course.model'
import {
    fetchUserProfile,
    findCoursesByCurrentUser,
    loadCourse,
} from '../store/course.actions'
import { selectCourse } from '../store/course.selectors'

@Component({
    selector: 'app-courses-details',
    templateUrl: './courses-details.component.html',
    styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store,
        private toastService: HotToastService
    ) {}

    subscription$: Subscription
    subscription2$: Subscription
    course$: Observable<Course>
    singleCourse: Course
    isPaidCourse = true
    courseId: any
    userId: any
    cartItems: any
    matchCourseInCart = true
    continueToStudy = false
    notYetEnrollML = true

    ngOnInit(): void {
        this.courseId =
            this.route.snapshot.paramMap.get('id')
        console.log('courseId', this.courseId)

        // Load cart
        this.store.dispatch(loadItemsInCart())

        // Load mylearning
        this.store.dispatch(getCourseFromMyLearning())

        this.store.dispatch(
            loadCourse({ id: this.courseId })
        )

        this.subscription$ = this.store
            .select(selectLoadCart)
            .subscribe((data) => {
                // console.log(
                //     'selectLoadCart in course',
                //     data
                // )
                const checkCourseInCart = data.find(
                    (course) => course.id === this.courseId
                )
                // console.log(
                //     'selectLoadCart in course checkCourse',
                //     checkCourseInCart
                // )

                if (checkCourseInCart) {
                    this.matchCourseInCart = false
                }
            })

        this.loadCourse()

        this.loadMyLearning()
    }

    loadMyLearning() {
        this.subscription$ = this.store
            .select(selectCoursesFromMyLearning)
            .subscribe((data: any) => {
                console.log(
                    'my learning data in course',
                    data
                )

                const findCourse = data.filter(
                    (course: any) =>
                        course.id === this.courseId
                )
                console.log('findCourse', findCourse.length)

                if (findCourse.length === 0) {
                    console.log('course not in my learning')
                    this.continueToStudy = false
                    this.notYetEnrollML = true
                } else if (findCourse.length === 1) {
                    console.log(
                        'course already in my learning'
                    )
                    this.continueToStudy = true
                    this.notYetEnrollML = false
                }
            })
    }

    loadCourse() {
        this.subscription2$ = this.store
            .select(selectCourse)
            .subscribe((data: Course) => {
                this.singleCourse = data
                // console.log('course', data)
                if (data) {
                    if (data.courseType === 'free') {
                        this.isPaidCourse = false
                    } else if (data.courseType === 'paid') {
                        this.isPaidCourse = true
                        this.continueToStudy = false
                    }
                }
            })
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
        this.subscription2$.unsubscribe()
    }

    enrollCourse() {
        this.store.dispatch(
            addFreeCourseToMyLearning({
                courseId: this.courseId,
            })
        )

        this.isPaidCourse = !this.isPaidCourse
        this.continueToStudy = true
        this.toastService.success(
            'Course added to my learning',
            {
                // autoClose: true,
                // dismissible: true,
                theme: 'snackbar',
                // icon: '✅',
                position: 'top-center',
                style: {
                    // border: '1px solid #ef473a',
                    padding: '16px',
                    borderRadius: '1rem',
                    // color: 'rgb(238, 238, 238)',
                    // background: 'rgb(40,40,40)',
                },
            }
        )
    }

    // }

    addCourseToCart(id: any) {
        console.log('get id', id)
        this.store.dispatch(
            addItemsToCart({ courseId: id })
        )

        this.toastService.success(
            'Course added to my cart',
            {
                theme: 'snackbar',
                position: 'top-center',
                style: {
                    padding: '16px',
                    borderRadius: '1rem',
                },
            }
        )
    }
}
