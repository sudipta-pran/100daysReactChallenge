import {FETCH_POSTS, ADD_POST} from '../actions/types'


const initialState = {
    posts: [],
    newPost: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return state = {
                ...state,
                posts: action.payload
            }
        case ADD_POST:
            return state = {
                ...state,
                newPost: action.payload
            }
        default:
            return state
    }
}