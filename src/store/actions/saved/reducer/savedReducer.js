import * as actionTypes from '../actions/savedTypes';

const initialState = {
    saved: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SAVED_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case actionTypes.SAVED_SUCCESS: {


            return {
                ...state,
                saved: action.saved,
                loading: false,
                error: false
            }
        }
  
        case actionTypes.SAVED_DELETE: {
            return {
                ...state,
                saved: state.saved.filter(el => el.id !== action.id)
            }
        }

        case actionTypes.SAVED_ERROR: {
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