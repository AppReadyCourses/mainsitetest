import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { deleteCourseAdditionalRelation } from '../store/course.actions'

@Component({
    selector: 'app-delete-course-additional',
    templateUrl:
        './delete-course-additional.component.html',
    styleUrls: [
        './delete-course-additional.component.scss',
    ],
})
export class DeleteCourseAdditionalComponent
    implements OnInit
{
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            courseId: new FormControl(),
            courseAdditionalId: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)

        this.store.dispatch(
            deleteCourseAdditionalRelation({
                courseId: form.value.courseId,
                courseAdditionalId:
                    form.value.courseAdditionalId,
            })
        )
    }
}
