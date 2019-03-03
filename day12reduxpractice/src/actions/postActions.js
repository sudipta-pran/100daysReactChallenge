import {FETCH_POST, ADD_POST} from "./types"

export const fetchPosts = () => dispatch => {
    setTimeout( () =>
        dispatch({
            type: FETCH_POST,
            payload: [{title:"first", body:"hello World"},{title:"second", body:"hello World"}]
        })
    , 1000)    
}

export const addPosts = (newPost) => dispatch => {
    setTimeout(() => {
        dispatch({
            type: ADD_POST,
            payload: newPost
        })
    }, 1000)    
}