import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from '@ngrx/store'
import { environment } from '../../environments/environment'

import * as fromCart from '../cart/store/cart.reducers'

export interface State {}

export const reducers: ActionReducerMap<State> = {
    // cart: fromCart.cartReducer,
}

// console.log all actions
export function debug(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return function (state, action) {
        console.log('state', state)
        console.log('action', action)

        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<State>[] =
    !environment.production ? [debug] : []
