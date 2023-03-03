import { Update } from '@ngrx/entity'
import { createAction, props } from '@ngrx/store'
import { Course } from 'src/app/courses/model/course.model'

// Get Course from My Learning

export const getCourseFromMyLearning = createAction(
    '[My Learning / API] Get Course From My Learning'
)
export const getCourseFromMyLearningSuccess = createAction(
    '[My Learning / API] Get Course From My Learning Success',
    props<{ courses: Course[] }>()
)
export const getCourseFromMyLearningFailure = createAction(
    '[My Learning / API] Get Course From My Learning Failure',
    props<{ errors: any }>()
)

// Add Free Course to MY Learning
export const addFreeCourseToMyLearning = createAction(
    '[My Learning / API] Add Free Course To My Learning',
    props<{ courseId: string }>()
)
export const addFreeCourseToMyLearningSuccess =
    createAction(
        '[My Learning / API] Add Free Course To My Learning Success',
        props<{ course: Course }>()
    )
export const addFreeCourseToMyLearningFailure =
    createAction(
        '[My Learning / API] Add Free Course To My Learning Failure',
        props<{ errors: any }>()
    )
// Add Paid Course to MY Learning
export const addPaidCourseToMyLearning = createAction(
    '[My Learning / API] Add paid Course To My Learning',
    props<{ courseIds: string[] }>()
)
export const addPaidCourseToMyLearningSuccess =
    createAction(
        '[My Learning / API] Add paid Course To My Learning Success',
        props<{ courses: Course[] }>()
    )
export const addPaidCourseToMyLearningFailure =
    createAction(
        '[My Learning / API] Add paid Course To My Learning Failure',
        props<{ errors: any }>()
    )
// Delete Free Course from MY Learning
export const deleteFreeCourseFromMyLearning = createAction(
    '[My Learning / API] Delete Course From My Learning',
    props<{ courseId: string }>()
)
export const deleteFreeCourseFromMyLearningSuccess =
    createAction(
        '[My Learning / API] Delete Free Course To My Learning Success',
        props<{ courseId: string }>()
    )
export const deleteFreeCourseFromMyLearningFailure =
    createAction(
        '[My Learning / API] Delete Free Course To My Learning Failure',
        props<{ errors: any }>()
    )
