import { FETCH_TODO, ADD_TODO, UPDATE_TODO } from '../actions/types'

const initialState = {
    todos: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
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

        default:
            return state
    }
}