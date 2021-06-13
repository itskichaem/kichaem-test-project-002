import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from 'src/constants/routes';
import HomePage from 'src/pages/HomePage';
import LandingPage from 'src/pages/LandingPage';

function RootPageRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={HomePage} />
        <Route exact path={Routes.ROOT} component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default RootPageRoutes;
