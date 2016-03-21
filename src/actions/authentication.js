import fetch from 'isomorphic-fetch';
import {Promise} from 'es6-promise';

// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

// action types
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

// action creators
export const loginRequest = (username, password) => ({
    type: LOG_IN_REQUEST,
    payload: {
        username,
        password
    }
});

// action creators
export const loginSuccess = (name) => ({
    type: LOG_IN_SUCCESS,
    payload: {
        name
    }
});


export const logout = () => ({
    type: LOG_OUT
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