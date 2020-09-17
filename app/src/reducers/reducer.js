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

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SENDIT_START:
            return {
                ...state,
                isFetching: true
            }
        case SENDIT_SUCCESS:
            const newImage = action.payload;
            const newImagesArray = state.images;
            newImagesArray.push(newImage);
            return {
                ...state,
                images: newImagesArray,
                isFetching: false
            }
        case SENDIT_FAILURE:
            return {
                ...state,
            }
        default:
            return {...state}
    }
    
}