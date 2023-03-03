import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'

import { Observable } from 'rxjs'
import { addOneTopic } from '../store/topic.actions'

@Component({
    selector: 'app-topic-add',
    templateUrl: './topic-add.component.html',
    styleUrls: ['./topic-add.component.scss'],
})
export class TopicAddComponent implements OnInit {
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>
    modVal: boolean
    tomCom: boolean

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            sectionId: new FormControl(),
            topicName: new FormControl(),
            topicIntroduction: new FormControl(),
            modificationTouched: new FormControl(),
            topicCompleted: new FormControl(),
            topicDuration: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)

        if (form.value.modificationTouched === 'true') {
            this.modVal = true
        }

        if (form.value.modificationTouched === 'false') {
            this.modVal = false
        }
        if (form.value.topicCompleted === 'true') {
            this.tomCom = true
        }
        if (form.value.topicCompleted === 'false') {
            this.tomCom = false
        }

        console.log('val', this.modVal, this.tomCom)

        this.store.dispatch(
            addOneTopic({
                sectionId: form.value.sectionId,
                topicName: form.value.topicName,
                topicIntroduction:
                    form.value.topicIntroduction,
                modificationTouched: this.modVal,
                topicCompleted: this.tomCom,
                topicDuration: form.value.topicDuration,
            })
        )
    }
}
