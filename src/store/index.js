import {createStore} from 'redux'
import reducers from '../reducers';

const initialState = {
    // global: {
    //     appName: "Redux App Template"
    // }
};

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : undefined;

const store = createStore(reducers, initialState, reduxDevToolsExtension);

export default store;