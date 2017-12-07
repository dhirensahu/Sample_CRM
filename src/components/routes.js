import React from 'react';

import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Employee from './employee.js';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Employee}>
      <IndexRoute component={Employee}/>
      <Route path="/employee" component={Employee}>

      </Route>
      <Route path="*" component={Employee}/>
    </Route>
  </Router>
);

export default Routes;