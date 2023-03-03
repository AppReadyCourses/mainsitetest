import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import { Course } from 'src/app/courses/model/course.model'
import { MyLearning } from '../model/mylearning.model'

import * as MyLearningActions from './mylearning.actions'

export const mylearningFeatureKey = 'mylearning'

export interface MyLearningState
    extends EntityState<MyLearning> {
    errors: any
    coursesByUserId: any
}

export const adapter: EntityAdapter<MyLearning> =
    createEntityAdapter<MyLearning>()

export const initialState: MyLearningState =
    adapter.getInitialState({
        errors: undefined,
        coursesByUserId: undefined,
    })

export const myLearningReducer = createReducer(
    initialState,

    on(
        MyLearningActions.getCourseFromMyLearningSuccess,
        (state, action) =>
            adapter.setAll(action.courses, state)
    ),
    on(
        MyLearningActions.getCourseFromMyLearningFailure,
        (state, action) => {
            return {
                ...state,
                errors: action.errors,
            }
        }
    ),
    on(
        MyLearningActions.addFreeCourseToMyLearningSuccess,
        (state, action) =>
            adapter.addOne(action.course, state)
    ),
    on(
        MyLearningActions.addFreeCourseToMyLearningFailure,
        (state, action) => {
            return {
                ...state,
                errors: action.errors,
            }
        }
    ),
    on(
        MyLearningActions.addPaidCourseToMyLearningSuccess,
        (state, action) =>
            adapter.addMany(action.courses, state)
    ),
    on(
        MyLearningActions.addPaidCourseToMyLearningFailure,
        (state, action) => {
            return {
                ...state,
                errors: action.errors,
            }
        }
    ),
    on(
        MyLearningActions.deleteFreeCourseFromMyLearningSuccess,
        (state, action) =>
            adapter.removeOne(action.courseId, state)
    ),
    on(
        MyLearningActions.deleteFreeCourseFromMyLearningFailure,
        (state, action) => {
            return {
                ...state,
                errors: action.errors,
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
