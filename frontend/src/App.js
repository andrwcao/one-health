import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import OverviewPage from './pages/OverviewPage';
import ProfilePage from './pages/ProfilePage';
import HeartRatePage from './pages/HeartRatePage';
import WeightPage from './pages/WeightPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  const TOKEN = false;
  let routes;
  if (TOKEN) {
    routes = (
      <Routes>
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
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" exact element={<LandingPage />}/>
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
