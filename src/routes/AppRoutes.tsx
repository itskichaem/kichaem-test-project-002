import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from 'src/constants/routes';
import NotFoundPage from 'src/pages/NotFoundPage';
import RootPage from 'src/pages/RootPage';

function AppRoutes() {
  const allPaths = Object.values(Routes);

  return (
    <Router>
      <Switch>
        <Route exact path={allPaths} component={RootPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
