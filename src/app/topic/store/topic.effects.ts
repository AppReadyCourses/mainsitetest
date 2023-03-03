import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import {
    catchError,
    map,
    mergeMap,
    of,
    switchMap,
    tap,
} from 'rxjs'

import { TopicService } from '../services/topic.service'
import * as FromTopicsActions from './topic.actions'

@Injectable()
export class TopicsEffects {
    loadTopics$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.loadTopics),
            mergeMap((action) =>
                this.topicService.getTopics().pipe(
                    map((topics) =>
                        FromTopicsActions.loadTopicsSuccess(
                            { topics }
                        )
                    ),
                    catchError((errors) =>
                        of(
                            FromTopicsActions.loadTopicsFailure(
                                { errors }
                            )
                        )
                    )
                )
            )
        )
    )

    loadTopic$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.loadTopic),
            mergeMap((action) =>
                this.topicService.getTopic(action.id).pipe(
                    map((topic) =>
                        FromTopicsActions.loadTopicSuccess({
                            topic,
                        })
                    ),
                    catchError((errors) =>
                        of(
                            FromTopicsActions.loadTopicFailure(
                                { errors }
                            )
                        )
                    )
                )
            )
        )
    )

    loadTopicsBySection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.loadTopicsBySection),
            mergeMap((action) =>
                this.topicService
                    .getTopicsBySection(action.sectionId)
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect load topic by section Id',
                                d
                            )
                        ),
                        map((topics) =>
                            FromTopicsActions.loadTopicsBySectionSuccess(
                                { topics }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                FromTopicsActions.loadTopicsBySectionFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    changeTopicModificationStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                FromTopicsActions.changeModificationStatus
            ),
            mergeMap((action) =>
                this.topicService
                    .changeModificationStatus(
                        action.topicId
                    )
                    .pipe(
                        map(
                            (p) =>
                                p.data
                                    .changeModificationStatus
                        ),
                        tap((d) =>
                            console.log(
                                'effect change Modification status',
                                d
                            )
                        ),
                        map((topic) =>
                            FromTopicsActions.changeModificationStatusSuccess(
                                { topic }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                FromTopicsActions.changeModificationStatusFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )
    changeTopicCompletedStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.changeTopicCompleted),
            mergeMap((action) =>
                this.topicService
                    .changeTopicCompleted(action.topicId)
                    .pipe(
                        map(
                            (p) =>
                                p.data.changeTopicCompleted
                        ),
                        tap((d) =>
                            console.log(
                                'effect change Modification status',
                                d
                            )
                        ),
                        map((topic) =>
                            FromTopicsActions.changeTopicCompletedSuccess(
                                { topic }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                FromTopicsActions.changeTopicCompletedFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    addOneTopic$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.addOneTopic),
            mergeMap((action) =>
                this.topicService
                    .addOneTopic(
                        action.sectionId,
                        action.topicName,
                        action.topicIntroduction,
                        action.modificationTouched,
                        action.topicCompleted,
                        action.topicDuration
                    )
                    .pipe(
                        map((p) => p.data.createTopic),
                        tap((d) =>
                            console.log(
                                'effect createTopic - topic.effect.ts',
                                d
                            )
                        ),
                        map((topicId) =>
                            FromTopicsActions.addOneTopicSuccess(
                                { topicId }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                FromTopicsActions.addOneTopicFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteOneTopic$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FromTopicsActions.deleteOneTopic),
            mergeMap((action) =>
                this.topicService
                    .deleteOneTopic(action.topicId)
                    .pipe(
                        map((p) => p.data.deleteTopic),
                        tap((d) =>
                            console.log(
                                'effect deleteTopic - topic.effect.ts',
                                d
                            )
                        ),
                        map((topicId) =>
                            FromTopicsActions.deleteOneTopicSuccess(
                                { topicId }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                FromTopicsActions.deleteOneTopicFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private topicService: TopicService,
        private router: Router
    ) {}
}
