import { FETCH_POST, ADD_POST } from "../actions/types"

const initialState = {
    posts: [],
    newPost: null
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                posts: action.payload
            }            
        case ADD_POST:
            return {
                ...state,
                newPost: action.payload
            }
        default:
            return state
    }
}