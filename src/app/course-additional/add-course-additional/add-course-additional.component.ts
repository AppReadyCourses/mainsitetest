import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addCourseAdditional } from '../store/course-additional.actions'

@Component({
    selector: 'app-add-course-additional',
    templateUrl: './add-course-additional.component.html',
    styleUrls: ['./add-course-additional.component.scss'],
})
export class AddCourseAdditionalComponent
    implements OnInit
{
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            coursePrice: new FormControl(),
            courseDuration: new FormControl(),
            totalSections: new FormControl(),
            totalTopics: new FormControl(),
            skillsLearned1: new FormControl(),
            skillsLearned2: new FormControl(),
            skillsLearned3: new FormControl(),
            skillsLearned4: new FormControl(),
            toolsUsed1: new FormControl(),
            toolsUsed2: new FormControl(),
            toolsUsed3: new FormControl(),
            toolsUsed4: new FormControl(),
            toolsUsedImg1: new FormControl(),
            toolsUsedImg2: new FormControl(),
            toolsUsedImg3: new FormControl(),
            toolsUsedImg4: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)

        this.store.dispatch(
            addCourseAdditional({
                courseAdditional: form.value,
            })
        )
    }
}
