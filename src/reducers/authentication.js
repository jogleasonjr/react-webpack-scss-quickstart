import * as ActionTypes from '../constants/authentication';

const initialState = {
  isLoggingIn: false
};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOG_IN_REQUEST:
        {
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        }

        case ActionTypes.LOG_IN_SUCCESS:
        {
            return Object.assign({}, state, {
                user: {
                    name: action.payload.name,
                    isLoggingIn: false
                }
            });
        }

        case ActionTypes.LOG_OUT:
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