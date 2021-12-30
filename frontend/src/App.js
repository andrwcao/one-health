import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import OverviewPage from './user/pages/OverviewPage';
import ProfilePage from './user/pages/ProfilePage';
import HeartRatePage from './user/pages/HeartRatePage';
import WeightPage from './user/pages/WeightPage';
import LandingPage from './user/pages/LandingPage';

function App() {
  TOKEN = true;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <OverviewPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/heart-rate" exact>
          <HeartRatePage />
        </Route>
        <Route path="/weight">
          <WeightPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
