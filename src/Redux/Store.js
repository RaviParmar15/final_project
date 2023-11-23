import {applyMiddleware, combineReducers, legacy_createStore, } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './Reducer'
import { ProReducers } from './ProductsRedux/ProductReducers'

export const MainReducer= combineReducers({
    reducer,
    ProReducers,
    
})


export const store = legacy_createStore(MainReducer,applyMiddleware(thunk))