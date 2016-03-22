// combine reducers here
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authentication from './authentication';

export default combineReducers(
    {
        authentication,
        form: formReducer,

        // this is just for the initial state
        // in the store.js
        // see: http://stackoverflow.com/a/33678198/5906146
        global: (state = {}) => state
    }
);