import { ThisReceiver } from '@angular/compiler'
import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HotToastService } from '@ngneat/hot-toast'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Course } from 'src/app/courses/model/course.model'
import { NavbarDataService } from 'src/app/navbar/navbarData.service'
import { MyLearning } from '../model/mylearning.model'
import {
    deleteFreeCourseFromMyLearning,
    getCourseFromMyLearning,
} from '../store/mylearning.actions'
import {
    selectCoursesFromMyLearning,
    selectFreeCoursesFromML,
    selectMyLearningErrors,
    selectPaidCoursesFromML,
} from '../store/mylearning.selectors'

// import { loadCoursesByUserId } from '../store/mylearning.actions'
// import {
//     selectCombineLoadCoursesAndEnrollCourseByUser,
//     selectCoursesByUserId,
//     selectFreeCoursesEnrolledByUserId,
//     selectPaidCoursesEnrolledByUserId,
//     slectcourseFromLearn,
// } from '../store/mylearning.selectors'

@Component({
    selector: 'app-my-learning-main',
    templateUrl: './my-learning-main.component.html',
    styleUrls: ['./my-learning-main.component.scss'],
})
export class MyLearningMainComponent implements OnInit {
    private subscription$: Subscription
    courses$: Observable<any[]>
    courses: Course[]
    allListeners: (() => void)[] = []
    valueStatusFree = false
    coursesCount: any = null
    valueStatusPaid = false
    valueStatusMyCourses = false
    valueStatusSetNormal = false
    changeBg = false
    noCourseToShow = false
    courseArray: any = []

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private navbarDataService: NavbarDataService,
        private toastService: HotToastService
    ) {}

    ngOnInit(): void {
        this.store.dispatch(getCourseFromMyLearning())

        this.getAllCourses()

        this.subscription$ = this.store
            .select(selectMyLearningErrors)
            .subscribe((error) => {
                // if (error) {
                //     this.toastService.error(`${error}`, {
                //         theme: 'snackbar',
                //         position: 'top-center',
                //         style: {
                //             padding: '10px',
                //             borderRadius: '1rem',
                //         },
                //     })
                // }
                // console.log('get errors', error)
            })
    }

    ngAfterViewInit() {}

    getAllCourses() {
        console.log('getAllCourses click')

        this.valueStatusFree = false
        this.valueStatusPaid = false
        this.valueStatusMyCourses = true
        this.valueStatusSetNormal = false

        this.courses$ = this.store.select(
            selectCoursesFromMyLearning
        )

        this.subscription$ = this.store
            .select(selectCoursesFromMyLearning)
            .subscribe((data) => {
                // if (data) {
                //     this.cartItems = data
                // }
                this.courseArray = data
                this.coursesCount = data.length
                if (data.length > 0) {
                    this.noCourseToShow = false
                } else if (data.length === 0) {
                    this.noCourseToShow = true
                }
                console.log(
                    'my learning  data',
                    this.courseArray
                )
            })
    }

    getPaidCourses() {
        console.log('getPaidCourses click')
        // handle views
        this.valueStatusFree = false
        this.valueStatusPaid = true
        this.valueStatusMyCourses = false
        this.valueStatusSetNormal = true
        this.courses$ = this.store.select(
            selectPaidCoursesFromML
        )
    }

    getFreeCourses() {
        console.log('getFreeCourses click')

        this.valueStatusPaid = false
        this.valueStatusFree = true
        this.valueStatusMyCourses = false
        this.valueStatusSetNormal = true
        this.courses$ = this.store.select(
            selectFreeCoursesFromML
        )
    }

    deleteFreeCourse(courseId: any) {
        const findCourse = this.courseArray.find(
            (course: Course) => course.id === courseId
        )
        // console.log('findCourse', findCourse)
        if (findCourse.courseType === 'free') {
            this.store.dispatch(
                deleteFreeCourseFromMyLearning({ courseId })
            )
            this.toastService.success('Course removed.', {
                theme: 'snackbar',
                position: 'top-center',
                style: {
                    padding: '10px',
                    borderRadius: '1rem',
                },
            })
        }
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
    }
}
