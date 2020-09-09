import {
    SENDIT_START,
    SENDIT_SUCCESS,
    SENDIT_FAILURE
  } from '../actions/actions';

export const initialState = {
    images: [],
    error: '',
    isFetching: true
}

export const sendIt = () => {
    
}

export const reducer = (state = initialState, action) => {
    return {...state}
}