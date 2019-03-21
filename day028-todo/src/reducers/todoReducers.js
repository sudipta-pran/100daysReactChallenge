import { FETCH_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
    todos: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TODO:{
            const newTodos = [action.payload, ...state.todos]
            return {
                ...state,
                todos: newTodos
            }
        }
        case FETCH_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case UPDATE_TODO: {
            const newTodos = state.todos.map(todo => {
                if(todo.id === action.payload)
                todo.completed = !todo.completed
                return todo
            })
            return {
                ...state,
                todos: newTodos
            }
        }
        case DELETE_TODO: {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: newTodos
            }
        }

        default:
            return state
    }
}