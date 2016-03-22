import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers';
import thunkMiddleware  from 'redux-thunk'


const initialState = {
    global: {
        applicationName: "Redux App Template",
        storedUserName: "jgleason_dev01",
        storedPassword: "sunshine"
    }
};

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware),
        reduxDevToolsExtension
    )
);

export default store;