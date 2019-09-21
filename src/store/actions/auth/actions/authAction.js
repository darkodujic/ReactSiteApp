import * as actionTypes from './authTypes';
import axios from 'axios';



export const AUTH_START = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const LOAGOUT = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOAGOUT
    }
}


export const AUTH_SUCCESS = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: authData
    }
}


export const AUTH_FAIL = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const AUTH_LOAGOUT_FETCH = () => {
    return dispatch => {
        dispatch(LOAGOUT());
    }
}

export const AUTH_FETCH = (username, password) => {
    return dispatch => {
        dispatch(AUTH_START());

        let key = 'a1e70815ed514d294dc936b2f74a2ef3';
        axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`).then(res => {
 dispatch(AUTH_SUCCESS(res.data.request_token))
 localStorage.setItem('token', res.data.request_token)
 localStorage.setItem('expirationDate', res.data.expires_at)
        }).catch(error => {
            dispatch(AUTH_FAIL(error))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch(LOAGOUT())
        }else {
            const expirationDate = localStorage.getItem('expirationDate');

            if (expirationDate < new Date()) {
                dispatch(LOAGOUT());
            }else {
                dispatch(AUTH_SUCCESS(token))
            }
        }
    }
}