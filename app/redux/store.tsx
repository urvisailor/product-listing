import { applyMiddleware, combineReducers, createStore } from "redux";
import { products } from "./reducer";
import ReduxThunk from 'redux-thunk'

const reducer=combineReducers({
    product:products
})

const store=createStore(reducer,applyMiddleware(ReduxThunk))
export default store;