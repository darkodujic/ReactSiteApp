import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducer from './sorted'
import * as sortedTypes from '../actions/sorted/sortedTypes';

configure({adapter: new Adapter()});

describe('sorted check', () => {
    it('sorted testing', () => {
        expect(reducer({
            sorted: [],
            loading: false,
            error: false
        }, {type: sortedTypes.SORTED_SUCCESS, Sorted: 'Sorted test'})).toEqual({
            loading: false,
            error: false,
            sorted: 'Sorted test',
        })
    })
})