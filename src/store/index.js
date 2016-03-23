import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';


const initialState = {
    // global: {
    //     appName: "Redux App Template"
    // }
};

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : undefined;

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware));

export default store;
