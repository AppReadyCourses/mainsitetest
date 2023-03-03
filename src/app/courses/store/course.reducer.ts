import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'

import { Course } from '../model/course.model'
import * as CourseActions from './course.actions'

export const courseFeatureKey = 'course'

export interface CourseState extends EntityState<Course> {
    error: any
    selectedCourse: any
    singleCourse: any
    updateCourse: any
    userProfile: any
    enrollCourses: any
    currentUserCourses: any
    addedCourseRelation: any
    deleteCourseAdditionalRelation: any
    coursesInCart: any
    coursesInCartAdd: any
}

export const adapter: EntityAdapter<Course> =
    createEntityAdapter<Course>()

export const initialState: CourseState =
    adapter.getInitialState({
        error: undefined,
        selectedCourse: undefined,
        updateCourse: undefined,
        singleCourse: undefined,
        userProfile: undefined,
        enrollCourses: undefined,
        currentUserCourses: undefined,
        addedCourseRelation: undefined,
        deleteCourseAdditionalRelation: undefined,
        coursesInCart: undefined,
        coursesInCartAdd: undefined,
    })

function arrayToObject(array: any) {
    return array.reduce((obj: any, item: any) => {
        obj[item.id] = item
        return obj
    }, {})
}

export const courseReducer = createReducer(
    initialState,
    on(CourseActions.loadCoursesSuccess, (state, action) =>
        adapter.setAll(action.courses, state)
    ),
    on(
        CourseActions.loadCoursesFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(CourseActions.addCourseSuccess, (state, action) => {
        return {
            ...state,
            selectedCourse: action.course,
        }
    }),
    on(CourseActions.addCourseFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
        }
    }),
    on(CourseActions.loadCourseSuccess, (state, action) => {
        return {
            ...state,
            singleCourse: action.course,
        }
    }),
    on(CourseActions.loadCourseFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
        }
    }),
    on(
        CourseActions.updateCourse,
        (state, action) =>
            adapter.updateOne(action.course, state)

        // {
        //     return {
        //         ...state,
        //         singleCourse: action.course.changes,
        //     }
        // }
    ),
    on(
        CourseActions.updateCourseSuccess,
        (state, action) => {
            return {
                ...state,
                updateCourse: action.course,
            }
        }
    ),
    on(
        CourseActions.updateCourseFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(CourseActions.deleteCourseSuccess, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(
        CourseActions.deleteCourseFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseActions.fetchUserProfileSuccess,
        (state, action) => {
            return {
                ...state,
                userProfile: action.user,
            }
        }
    ),
    on(
        CourseActions.fetchUserProfileFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseActions.enrollCourseSuccess,
        (state, action) => {
            console.log(
                'enrollCourseSuccess runs',
                action.courses
            )
            return {
                ...state,
                enrollCourses: action.courses,
            }
        }
    ),
    on(
        CourseActions.enrollCourseFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseActions.findCoursesByCurrentUserSuccess,
        (state, action) => {
            return {
                ...state,
                currentUserCourses: action.courses,
            }
        }
    ),
    on(
        CourseActions.findCoursesByCurrentUserFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseActions.addCourseAdditionalRelationSuccess,
        (state, action) => {
            return {
                ...state,
                addedCourseRelation: action.course,
            }
        }
    ),
    on(
        CourseActions.addCourseAdditionalRelationFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CourseActions.deleteCourseAdditionalRelationSuccess,
        (state, action) => {
            return {
                ...state,
                deleteCourseAdditionalRelation:
                    action.course,
            }
        }
    ),
    on(
        CourseActions.deleteCourseAdditionalRelationFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    )
)

export const { selectEntities, selectAll, selectTotal } =
    adapter.getSelectors()
