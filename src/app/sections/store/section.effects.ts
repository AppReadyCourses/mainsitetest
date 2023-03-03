import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import * as fromSectionActions from './section.actions'

import { SectionService } from '../services/sections.service'
import {
    catchError,
    map,
    mergeMap,
    of,
    switchMap,
    tap,
} from 'rxjs'

@Injectable()
export class SectionEffects {
    loadSections$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.loadSections),
            mergeMap((action) =>
                this.sectionService.getSections().pipe(
                    map((sections) =>
                        fromSectionActions.loadSectionsSuccess(
                            { sections }
                        )
                    ),
                    catchError((error) =>
                        of(
                            fromSectionActions.loadSectionsFailure(
                                { error }
                            )
                        )
                    )
                )
            )
        )
    )

    loadSection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.loadSection),
            mergeMap((action) =>
                this.sectionService
                    .getSection(action.id)
                    .pipe(
                        map((section) =>
                            fromSectionActions.loadSectionSuccess(
                                { section }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromSectionActions.loadSectionFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    loadSectionByCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.loadSectionByCourse),
            mergeMap((action) =>
                this.sectionService
                    .getSectionByCourseId(action.id)
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect load section by courseID',
                                d
                            )
                        ),
                        map((sections) =>
                            fromSectionActions.loadSectionByCourseSuccess(
                                {
                                    sections,
                                }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromSectionActions.loadSectionByCourseFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    createSection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.createSection),
            mergeMap((action) =>
                this.sectionService
                    .createSection(action.section)
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect add section runs',
                                d
                            )
                        ),
                        map((p) => p.data.createSection),
                        map((section) =>
                            fromSectionActions.createSectionSuccess(
                                { section }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromSectionActions.createSectionFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    editSection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.editSection),
            mergeMap((action) =>
                this.sectionService
                    .updateSection(
                        action.section.id,
                        action.section.changes
                    )
                    .pipe(
                        tap((d) =>
                            console.log(
                                'effect edit section runs',
                                d
                            )
                        ),
                        map((p) => p.data.updateSection),
                        map((section) =>
                            fromSectionActions.editSectionSuccess(
                                { section }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromSectionActions.editSectionFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteSection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSectionActions.deleteSection),
            mergeMap((action) =>
                this.sectionService
                    .deleteSection(action.id)
                    .pipe(
                        map((p) => p.data.deleteSection),
                        tap((d) =>
                            console.log(
                                'effect delete Section runs',
                                d
                            )
                        ),
                        map((id) =>
                            fromSectionActions.deleteSectionSuccess(
                                { id }
                            )
                        ),
                        // tap(() =>
                        //     fromSectionActions.loadSectionByCourseId(
                        //         {
                        //             id: '5a859311-c7b2-47ce-a5dd-71e1dc871215',
                        //         }
                        //     )
                        // ),
                        catchError((error) =>
                            of(
                                fromSectionActions.deleteSectionFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteSectionByCourse = createEffect(() =>
        this.actions$.pipe(
            ofType(
                fromSectionActions.deleteSectionFromCourse
            ),
            mergeMap((action) =>
                this.sectionService
                    .deleteSectionByCourse(action.id)
                    .pipe(
                        map((p) => p.data.deleteSection),
                        map((section) =>
                            fromSectionActions.deleteSectionFromCourseSuccess(
                                { id: section.id }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromSectionActions.deleteSectionFromCourseFailure(
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
        private sectionService: SectionService,
        private router: Router
    ) {}
}
