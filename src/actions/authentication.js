// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

import fetch from 'isomorphic-fetch';
import AuthConstants from '../constants/authentication';
import {Promise} from 'es6-promise';
import Storage from '../utils/storage';

const PROFILE_STORAGE_KEY = 'PROFILE_STORAGE_KEY';

export const loginPrompt = () => {
    var profile = Storage.getJSON(PROFILE_STORAGE_KEY);
    if (profile) {
        return loginSuccess(profile);
    }
    else {
        return {
            type: AuthConstants.LOG_IN_PROMPT,
            payload: {}
        }
    }
};

export const loginCancel = (username, password) => ({
    type: AuthConstants.LOG_IN_CANCEL,
    payload: {}
});

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

export const logout = () => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);

    return {
        type: AuthConstants.LOG_OUT
    }
};

export const login = (formData) => {

    const {username, password} = formData;

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
                        profile.accessToken = json.access_token;

                        Storage.setJSON(PROFILE_STORAGE_KEY, profile);

                        dispatch(loginSuccess(profile));
                    });
                } else {
                    console.log('login error', json);
                    dispatch(loginError(json.error_description));
                }
            });
        }).catch(function (err) {
            console.log('network error', err);
            dispatch(loginError(err));
        });
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