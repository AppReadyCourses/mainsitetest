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
import { Course } from '../model/course.model'
import { CourseService } from '../services/courses.service'

import * as fromCourseActions from './course.actions'

@Injectable()
export class CourseEffects {
    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.loadCourses),
            mergeMap((action) =>
                this.courseService.getCourses().pipe(
                    tap((p) => {
                        console.log(
                            'loadCourses$ - effect',
                            p
                        )
                    }),
                    map((courses) =>
                        fromCourseActions.loadCoursesSuccess(
                            { courses: courses }
                        )
                    ),
                    catchError((error) =>
                        of(
                            fromCourseActions.loadCoursesFailure(
                                { error }
                            )
                        )
                    )
                )
            )
        )
    )

    loadCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.loadCourse),
            mergeMap((action) =>
                this.courseService
                    .getCourse(action.id)
                    .pipe(
                        tap((p) => {
                            // console.log(
                            //     'loadCourse$ - effect',
                            //     p
                            // )
                        }),
                        map((course) =>
                            fromCourseActions.loadCourseSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.loadCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.addCourse),
            mergeMap((action) =>
                this.courseService
                    .createCourse(action.course)
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect add course runs',
                                d
                            )
                        ),
                        map((p) => p.data.addCourse),
                        map((course) =>
                            fromCourseActions.addCourseSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.addCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.updateCourse),
            mergeMap((action) =>
                this.courseService
                    .updateCourse(
                        action.course.id,
                        action.course.changes
                    )
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect edit course runs',
                                d
                            )
                        ),
                        map((c) => c.data.updateCourse),
                        map((course) =>
                            fromCourseActions.updateCourseSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.updateCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.deleteCourse),
            mergeMap((action) =>
                this.courseService
                    .deleteCourse(action.id)
                    .pipe(
                        map(() =>
                            fromCourseActions.deleteCourseSuccess(
                                { id: action.id }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.deleteCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    loadProfileUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.fetchUserProfile),
            mergeMap((action) =>
                this.courseService.fetchUserProfile().pipe(
                    tap((p) => {
                        console.log(
                            'fetchUserProfile$ - course.effect.ts',
                            p
                        )
                    }),
                    map((user: any) =>
                        fromCourseActions.fetchUserProfileSuccess(
                            { user }
                        )
                    ),
                    catchError((error) =>
                        of(
                            fromCourseActions.fetchUserProfileFailure(
                                { error }
                            )
                        )
                    )
                )
            )
        )
    )

    enrollCourseByUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCourseActions.enrollCourse),
            mergeMap((action) =>
                this.courseService
                    .enrollCourse(
                        action.userId,
                        action.courseId
                    )
                    .pipe(
                        map((d) => d.data.createUserCourse),
                        tap((p) => {
                            console.log(
                                'enrollCourseByUser$ - course.effect.ts',
                                p
                            )
                        }),
                        map((courses: any) =>
                            fromCourseActions.enrollCourseSuccess(
                                { courses }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.enrollCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    findCurrentUserCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromCourseActions.findCoursesByCurrentUser
            ),
            mergeMap((action) =>
                this.courseService
                    .findCoursesUserHadByUser()
                    .pipe(
                        tap((p) => {
                            console.log(
                                'findCoursesByCurrentUser$ - course.effect.ts',
                                p
                            )
                        }),
                        map((courses: any) =>
                            fromCourseActions.findCoursesByCurrentUserSuccess(
                                { courses }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.findCoursesByCurrentUserFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    addCourseandCourserelation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromCourseActions.addCourseAdditionalRelation
            ),
            mergeMap((action) =>
                this.courseService
                    .addCourseRelation(
                        action.courseId,
                        action.courseAdditionalId
                    )
                    .pipe(
                        tap((p) => {
                            console.log(
                                'addCourseandCourserelation$ - course.effect.ts',
                                p
                            )
                        }),
                        map((course: any) =>
                            fromCourseActions.addCourseAdditionalRelationSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.addCourseAdditionalRelationFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteCourseandCourserelation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromCourseActions.deleteCourseAdditionalRelation
            ),
            mergeMap((action) =>
                this.courseService
                    .deleteCourseRelation(
                        action.courseId,
                        action.courseAdditionalId
                    )
                    .pipe(
                        tap((p) => {
                            console.log(
                                'deleteCourseAdditionalRelation$ - course.effect.ts',
                                p
                            )
                        }),
                        map((course: any) =>
                            fromCourseActions.deleteCourseAdditionalRelationSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCourseActions.deleteCourseAdditionalRelationFailure(
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
        private courseService: CourseService,
        private router: Router
    ) {}
}
