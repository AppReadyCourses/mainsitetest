import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { AuthUser } from '../model/auth.model'

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private apollo: Apollo) {}

    getToken(): string | null {
        return localStorage.getItem('token')
    }

    login(user: AuthUser) {
        console.log('Auth service - log in', user)
        return this.apollo.mutate<any>({
            mutation: LOG_IN_USER,
            variables: {
                username: user.username,
                password: user.password,
            },
        })
    }

    signup(user: AuthUser) {
        return this.apollo.mutate<any>({
            mutation: SIGN_UP_USER,
            variables: {
                username: user.username,
                password: user.password,
                email: user.email,
                interestedIn: user.interestedIn,
                avatar: user.avatar,
            },
        })
    }
}

export const LOG_IN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(
            authuserDTO: {
                username: $username
                password: $password
            }
        ) {
            access_token
        }
    }
`
export const SIGN_UP_USER = gql`
    mutation registerUser(
        $username: String!
        $password: String!
        $email: String!
        $interestedIn: String!
        $avatar: String!
    ) {
        registerUser(
            username: $username
            password: $password
            email: $email
            interestedIn: $interestedIn
            avatar: $avatar
        ) {
            id
            created
            role
            email
            interestedIn
            avatar
        }
    }
`
