import * as actionsType from '../auth/actions/authTypes';
const initialState = {
    token: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionsType.AUTH_START: {
            return {
                ...state,
                token: null,
                loading: true,
                error: false
            }
        }

        case actionsType.AUTH_SUCCESS: {
            return {
                ...state,
                token: action.tokenId,
                loading: false,
                error: false
            }
        }

        case actionsType.AUTH_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        case actionsType.AUTH_LOAGOUT: {
            return {
                ...state,
                token: null,
                loading: false,
                error: false
            }
        }

        default: 
        return state;
    
    }
}

export default reducer;