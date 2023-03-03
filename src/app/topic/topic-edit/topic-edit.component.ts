import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Topic } from '../model/topic.model'

@Component({
    selector: 'app-topic-edit',
    templateUrl: './topic-edit.component.html',
    styleUrls: ['./topic-edit.component.scss'],
})
export class TopicEditComponent implements OnInit {
    private subscription$: Subscription
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>
    topic$: Observable<Topic>
    topics$: Observable<Topic[]>

    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {}

    onSubmit(form: FormGroup) {}
}
