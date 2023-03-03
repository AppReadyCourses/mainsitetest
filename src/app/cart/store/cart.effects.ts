import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
import { Course } from 'src/app/courses/model/course.model'
import { CartService } from '../services/cart.services'

import * as fromCartActions from './cart.actions'

@Injectable()
export class CartEffects {
    loadCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCartActions.loadItemsInCart),
            mergeMap((action) =>
                this.cartService.findItemsInCart().pipe(
                    tap((p) => {
                        console.log(
                            'loadItemsInCart$ - cart.effect.ts',
                            p
                        )
                    }),
                    map((courses) =>
                        fromCartActions.loadItemsInCartSuccess(
                            { courses }
                        )
                    ),
                    catchError((error) =>
                        of(
                            fromCartActions.loadItemsInCartFailure(
                                { error }
                            )
                        )
                    )
                )
            )
        )
    )

    deleteItemFromCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCartActions.deleteItemFromCart),
            mergeMap((action) =>
                this.cartService
                    .removeItemInCart(action.courseId)
                    .pipe(
                        map((d) => d.data.removeFromCart),
                        tap((p) => {
                            console.log(
                                'removeItemInCart$ - cart.effect.ts',
                                p
                            )
                        }),
                        map((courseId: any) =>
                            fromCartActions.deleteItemFromCartSuccess(
                                { courseId: courseId }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCartActions.deleteItemFromCartFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    deleteAllItemsFromCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCartActions.deleteAllItemsFromCart),
            mergeMap((action) =>
                this.cartService
                    .removeAllItemsInCart()
                    .pipe(
                        map(
                            (d) => d.data.removeAllFromCart
                        ),
                        tap((p) => {
                            console.log(
                                'deleteAllItemsFromCart$ - cart.effect.ts',
                                p
                            )
                        }),
                        map((courseIds: any) =>
                            fromCartActions.deleteAllItemsFromCartSuccess(
                                { courseIds }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCartActions.deleteAllItemsFromCartFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    addItemToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCartActions.addItemsToCart),
            mergeMap((action) =>
                this.cartService
                    .addToCart(action.courseId)
                    .pipe(
                        map((d) => d.data.addNewCart),
                        tap((p) => {
                            console.log(
                                'addToCart$ - cart.effect.ts',
                                p
                            )
                        }),
                        map((course: any) =>
                            fromCartActions.addItemsToCartSuccess(
                                { course }
                            )
                        ),
                        catchError((error) =>
                            of(
                                fromCartActions.addItemsToCartFailure(
                                    { error }
                                )
                            )
                        )
                    )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private cartService: CartService,
        private router: Router
    ) {}
}
