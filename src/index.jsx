import ReactDOM from 'react-dom';
import React from 'react';
import {Router, hashHistory} from 'react-router';
import routes from './config/routes';
import {Provider} from 'react-redux'
import "!style!css!sass!./styles/main.scss";

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('react-root')
);