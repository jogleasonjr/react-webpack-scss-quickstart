import * as AuthConstants from '../constants/authentication';

const initialState = {
  isLoggingIn: false
};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case AuthConstants.LOG_IN_REQUEST:
        {
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        }

        case AuthConstants.LOG_IN_SUCCESS:
        {
            return Object.assign({}, state, {
                isLoggingIn: false,
                user: action.payload.user
            });
        }

        case AuthConstants.LOG_IN_ERROR:
        {
            return Object.assign({}, state, {
                isLoggingIn: false,
                error: action.error
            });
        }

        case AuthConstants.LOG_OUT:
        {
            return Object.assign({}, state, {
                isLoggingIn: false,
                user: null
            });
        }

        default: {
            return state;
        }
    }
};

export default authentication;