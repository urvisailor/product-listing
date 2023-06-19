import axios from "axios"
import { AnyAction, Dispatch } from "redux"
import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "./types"

const url = 'https://fakestoreapi.com/'
export const getProducts = () => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: GET_PRODUCTS })
            const response = await axios.get(`${url}products`)
            if (response.status) {
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data })
            } else {
                dispatch({ type: GET_PRODUCTS_FAILED })
            }
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_FAILED })
        }
    }
}