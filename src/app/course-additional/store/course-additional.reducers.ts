import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import { CourseAdditional } from '../model/course-additional.model'

import * as CourseAddtionalActions from './course-additional.actions'

export const courseAdditionalFeatureKey =
    'course-additional'

export interface CourseAdditionalState
    extends EntityState<CourseAdditional> {
    error: any
    singleCourseAdditional: any
    addedCourseAdditional: any
}

export const adapter: EntityAdapter<CourseAdditional> =
    createEntityAdapter<CourseAdditional>()

export const initialState: CourseAdditionalState =
    adapter.getInitialState({
        error: undefined,
        singleCourseAdditional: undefined,
        addedCourseAdditional: undefined,
    })

export const courseReducer = createReducer(
    initialState,
    on(
        CourseAddtionalActions.loadCourseAdditionalSuccess,
        (state, action) => {
            return {
                ...state,
                singleCourseAdditional:
                    action.courseAdditional,
            }
        }
    ),
    on(
        CourseAddtionalActions.loadCourseAdditionalFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseAddtionalActions.addCourseAdditionalSuccess,
        (state, action) => {
            return {
                ...state,
                addedCourseAdditional:
                    action.courseAdditional,
            }
        }
    ),
    on(
        CourseAddtionalActions.addCourseAdditionalFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    )
)

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors()
