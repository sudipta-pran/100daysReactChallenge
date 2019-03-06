import { combineReducers } from 'redux'
import horoscopeReducers from './horoscopeReducers'

export default combineReducers({
    horoscope: horoscopeReducers 
})