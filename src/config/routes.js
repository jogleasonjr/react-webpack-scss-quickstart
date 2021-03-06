import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';
import NotFound404 from '../components/pages/NotFound404';

export default (
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Page1} />
            <Route path="page2" component={Page2} />
            <Route path="*" component={NotFound404} />
        </Route>
    </Router>
);