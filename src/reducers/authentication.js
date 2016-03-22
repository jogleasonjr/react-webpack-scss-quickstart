import * as AuthConstants from '../constants/authentication';

const initialState = {
    isLoggingIn: false,
    loginRequired: true
};

const authentication = (state = initialState, action) => {
    switch (action.type) {

        case AuthConstants.LOG_IN_PROMPT:
        {
            return {
                ...state,
                loginRequired: true
            };
        }

        case AuthConstants.LOG_IN_CANCEL:
        {
            return {
                ...state,
                loginRequired: false
            };
        }


        case AuthConstants.LOG_IN_REQUEST:
        {
            return {
                ...state,
                isLoggingIn: true
            };
        }

        case AuthConstants.LOG_IN_SUCCESS:
        {
            return {
                ...state,
                isLoggingIn: false,
                loginRequired: false,
                user: action.payload.user
            };
        }

        case AuthConstants.LOG_IN_ERROR:
        {
            return {
                ...state,
                isLoggingIn: false,
                error: action.error
            };
        }

        case AuthConstants.LOG_OUT:
        {
            return {
                ...state,
                isLoggingIn: false,
                user: null
            };
        }

        default:
        {
            return state;
        }
    }
};

export default authentication;