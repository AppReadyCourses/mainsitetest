import { createAction, props } from '@ngrx/store'

export interface AuthDTO {
    username: string
    password: string
}

export interface AuthUser {
    username: string
}

export const Login = createAction(
    '[Auth/API] Log In',
    props<{ credentials: AuthDTO }>()
)

export const LoginSuccess = createAction(
    '[Auth/API] Log In Success',
    props<{ token: string }>()
)

export const LoginFailure = createAction(
    '[Auth/API] Log In Failure',
    props<{ error: any }>()
)

export const SignUp = createAction(
    '[Auth/API] Sign Up',
    props<{ credentials: AuthDTO }>()
)
export const SignUpSuccess = createAction(
    '[Auth/API] Sign Up Success',
    props<{ user: AuthUser }>()
)
export const SignUpFailure = createAction(
    '[Auth/API] Sign Up Failure',
    props<{ error: any }>()
)
