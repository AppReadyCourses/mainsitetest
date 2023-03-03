import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addCourse } from '../store/course.actions'

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            courseName: new FormControl(),
            courseIntroduction: new FormControl(),
            courseType: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)

        this.store.dispatch(
            addCourse({ course: form.value })
        )
    }
}
