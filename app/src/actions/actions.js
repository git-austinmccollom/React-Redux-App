import axios from 'axios';
import date from 'date-and-time';

const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=1nZRJTT4osWq35OiAIXOHJsMaxERpf42eUdEu52d';
const today = date.format( new Date(), 'YYYY-MM-DD');

export const SENDIT_START = "SENDIT_START";
export const SENDIT_SUCCESS = "SENDIT_SUCCESS";
export const SENDIT_FAILURE = "SENDIT_FAILURE";

export const sendIt = () => dispatch => {
    dispatch({type: SENDIT_START});
    axios.get(`${BASE_URL}&date=${today}`)
        .then( (res) => {
            console.log(res);
            console.log(res.data);
            dispatch({type: SENDIT_SUCCESS, payload: res.data})
        })
        .catch( (err) => {
            console.error(err);
            dispatch({type: SENDIT_FAILURE, payload: err})
        })
}