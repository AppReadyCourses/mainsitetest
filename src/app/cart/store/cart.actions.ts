import { createAction, props } from '@ngrx/store'
import { Course } from 'src/app/courses/model/course.model'
import { Cart } from '../model/cart.model'

// Load Carts

export const loadItemsInCart = createAction(
    '[Cart/API] Load Cart'
)

export const loadItemsInCartSuccess = createAction(
    '[Cart/API] Load Cart Success',
    props<{ courses: Course[] }>()
)

export const loadItemsInCartFailure = createAction(
    '[Cart/API] Load Cart Failure',
    props<{ error: any }>()
)

// Add cart

export const addItemsToCart = createAction(
    '[Cart/API] Add Item To Cart',
    props<{ courseId: string }>()
)

export const addItemsToCartSuccess = createAction(
    '[Cart/API] Add Item To Cart Success',
    props<{ course: Course }>()
)

export const addItemsToCartFailure = createAction(
    '[Cart/API] Add Item To Cart Failure',
    props<{ error: any }>()
)

// Delete Cart

export const deleteItemFromCart = createAction(
    '[Cart/API] Delete Item From Cart',
    props<{ courseId: string }>()
)

export const deleteItemFromCartSuccess = createAction(
    '[Cart/API] Delete Item From Cart Success',
    props<{ courseId: string }>()
)

export const deleteItemFromCartFailure = createAction(
    '[Cart/API] Delete Item From Cart Failure',
    props<{ error: any }>()
)

// Remove all items in cart

export const deleteAllItemsFromCart = createAction(
    '[Cart/API] Delete All Item From Cart'
)
export const deleteAllItemsFromCartSuccess = createAction(
    '[Cart/API] Delete All Item From Cart Success',
    props<{ courseIds: string[] }>()
)
export const deleteAllItemsFromCartFailure = createAction(
    '[Cart/API] Delete All Item From Cart Failure',
    props<{ error: any }>()
)
