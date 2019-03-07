import {FETCH_HOROSCOPE} from './types'
const userId = ''
const apiKey = ''

export const fetchHoroscope = (data) => (dispatch) => {
    fetch("https://json.astrologyapi.com/v1/astro_details",{
        method: "POST",
        headers: {
        authorization: "Basic " + btoa(userId+":"+apiKey),
        "Content-Type":'application/json'
    },
    body:JSON.stringify(data)})
    .then( resp => resp.json())
    .then(res =>  dispatch({
        type: FETCH_HOROSCOPE,
        payload: res
    }))
    .catch(err =>
        console.log(err)
    )
}