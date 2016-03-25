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
    ...actionTypes
};