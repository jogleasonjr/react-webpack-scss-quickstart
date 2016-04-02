import {Promise} from 'es6-promise';

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

    // fake a token using the username
    getToken(username, password) {

        var p = new Promise((resolve) =>

            setTimeout(() => {
                resolve({
                    access_token: username
                });
            }, 500));

        return p;
    },

    getUserProfile(token) {
        var p = new Promise((resolve) =>

            setTimeout(() => {
                resolve({
                    accessToken: token,
                    name: token
                });
            }, 500));

        return p;
    }
};