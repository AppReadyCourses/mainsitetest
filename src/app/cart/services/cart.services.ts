import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CartService {
    constructor(private apollo: Apollo) {}

    findItemsInCart() {
        const data = this.apollo
            .watchQuery<any>({
                query: GET_ITEMS_IN_CART,
                fetchPolicy: 'no-cache',
            })
            .valueChanges.pipe(
                map((result) => {
                    console.log(
                        'findItemsInCart',
                        result.data.findCart
                    )
                    return result.data.findCart
                })
            )

        return data
    }

    addToCart(courseId: any) {
        console.log('addToCart runs', courseId)
        const data = this.apollo.mutate<any>({
            mutation: ADD_ITEM_TO_CART,
            variables: {
                courseId,
            },
            refetchQueries: [
                {
                    query: GET_ITEMS_IN_CART,
                },
            ],
        })

        console.log('addToCart data back', data)
        return data
    }

    removeItemInCart(courseId: any) {
        const data = this.apollo.mutate<any>({
            mutation: REMOVE_ITEM_IN_CART,
            variables: {
                courseId,
            },
            refetchQueries: [
                {
                    query: GET_ITEMS_IN_CART,
                },
            ],
        })

        return data
    }

    removeAllItemsInCart() {
        const data = this.apollo.mutate<any>({
            mutation: REMOVE_ALL_ITEMS_IN_CART,
            refetchQueries: [
                {
                    query: GET_ITEMS_IN_CART,
                },
            ],
        })

        return data
    }
}

const ADD_ITEM_TO_CART = gql`
    mutation addNewCart($courseId: String!) {
        addNewCart(courseId: $courseId) {
            id
            courseName
            courseIntroduction
            courseMainImg
            coursePrice
            courseAdditional {
                id
            }
        }
    }
`
const REMOVE_ITEM_IN_CART = gql`
    mutation removeFromCart($courseId: String!) {
        removeFromCart(courseId: $courseId)
    }
`

const REMOVE_ALL_ITEMS_IN_CART = gql`
    mutation removeAllFromCart {
        removeAllFromCart
    }
`

const GET_ITEMS_IN_CART = gql`
    query {
        findCart {
            id
            courseName
            courseIntroduction
            courseMainImg
            coursePrice
            courseAdditional {
                id
            }
        }
    }
`
