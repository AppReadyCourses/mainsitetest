import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { onError } from '@apollo/client/link/error'
import {
    ApolloClientOptions,
    InMemoryCache,
} from '@apollo/client/core'

const uri = 'http://localhost:4000/graphql' // <-- add the URL of the GraphQL server here

export function createApollo(
    httpLink: HttpLink
): ApolloClientOptions<any> {
    const link = onError(
        ({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.map(
                    ({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        )
                )

            if (networkError)
                console.log(
                    `[Network error]: ${networkError}`
                )
        }
    )
    return {
        link: link.concat(httpLink.create({ uri })),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        rooms: {
                            merge(existing, incoming) {
                                return incoming
                            },
                        },
                    },
                },
            },
        }),
    }
}

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {}
