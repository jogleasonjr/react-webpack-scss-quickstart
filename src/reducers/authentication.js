import * as constants from '../actions/authentication';

const initialState = {
  isLoggingIn: false
};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOG_IN_REQUEST:
        {
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        }

        case constants.LOG_IN_SUCCESS:
        {
            return Object.assign({}, state, {
                user: {
                    name: action.payload.name,
                    isLoggingIn: false
                }
            });
        }

        case constants.LOG_OUT:
        {
            return Object.assign({}, state, {
                user: null,
                isLoggingIn: false
            });
        }

        default: {
            return state;
        }
    }
};

export default authentication;