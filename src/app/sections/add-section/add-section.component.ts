import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { CreatSectionDTO } from '../model/create-section.dto'
import { createSection } from '../store/section.actions'

@Component({
    selector: 'app-add-section',
    templateUrl: './add-section.component.html',
    styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent implements OnInit {
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            sectionName: new FormControl(),
            sectionIntroduction: new FormControl(),
            courseId: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)
        let section: any = {}
        form.value.sectionName &&
            (section.sectionName = form.value.sectionName)
        form.value.sectionIntroduction &&
            (section.sectionIntroduction =
                form.value.sectionIntroduction)
        form.value.courseId &&
            (section.courseId = form.value.courseId)

        this.store.dispatch(
            createSection({
                section,
            })
        )
    }
}
