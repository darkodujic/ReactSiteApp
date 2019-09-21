import * as actionTypes from './savedTypes';
import axios from 'axios';


export const SAVED_START = () => {
    return {
        type: actionTypes.SAVED_START
    }
}

export const SAVED_SUCCESS = savedMovies => {
    return {
        type: actionTypes.SAVED_SUCCESS,
        saved: savedMovies
    }
}

export const SAVED_ERROR = error => {
    return {
        type: actionTypes.SAVED_ERROR,
        error: error
    }
}

export const SAVED_DELETE = id => {
    return {
        type: actionTypes.SAVED_DELETE,
        id: id
    }
}

export const SAVED_DELETE_FETCH = id => {
    return dispatch => {
        dispatch(SAVED_DELETE(id))
    }
}

export const SAVED_FETCH = movieId => {

    return dispatch => {
        dispatch(SAVED_START());
        let key = 'a1e70815ed514d294dc936b2f74a2ef3';

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`).then(res => {

            let fetchedResults = [];

            let results = res.data;

            results.poster_path = 'https://image.tmdb.org/t/p/original' + results.poster_path
 
            fetchedResults.push(results);

            localStorage.setItem('page', results);

        dispatch(SAVED_SUCCESS(fetchedResults))
        

        }).catch(error => {
            dispatch(SAVED_ERROR(error.message))
        })
    }
}

export const STORAGE = () => {
    return dispatch => {
       localStorage.getItem('page');
    }

}