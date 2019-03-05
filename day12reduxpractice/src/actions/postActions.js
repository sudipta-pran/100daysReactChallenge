import {FETCH_POSTS, ADD_POST} from './types'

export const fetchPosts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_POSTS,
        payload: data
    }))
}

export const addPost = (post) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: ADD_POST,
        payload: post
    }))
}