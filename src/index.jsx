// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, hashHistory} from 'react-router';
import routes from './config/routes';
import auth from './reducers/authenticate';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(auth);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('react-root')
);