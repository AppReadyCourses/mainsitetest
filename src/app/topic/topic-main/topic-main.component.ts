import { Component, OnDestroy, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'

import { SectionState } from 'src/app/sections/store/section.reducer'
import { Topic } from '../model/topic.model'
import {
    changeTopicCompleted,
    deleteOneTopic,
    loadTopicsBySection,
} from '../store/topic.actions'
import { selectTopicsBySection } from '../store/topic.selectors'
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms'
import { Section } from 'src/app/sections/model/section.model'

@Component({
    selector: 'app-topic-main',
    templateUrl: './topic-main.component.html',
    styleUrls: ['./topic-main.component.scss'],
})
export class TopicMainComponent
    implements OnInit, OnDestroy
{
    sectionId: any
    topicsBySection$: Observable<Topic[]>
    topics$: Observable<Topic[]>
    form: FormGroup
    private subscription$: Subscription
    topics: Topic[]
    section: Section

    constructor(
        private store: Store<SectionState>,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private location: Location
    ) {
        this.form = fb.group({
            topicCompleted: new FormArray([]),
        })
    }

    ngOnInit(): void {
        this.sectionId =
            this.route.snapshot.paramMap.get('id')

        this.store.dispatch(
            loadTopicsBySection({
                sectionId: this.sectionId,
            })
        )

        this.topics$ = this.store.select(
            selectTopicsBySection
        )
        this.subscription$ = this.store
            .select(selectTopicsBySection)
            .subscribe((data) => {
                console.log('topic data', data)
            })
    }

    runMinsSecs(totalSeconds: any) {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor(
            (totalSeconds % 3600) / 60
        )
        const seconds = totalSeconds % 60
        let result = `${minutes
            .toString()
            .padStart(1, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`
        if (!!hours) {
            result = `${hours.toString()}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`
        }
        return result
    }

    onCheckboxChange(event: any, id: any) {
        this.store.dispatch(
            changeTopicCompleted({
                topicId: id,
            })
        )
    }

    backClicked() {
        this.location.back()
    }

    deleteOneTopic(topicId: any) {
        console.log('delete topic id', topicId)
        this.store.dispatch(deleteOneTopic({ topicId }))
    }
    ngOnDestroy() {
        // this.subscription$.unsubscribe()
    }
}
