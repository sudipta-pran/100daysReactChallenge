import { FETCH_POST, ADD_POST } from "./types"

export const fetchPosts = () => (dispatch) => {
    //FETCH THE POSTS
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_POST,
        payload: data
    }))
}

export const addPost = (postData) => (dispatch) => {
    //FETCH THE POSTS
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: ADD_POST,
        payload: {
            ...postData,
            id:101
        }
    }))
}