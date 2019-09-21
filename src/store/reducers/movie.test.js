import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducer from './movie';
import * as actionTypes from '../actions/actionTypes';

configure({adapter: new Adapter()})


describe('reducer check', () => {

    it('return old state', () => {
        expect(reducer(undefined, {})).toEqual({
            movies: [],
            loading: false,
            error: false
        })
    })

    it ('return new state', () => {
        expect(reducer({
            movies: [],
            loading: false,
            error: false
        }, {type: actionTypes.MOVIE_SUCCESS, Movies: 'Movies'})).toEqual({
            movies: 'Movies',
            loading: false,
            error: false,
        })
    })
})