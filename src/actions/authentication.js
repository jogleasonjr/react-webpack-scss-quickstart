import fetch from 'isomorphic-fetch';
import * as AuthConstants from '../constants/authentication';
import {Promise} from 'es6-promise';

// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

// action creators
export const loginRequest = (username, password) => ({
    type: AuthConstants.LOG_IN_REQUEST,
    payload: {
        username,
        password
    }
});

export const loginSuccess = (user) => ({
    type: AuthConstants.LOG_IN_SUCCESS,
    payload: {
        user
    }
});

export const loginError = (status) => ({
    type: AuthConstants.LOG_IN_ERROR,
    payload: new Error(status),
    error: true
});

export const logout = () => ({
    type: AuthConstants.LOG_OUT
});

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest(username, password));

        //fake login response from a server
        var loginPromise = new Promise(function (resolve) {
            setTimeout(() => resolve({
                accessToken: "asdf",
                name: "John Doe",
                username: username
            }), 1000);
        });

        loginPromise.then((results) => {
            dispatch(loginSuccess(results));
        });
    };
};