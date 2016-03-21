import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/authentication';
import {Promise} from 'es6-promise';

// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

// action creators
export const loginRequest = (username, password) => ({
    type: ActionTypes.LOG_IN_REQUEST,
    payload: {
        username,
        password
    }
});

// action creators
export const loginSuccess = (name) => ({
    type: ActionTypes.LOG_IN_SUCCESS,
    payload: {
        name
    }
});

export const logout = () => ({
    type: ActionTypes.LOG_OUT
});

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest(username, password));

        //fake login response from a server
        var loginPromise = new Promise(function(resolve) {
            setTimeout(() =>  resolve({
                name: "John Doe",
                username: username
            }), 1000);
        });

        loginPromise.then((user) => {
            dispatch(loginSuccess(user.name));
        });
    };
};