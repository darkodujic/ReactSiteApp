import * as actionTypes from './actionTypes';
import axios from 'axios';

export const MOVIE_START = () => {
    return {
        type: actionTypes.MOVIE_START
    }
};


export const MOVIE_SUCCESS = (Movies, page) => {

    return {
        type: actionTypes.MOVIE_SUCCESS,
        Movies: Movies,
    }
}


export const MOVIE_FAIL = error => {
    return {
        type: actionTypes.MOVIE_ERROR,
        error: error
    }
}

export const MOVIE_FETCH = (pageNumber) => {
    return dispatch => {
        dispatch(MOVIE_START())

        let key = 'a1e70815ed514d294dc936b2f74a2ef3';

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_video=true&page=${pageNumber}`).then(res => {
            let fetchMovies = [];
            const results = res.data.results;

            results.forEach(el => {
                el.imageCreate = 'https://image.tmdb.org/t/p/original' + el.backdrop_path;

                fetchMovies.push(el);
            })

            fetchMovies.splice(0, 4);
            dispatch(MOVIE_SUCCESS(fetchMovies))
        }).catch(error => {
            dispatch(MOVIE_FAIL(error.message))
        })

    }
}


export const MOVIE_NEWEST = pageNumber => {
    return dispatch => {
        dispatch(MOVIE_START());
        let key = 'a1e70815ed514d294dc936b2f74a2ef3';

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageNumber}`).then(res => {
            let fetchMovies = [];
            const results = res.data.results;

            results.forEach(el => {
                el.imageCreate = 'https://image.tmdb.org/t/p/original' + el.backdrop_path;

                fetchMovies.push(el);
            })
            fetchMovies.splice(0, 4);
            dispatch(MOVIE_SUCCESS(fetchMovies))
        }).catch(error => {
            dispatch(MOVIE_FAIL(error.message))
        })
    }
}

export const MOVIE_UPCOMING = pageNumber => {
    return dispatch => {
        dispatch(MOVIE_START());
        let key = 'a1e70815ed514d294dc936b2f74a2ef3';

        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${pageNumber}`).then(res => {
            let fetchMovies = [];
            const results = res.data.results;

            results.forEach(el => {
                el.imageCreate = 'https://image.tmdb.org/t/p/original' + el.backdrop_path;

                fetchMovies.push(el);
            })
          

            fetchMovies.splice(0, 4);
            dispatch(MOVIE_SUCCESS(fetchMovies))
        }).catch(error => {
            dispatch(MOVIE_FAIL(error.message))
        })
    }
} 


export const MOVIE_ID = (id) => {
    return dispatch => {
        dispatch(MOVIE_START());
        let key = 'a1e70815ed514d294dc936b2f74a2ef3';

        axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then(res => {
            let fetchMovies = [];
            const results = res.data.results;
       
            results.forEach(el => {
                el.imageCreate = 'https://image.tmdb.org/t/p/original' + el.backdrop_path;

                fetchMovies.push(el);
            })

            fetchMovies.splice(6, 5);
setTimeout(() => {
    dispatch(MOVIE_SUCCESS(fetchMovies))
}, 1500);
           
        }).catch(error => {
            dispatch(MOVIE_FAIL(error.message))
        })
    }
} 

export const MOVIE_ACTOR = (actorId, firstpageNumber, secondNumber) => {
    return dispatch => {
    let key = 'a1e70815ed514d294dc936b2f74a2ef3';
    axios.get(`http://api.themoviedb.org/3/discover/movie?with_cast=${actorId}&sort_by=release_date.asc&api_key=${key}&page=${firstpageNumber}`).then(res => {
        let fetchedResults = [];

        let results = res.data.results;
      

        results.forEach(el => {
         el.poster_path = 'https://image.tmdb.org/t/p/original' + el.poster_path

            
       fetchedResults.push(el);

         })

         fetchedResults.splice(0, 8);
       results.profile_path = 'https://image.tmdb.org/t/p/original' + results.profile_path;

       dispatch(MOVIE_SUCCESS(fetchedResults))
    }).catch(error => {
        dispatch(MOVIE_FAIL(error.message))
    })

}



}

