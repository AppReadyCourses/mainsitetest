import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addCourseAdditionalRelation } from '../store/course.actions'

@Component({
    selector: 'app-add-course-additional-relationm',
    templateUrl:
        './add-course-additional-relationm.component.html',
    styleUrls: [
        './add-course-additional-relationm.component.scss',
    ],
})
export class AddCourseAdditionalRelationmComponent
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
            addCourseAdditionalRelation({
                courseId: form.value.courseId,
                courseAdditionalId:
                    form.value.courseAdditionalId,
            })
        )
    }
}
