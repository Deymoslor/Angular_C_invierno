import { createReducer, on } from "@ngrx/store"
import { findAll, load } from "./products.actions"

const products: any = []
const initialState: any = {
    products
}

export const productsReducer = createReducer(
    initialState,
    on(load => ({products: [... products]})),
    on(findAll, (state, { products }) => ({products: [... products]})),
    
)