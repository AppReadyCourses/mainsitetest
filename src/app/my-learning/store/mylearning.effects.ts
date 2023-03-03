import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import { fromEventPattern, of } from 'rxjs'
import {
    mergeMap,
    map,
    catchError,
    tap,
    concatMap,
} from 'rxjs/operators'
import { MyLearningService } from '../services/mylearning.services'
import * as fromMyLearningAction from './mylearning.actions'

@Injectable()
export class MyLearningEffects {
    getCoursesFromMyLearning$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromMyLearningAction.getCourseFromMyLearning
            ),
            mergeMap((action) =>
                this.myLearningService
                    .getCoursesFromMyLearning()
                    .pipe(
                        tap((p) => {
                            console.log(
                                'getCoursesFromMyLearning$ - effect',
                                p
                            )
                        }),
                        map((courses) =>
                            fromMyLearningAction.getCourseFromMyLearningSuccess(
                                { courses }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                fromMyLearningAction.getCourseFromMyLearningFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    addFreeCourseToMyLearning$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromMyLearningAction.addFreeCourseToMyLearning
            ),
            mergeMap((action) =>
                this.myLearningService
                    .addFreeCourseToMyLearning(
                        action.courseId
                    )
                    .pipe(
                        map(
                            (d) =>
                                d.data
                                    .addFreeCourseToMyLearning
                        ),
                        tap((p) => {
                            console.log(
                                'addFreeCourseToMyLearning$ - mylearning.effect.ts',
                                p
                            )
                        }),
                        map((course: any) =>
                            fromMyLearningAction.addFreeCourseToMyLearningSuccess(
                                { course }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                fromMyLearningAction.addFreeCourseToMyLearningFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    addPaidCourseToMyLearning$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromMyLearningAction.addPaidCourseToMyLearning
            ),
            mergeMap((action) =>
                this.myLearningService
                    .addPaidCourseToMyLearning(
                        action.courseIds
                    )
                    .pipe(
                        map(
                            (d) =>
                                d.data
                                    .addPaidCourseToMyLearning
                        ),
                        tap((p) => {
                            console.log(
                                'addPaidCourseToMyLearning$ - mylearning.effect.ts',
                                p
                            )
                        }),
                        map((courses: any) =>
                            fromMyLearningAction.addPaidCourseToMyLearningSuccess(
                                { courses }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                fromMyLearningAction.addPaidCourseToMyLearningFailure(
                                    { errors }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteFreeCourseToMyLearning$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromMyLearningAction.deleteFreeCourseFromMyLearning
            ),
            mergeMap((action) =>
                this.myLearningService
                    .deleteCourseFromMyLearning(
                        action.courseId
                    )
                    .pipe(
                        map(
                            (d) =>
                                d.data
                                    .deleteFreeCourseFromMyLearning
                        ),
                        tap((p) => {
                            console.log(
                                'deleteFreeCourseFromMyLearning$ - mylearning.effect.ts',
                                p
                            )
                        }),
                        map((courseId: any) =>
                            fromMyLearningAction.deleteFreeCourseFromMyLearningSuccess(
                                { courseId }
                            )
                        ),
                        catchError((errors) =>
                            of(
                                fromMyLearningAction.deleteFreeCourseFromMyLearningFailure(
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
        private myLearningService: MyLearningService,
        private router: Router
    ) {}
}
