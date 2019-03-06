import {FETCH_HOROSCOPE} from '../actions/types'

const initialState = {
    horoscope: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_HOROSCOPE:
            return {
                ...state,
                horoscope: action.payload
            }
        default:
            return state
    }
} 