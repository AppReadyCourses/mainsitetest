import { Component, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Update } from '@ngrx/entity'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Course } from '../model/course.model'
import {
    loadCourse,
    loadCourses,
    updateCourse,
} from '../store/course.actions'
import {
    selectCourse,
    selectCourses,
} from '../store/course.selectors'

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
    private subscription$: Subscription
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>
    courses$: Observable<Course[]>
    course$: Observable<Course>
    singleCourse: Course

    getErrors$: Observable<string | null>
    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        const courseId: any =
            this.route.snapshot.paramMap.get('id')
        console.log('courseId', courseId)

        if (courseId) {
            this.store.dispatch(
                loadCourse({ id: courseId })
            )
        }

        this.course$ = this.store.select(selectCourse)

        this.subscription$ = this.store
            .select(selectCourse)
            .subscribe((data) => {
                this.singleCourse = data
                this.loadCourse()
            })
    }

    loadCourse() {
        // console.log(
        //     'load course - edit- course form',
        //     this.singleCourse
        // )
        this.myForm = this.fb.group({
            courseName: this.fb.control(
                (this.singleCourse &&
                    this.singleCourse.courseName) ||
                    ''
            ),
            courseIntroduction: this.fb.control(
                (this.singleCourse &&
                    this.singleCourse.courseIntroduction) ||
                    ''
            ),
            courseType: this.fb.control(
                (this.singleCourse &&
                    this.singleCourse.courseType) ||
                    ''
            ),
        })
    }

    onSubmit(form: FormGroup) {
        // console.log('Valid?', form.valid);
        // console.log('form.value', form.value);

        const id: any =
            this.route.snapshot.paramMap.get('id')

        // console.log('on submit id', idToNum);

        const update: Update<Course> = {
            id: id,
            changes: form.value,
        }

        console.log('update', update)

        // console.log('projectToBeEdited', update);
        this.store.dispatch(
            updateCourse({ course: update })
        )
        this.router.navigate(['/courses'])
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
    }
}
