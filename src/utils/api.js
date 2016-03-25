import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch';

const headers = {
    urlEncoded: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

const servers = {
    token:'http://20.20.20.31:8012/',
    api:'http://20.20.20.31:8013/api/'
};

const endpoints = {
    token: servers.token + 'oauth/token',
    getProfile: servers.api + 'v1/userprofile/me'
};

export default  {

    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response.status);
        }
    },

    json(response) {
        return response.json();
    },

    getToken(username, password) {

        return fetch(endpoints.token, {
            method: 'POST',
            headers: {
                ...headers.urlEncoded
            },
            body: `username=${username}&password=${password}&grant_type=password&environmentId=dev_01`
        })
            .then(this.status)
            .then(this.json)
            .then(function (data) {
                return data;
            }).catch(function (error) {
                throw error;
            });
    },

    getUserProfile(token) {
        return fetch(endpoints.getProfile, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(this.status)
            .then(this.json)
            .then(profile => ({'accessToken' : token, ...profile}))
            .catch(function (error) {
                throw error;
            });
    }


};