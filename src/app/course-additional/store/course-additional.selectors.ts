import { state } from '@angular/animations'
import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import { selectAll } from './course-additional.reducers'
import {
    courseAdditionalFeatureKey,
    CourseAdditionalState,
} from './course-additional.reducers'

export const selectCourseAdditionalState =
    createFeatureSelector<CourseAdditionalState>(
        courseAdditionalFeatureKey
    )

export const selectCourses = createSelector(
    selectCourseAdditionalState,
    (state: CourseAdditionalState) =>
        state.singleCourseAdditional
)
