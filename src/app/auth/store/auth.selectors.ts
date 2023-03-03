import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'

import {
    authFeatureKey,
    AuthState,
    selectAll,
} from './auth.reducer'

export const selectAuthState =
    createFeatureSelector<AuthState>(authFeatureKey)

export const selectAllAuth = createSelector(
    selectAuthState,
    selectAll
)

export const selectAuthError = createSelector(
    selectAuthState,
    (state: AuthState) => state.error
)

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.isAuthenticated
)
