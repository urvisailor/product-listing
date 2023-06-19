import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "./types";

export interface StateProps {
    isloading: false,
    products: []
}
const initialState = {
    isloading: false,
    products: []
}

export const products = (state=initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                isloading: false,
            }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isloading: true,
                products: action.payload
            }
        }
        case GET_PRODUCTS_FAILED: {
            return {
                ...state,
                isloading: false,
            }
        }
        default:
            return initialState
    }

}