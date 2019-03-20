import { FETCH_TODO, ADD_TODO, UPDATE_TODO } from './types'

export const fetchTodos = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_TODO,
            payload:data
        }))
}

export const addTodo = (todo) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
    .then( response => response.json() )
    .then( data => dispatch({
        type: ADD_TODO,
        payload: data
    }))
}

export const updateTodo = id => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: id
    })
}