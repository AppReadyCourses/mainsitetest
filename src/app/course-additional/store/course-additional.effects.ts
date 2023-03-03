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
import { CourseAdditionalService } from '../services/course-additional.services'

import * as fromCourseAddtionalActions from './course-additional.actions'

@Injectable()
export class CourseAdditionalEffects {
    loadCourseAdditional$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromCourseAddtionalActions.loadCourseAdditional
            ),
            mergeMap((action) =>
                this.courseAdditionalService
                    .getOneCourseAdditional(action.id)
                    .pipe(
                        tap((p) => {
                            // console.log(
                            //     'loadCourses$ - effect',
                            //     p
                            // )
                        }),
                        map((courseAdditional) =>
                            fromCourseAddtionalActions.loadCourseAdditionalSuccess(
                                { courseAdditional }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseAddtionalActions.loadCourseAdditionalFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    addCourseAdditional$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromCourseAddtionalActions.addCourseAdditional
            ),
            mergeMap((action) =>
                this.courseAdditionalService
                    .addOneCourseAdditional(
                        action.courseAdditional.coursePrice,
                        action.courseAdditional
                            .courseDuration,
                        action.courseAdditional
                            .totalSections,
                        action.courseAdditional.totalTopics,
                        action.courseAdditional
                            .skillsLearned1,
                        action.courseAdditional
                            .skillsLearned2,
                        action.courseAdditional
                            .skillsLearned3,
                        action.courseAdditional
                            .skillsLearned4,
                        action.courseAdditional.toolsUsed1,
                        action.courseAdditional.toolsUsed2,
                        action.courseAdditional.toolsUsed3,
                        action.courseAdditional.toolsUsed4,
                        action.courseAdditional
                            .toolsUsedImg1,
                        action.courseAdditional
                            .toolsUsedImg2,
                        action.courseAdditional
                            .toolsUsedImg3,
                        action.courseAdditional
                            .toolsUsedImg4
                    )
                    .pipe(
                        tap((p) => {
                            console.log(
                                'loadCourses$ - effect',
                                p
                            )
                        }),
                        map(
                            (p) =>
                                p.data
                                    .createAdditionalCourse
                        ),
                        map((courseAdditional) =>
                            fromCourseAddtionalActions.addCourseAdditionalSuccess(
                                { courseAdditional }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseAddtionalActions.addCourseAdditionalFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private courseAdditionalService: CourseAdditionalService,
        private router: Router
    ) {}
}
