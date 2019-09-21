import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false,
    error: false
}


export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.MOVIE_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case actionTypes.MOVIE_SUCCESS: {
        return {
            movies: action.Movies,
            loading: false,
            error: false,

        }

             }

        case actionTypes.MOVIE_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: 
        return state;
    }
}

export default reducer;