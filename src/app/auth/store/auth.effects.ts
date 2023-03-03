import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import { of } from 'rxjs'
import {
    catchError,
    concatMap,
    exhaustMap,
    map,
    mergeMap,
    switchMap,
    tap,
} from 'rxjs/operators'

import { AuthService } from '../services/auth.services'

import * as fromAuthActions from './auth.actions'

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService
    ) {}

    $login = createEffect(() =>
        this.actions$.pipe(
            ofType(fromAuthActions.Login),
            exhaustMap((action) =>
                this.authService
                    .login(action.credentials)
                    .pipe(
                        tap((d) =>
                            console.log(
                                'success access_token data',
                                d
                            )
                        ),
                        map((data) =>
                            fromAuthActions.LoginSuccess({
                                token: data.data.login
                                    .access_token,
                            })
                        ),
                        catchError((error) =>
                            of(
                                fromAuthActions.LoginFailure(
                                    { error: error }
                                )
                            )
                        )
                    )
            )
        )
    )

    $loginSuccess = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromAuthActions.LoginSuccess),
                tap((t) => {
                    this.router.navigateByUrl('/mylearning')
                }),
                tap((user) =>
                    localStorage.setItem(
                        'token',
                        user.token
                    )
                )
            ),
        { dispatch: false }
    )

    $signUp = createEffect(() =>
        this.actions$.pipe(
            ofType(fromAuthActions.SignUp),
            switchMap((action) =>
                this.authService
                    .signup(action.credentials)
                    .pipe(
                        tap((d) =>
                            console.log('success signUp', d)
                        ),
                        map((data) =>
                            fromAuthActions.SignUpSuccess({
                                user: data.data
                                    .registerUser,
                            })
                        ),
                        catchError((error) =>
                            of(
                                fromAuthActions.SignUpFailure(
                                    { error: error }
                                )
                            )
                        )
                    )
            )
        )
    )

    $signupSuccess = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromAuthActions.SignUpSuccess),
                tap(() => {
                    this.router.navigateByUrl(
                        '/auth/signin'
                    )
                })
            ),
        { dispatch: false }
    )
}
