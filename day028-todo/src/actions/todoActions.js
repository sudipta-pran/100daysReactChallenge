import { FETCH_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types'

export const fetchTodos = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_TODO,
            payload:data
        }))
}

export const addTodo = (title) => (dispatch) => {
    const newTodo = {
        completed: false,
        id: Math.ceil(Math.random()*100) + 10,
        title: title,
        userId: 1
    }
    dispatch({
        type: ADD_TODO,
        payload: newTodo
    })
}

export const updateTodo = id => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: id
    })
}

export const deleteTodo = id => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
}