import { state } from '@angular/animations'
import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import { Course } from 'src/app/courses/model/course.model'
import { Cart } from '../model/cart.model'

import {
    cartFeatureKey,
    CartState,
    selectAll,
} from './cart.reducers'

export const selectCartState =
    createFeatureSelector<CartState>(cartFeatureKey)

export const selectLoadCart = createSelector(
    selectCartState,
    // (state) =>
    // {

    //     if (state.courses) {
    //         console.log('state', state.courses)
    //         return Object.keys(state.courses).map(
    //             (id) => state.courses[id]
    //         )
    //     }
    //     return null
    // }
    selectAll
)
