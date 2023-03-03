import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import { Course } from 'src/app/courses/model/course.model'
import { CourseState } from 'src/app/courses/store/course.reducer'
import { selectCourses } from 'src/app/courses/store/course.selectors'

import {
    mylearningFeatureKey,
    MyLearningState,
    selectAll,
} from './mylearning.reducers'

export const selectMyLearningState =
    createFeatureSelector<MyLearningState>(
        mylearningFeatureKey
    )

export const selectCoursesFromMyLearning = createSelector(
    selectMyLearningState,
    selectAll
)

export const selectFreeCoursesFromML = createSelector(
    selectCoursesFromMyLearning,
    (courses: any[]) =>
        courses.filter(
            (course) => course.courseType === 'free'
        )
)
export const selectPaidCoursesFromML = createSelector(
    selectCoursesFromMyLearning,
    (courses: any[]) =>
        courses.filter(
            (course) => course.courseType === 'paid'
        )
)

export const selectMyLearningErrors = createSelector(
    selectMyLearningState,
    (state) => state.errors
)
