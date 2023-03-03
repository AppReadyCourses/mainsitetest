import { Update } from '@ngrx/entity'
import { createAction, props } from '@ngrx/store'
import { AuthUser } from 'src/app/auth/model/auth.model'

import { Course } from '../model/course.model'
import { UserProfile } from '../model/userProfile.model'

// Load Courses

export const loadCourses = createAction(
    '[Course/API] Load Courses'
)

export const loadCoursesSuccess = createAction(
    '[Course/API] Load Courses Success',
    props<{ courses: Course[] }>()
)

export const loadCoursesFailure = createAction(
    '[Course/API] Load Courses Failure',
    props<{ error: any }>()
)

// Load Course

export const loadCourse = createAction(
    '[Course/API] Load Course',
    props<{ id: string }>()
)
export const loadCourseSuccess = createAction(
    '[Course/API] Load Course Success',
    props<{ course: Course }>()
)
export const loadCourseFailure = createAction(
    '[Course/API] Load Course Failure',
    props<{ error: any }>()
)

// Add Course

export const addCourse = createAction(
    '[Course/API] Add Course',
    props<{ course: Course }>()
)
export const addCourseSuccess = createAction(
    '[Course/API] Add Course Success',
    props<{ course: Course }>()
)
export const addCourseFailure = createAction(
    '[Course/API] Add Course Failure',
    props<{ error: any }>()
)

// Update Course

export const updateCourse = createAction(
    '[Course/API] Update Course',
    props<{ course: Update<Course> }>()
)
export const updateCourseSuccess = createAction(
    '[Course/API] Update Course Success',
    props<{ course: Course }>()
)
export const updateCourseFailure = createAction(
    '[Course/API] Update Course Failure',
    props<{ error: any }>()
)

// Delete Course

export const deleteCourse = createAction(
    '[Course/API] Delete Course',
    props<{ id: number }>()
)
export const deleteCourseSuccess = createAction(
    '[Course/API] Delete Course Success',
    props<{ id: number }>()
)
export const deleteCourseFailure = createAction(
    '[Course/API] Delete Course Failure',
    props<{ error: any }>()
)

// Fetch User Profile

export const fetchUserProfile = createAction(
    '[Course/API] Fetch User Profile'
)

export const fetchUserProfileSuccess = createAction(
    '[Course/API] Fetch User Profile Success',
    props<{ user: UserProfile }>()
)
export const fetchUserProfileFailure = createAction(
    '[Course/API] Fetch User Profile',
    props<{ error: any }>()
)

// Add course to user Library

export const enrollCourse = createAction(
    '[Course/API] Enroll Course and User',
    props<{ userId: string; courseId: string }>()
)
export const enrollCourseSuccess = createAction(
    '[Course/API] Enroll Course and User Success',
    props<{ courses: Course[] }>()
)
export const enrollCourseFailure = createAction(
    '[Course/API] Enroll Course and User Failure',
    props<{ error: any }>()
)

// find courses user had by userId
export const findCoursesByCurrentUser = createAction(
    '[Course/API] Find Courses Current User Had'
)
export const findCoursesByCurrentUserSuccess = createAction(
    '[Course/API] Find Courses Current User Had Success',
    props<{ courses: Course[] }>()
)
export const findCoursesByCurrentUserFailure = createAction(
    '[Course/API] Find Courses Current User Had Failure',
    props<{ error: any }>()
)

// add Course Additional relation
export const addCourseAdditionalRelation = createAction(
    '[Course/API] Add Course Additional Relation',
    props<{
        courseId: string
        courseAdditionalId: string
    }>()
)
export const addCourseAdditionalRelationSuccess =
    createAction(
        '[Course/API] Add Course Additional Relation Success',
        props<{ course: Course }>()
    )
export const addCourseAdditionalRelationFailure =
    createAction(
        '[Course/API] Add Course Additional Relation Failure',
        props<{ error: any }>()
    )

// delete Course Additional relation
export const deleteCourseAdditionalRelation = createAction(
    '[Course/API] Delete Course Additional Relation',
    props<{
        courseId: string
        courseAdditionalId: string
    }>()
)
export const deleteCourseAdditionalRelationSuccess =
    createAction(
        '[Course/API] Delete Course Additional Relation Success',
        props<{ course: Course }>()
    )
export const deleteCourseAdditionalRelationFailure =
    createAction(
        '[Course/API] Delete Course Additional Relation Failure',
        props<{ error: any }>()
    )
