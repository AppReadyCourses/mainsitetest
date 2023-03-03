import { createAction, props } from '@ngrx/store'
import { CourseAdditional } from '../model/course-additional.model'

// load Course Additional
export const loadCourseAdditional = createAction(
    '[Course/API] Load Course Additional',
    props<{ id: string }>()
)
export const loadCourseAdditionalSuccess = createAction(
    '[Course/API] Load Course Additional',
    props<{ courseAdditional: CourseAdditional }>()
)
export const loadCourseAdditionalFailure = createAction(
    '[Course/API] Load Course Additional Failure',
    props<{ error: any }>()
)

// add Course Additional
export const addCourseAdditional = createAction(
    '[Course/API] Add Course Additional',
    props<{ courseAdditional: CourseAdditional }>()
)
export const addCourseAdditionalSuccess = createAction(
    '[Course/API] Add Course Additional Success',
    props<{ courseAdditional: CourseAdditional }>()
)
export const addCourseAdditionalFailure = createAction(
    '[Course/API] Add Course Additional Failure',
    props<{ error: any }>()
)
