import keyMirror from 'fbjs/lib/keyMirror';

// use keyMirror here so we can cleanly refactor action names
// throughout the whole app.
const actionTypes = keyMirror({
    LOG_IN_PROMPT: null,
    LOG_IN_CANCEL: null,
    LOG_IN_REQUEST: null,
    LOG_IN_SUCCESS: null,
    LOG_IN_ERROR: null,
    LOG_OUT: null
});

export default {
    ...actionTypes,
    TOKEN_ENDPOINT: 'http://20.20.20.31:8012/oauth/token',
    PROFILE_ENDPOINT: 'http://20.20.20.31:8013/api/v1/userprofile/me'
};

console.log({
    ...actionTypes,
    TOKEN_ENDPOINT: 'http://20.20.20.31:8012/oauth/token',
    PROFILE_ENDPOINT: 'http://20.20.20.31:8013/api/v1/userprofile/me'
});