import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'

import { AuthUser } from '../model/auth.model'
import * as AuthActions from './auth.actions'

export const authFeatureKey = 'auth'

export interface AuthState extends EntityState<AuthUser> {
    // additional entities state properties
    user: AuthUser | null
    isAuthenticated: boolean
    error: string | null
    data: string | null
}

export const adapter: EntityAdapter<AuthUser> =
    createEntityAdapter<AuthUser>()

export const initialState: AuthState =
    adapter.getInitialState({
        isAuthenticated: false,
        user: null,
        error: null,
        data: null,
    })

export const authReducer = createReducer(
    initialState,
    on(AuthActions.LoginSuccess, (state, action) => {
        console.log(
            'Reducer - AuthActions.AuthLogInSuccess',
            action.token
        )
        return {
            ...state,
            isAuthenticated: true,
            user: {
                access_token: action.token,
            },
            error: null,
        }
    }),
    on(AuthActions.LoginFailure, (state, action) => {
        return {
            ...state,
            isAuthenticated: false,
            error: 'Incorrect email and/or password.',
        }
    }),
    on(AuthActions.SignUpSuccess, (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            user: {
                username: action.user.username,
            },
            error: null,
        }
    }),
    on(AuthActions.SignUpFailure, (state, action) => {
        return {
            ...state,
            isAuthenticated: false,
            error: action.error,
        }
    })
)

export function reducer(
    state: AuthState | undefined,
    action: Action
) {
    return authReducer(state, action)
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors()
