import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/movie.js';
import sorted from './store/reducers/sorted';
import auth from './store/actions/reducer/authReducer';
import {BrowserRouter} from 'react-router-dom';
import saved from './store/actions/saved/reducer/savedReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    movie: reducer,
    sorted: sorted,
    auth: auth,
    saved: saved
    
})


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



const app = (
<Provider store={store}>
    <BrowserRouter basename="/">
<App />
</BrowserRouter>
</Provider>


)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
