import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'

import { selectAll } from './course.reducer'

import {
    courseFeatureKey,
    CourseState,
} from './course.reducer'

export const selectCourseState =
    createFeatureSelector<CourseState>(courseFeatureKey)

export const selectCourses = createSelector(
    selectCourseState,
    selectAll
)

export const selectFreeCourses = createSelector(
    selectCourses,
    (data) => {
        const newList = data.filter(
            (d: any) => d.courseType === 'free'
        )
        // console.log('newList', newList)
        // console.log('selectFree Course in slector', newList)
        return newList
    }
)
export const selectPaidCourses = createSelector(
    selectCourses,
    (data) => {
        const newList = data.filter(
            (d: any) => d.courseType === 'paid'
        )
        // console.log('newList', newList)
        // console.log(
        //     'select PaidCourse in selector',
        //     newList
        // )
        return newList
    }
)

export const selectCourse = createSelector(
    selectCourseState,
    (state: CourseState) => state.singleCourse
)

export const selectUserProfile = createSelector(
    selectCourseState,
    (state: CourseState) => state.userProfile
)

// export const selectAllCoursesEnrolledByCurrentUser =
//     createSelector(
//         selectCourseState,
//         (state: CourseState) => {
//             return state ? state.enrollCourses : null
//         }
//     )

// export const selectFreeCoursesEnrolledByCurrentUser =
//     createSelector(
//         selectAllCoursesEnrolledByCurrentUser,
//         (state: any) => {
//             let newList: any = []
//             if (state) {
//                 newList = state.filter(
//                     (d: any) => d.courseType === 'free'
//                 )
//             }
//             return newList.length > 0 ? newList : null
//         }
//     )

// export const selectPaidCoursesEnrolledByCurrentUser =
//     createSelector(
//         selectAllCoursesEnrolledByCurrentUser,
//         (state: any) => {
//             let newList: any = []
//             if (state) {
//                 newList = state.filter(
//                     (d: any) => d.courseType === 'paid'
//                 )
//             }
//             return newList.length > 0 ? newList : null
//         }
//     )

// export const findCurrentUserCourses = createSelector(
//     selectCourseState,
//     (state: CourseState) => state.currentUserCourses
// )
