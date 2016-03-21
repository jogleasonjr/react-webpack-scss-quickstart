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

        fetch(AuthConstants.TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${username}&password=${password}&grant_type=password&environmentId=dev_01`
        }).then(function (response) {
            response.json().then(json => {
                if (response.ok) {
                    console.log(json.access_token);
                    getProfile(json.access_token).then(profile => {
                        console.log('fetchprof', profile);
                        profile.accessToken = json.access_token;
                        dispatch(loginSuccess(profile));
                    });
                } else {
                    console.log('login error', json);
                    dispatch(loginError(json));
                }
            });
        }).catch(function (err) {
            console.log('network error', err);
            dispatch(loginError(err));
        });

        // .then(function (response) {
        //         console.log('response', response);
        //     }).then(function (wat) {
        //
        //     console.log('wat', wat);
        //
        //     dispatch(loginError(response));
        // });
    };
};

const getProfile = (token) => {
    return fetch(AuthConstants.PROFILE_ENDPOINT, {
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.log('network error', err);
        dispatch(loginError(err));
    });
};

export const login_x = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest(username, password));

        //fake login response from a server
        var loginPromise = new Promise(function (resolve) {
            setTimeout(() => resolve({
                name: "John Doe",
                username: username
            }), 1000);
        });

        loginPromise.then((user) => {
            dispatch(loginSuccess(user.name));
        });
    };
};