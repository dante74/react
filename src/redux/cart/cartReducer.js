import { ADD_PRODUCT } from "./cartTypes"

const initialState = {
    products: [],

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload]
            }

        default: return state
    }
}

export default cartReducer;