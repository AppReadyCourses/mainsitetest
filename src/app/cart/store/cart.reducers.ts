import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import { Action } from 'rxjs/internal/scheduler/Action'
import { Course } from 'src/app/courses/model/course.model'
import { Cart } from '../model/cart.model'
import * as CartActions from './cart.actions'

export const cartFeatureKey = 'cart'

export interface CartState extends EntityState<Cart> {
    courses: any
}

export const adapter: EntityAdapter<Cart> =
    createEntityAdapter<Cart>()

export const initialState: CartState =
    adapter.getInitialState({
        courses: null,
    })

function arrayToObject(array: any) {
    return array.reduce((obj: any, item: any) => {
        obj[item.id] = item
        return obj
    }, {})
}

export const cartReducer = createReducer(
    initialState,
    on(
        CartActions.loadItemsInCartSuccess,
        (state, action) =>
            adapter.setAll(action.courses, {
                ...state,
            })
    ),
    on(
        CartActions.loadItemsInCartFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CartActions.deleteItemFromCartSuccess,
        (state: any, action) =>
            adapter.removeOne(action.courseId, state)
    ),
    on(
        CartActions.deleteItemFromCartFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CartActions.addItemsToCartSuccess,
        (state, action: any) => {
            console.log('addOne', state)
            return adapter.addOne(action.course, state)
        }
    ),
    on(
        CartActions.addItemsToCartFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        CartActions.deleteAllItemsFromCartSuccess,
        (state, action: any) => {
            console.log(
                'deleteAllItemsFromCartSuccess action',
                action
            )
            return adapter.removeMany(
                action.courseIds,
                state
            )
        }
    ),
    on(
        CartActions.deleteAllItemsFromCartFailure,
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
