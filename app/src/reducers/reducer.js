import {
    SENDIT_START,
    SENDIT_SUCCESS,
    SENDIT_FAILURE
  } from '../actions/actions';

export const initialState = {
    images: [],
    error: '',
    isFetching: false
}

export const sendIt = () => {
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SENDIT_START:
            return {
                ...state,
                isFetching: true
            }
    }
    return {...state}
}