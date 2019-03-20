
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const initialState = {}

export default createStore(rootReducer, initialState, applyMiddleware(thunk))
