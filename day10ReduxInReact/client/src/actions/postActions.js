import { FETCH_POSTS, ADD_POST } from './types'

export const fetchPosts = () => (dispatch) => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => dispatch({
          type: FETCH_POSTS,
          payload: data
      }))
}

export const addPost = (postData) => (dispatch) => {
    fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: ADD_POST,
        payload: data
    }))    
}