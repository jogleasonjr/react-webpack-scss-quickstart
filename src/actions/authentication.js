// for actions, see: http://redux.js.org/docs/basics/Actions.html
// for some conventions, see: https://github.com/acdlite/flux-standard-action

import AuthConstants from '../constants/authentication';
import {Promise} from 'es6-promise';
import Storage from '../utils/storage';
import api from '../utils/Fakeapi';

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
        };
    }
};

export const loginCancel = () => ({
    type: AuthConstants.LOG_IN_CANCEL,
    payload: {}
});

export const loginRequest = () => ({
    type: AuthConstants.LOG_IN_REQUEST
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
    };
};

export const login = (formData) => {

    const {username, password} = formData;
    return (dispatch) => {
        dispatch(loginRequest());

        api.getToken(username, password)
            .then(authResponse => {
                var token = authResponse.access_token;
                return api.getUserProfile(token);
            })
            .then(profile => {
                Storage.setJSON(PROFILE_STORAGE_KEY, profile);
                dispatch(loginSuccess(profile));
            })
            .catch(errorStatusCode => {
                switch (errorStatusCode) {
                    case 400:
                        dispatch(loginError("Username or password is incorrect."));
                        break;
                    default:
                        dispatch(loginError("Unknown error: " + errorStatusCode));
                        break;
                }
            });
    };
};

