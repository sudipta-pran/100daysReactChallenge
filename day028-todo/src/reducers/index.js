import todoReducer from './todoReducers'
import { combineReducers } from 'redux'

export default combineReducers({
    todos: todoReducer
})