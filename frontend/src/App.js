import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import useAuth from './shared/hooks/auth-hook.js';
import { AuthContext } from './shared/context/auth-context';
import MainNavigation from './shared/navigation/MainNavigation';
import OverviewPage from './pages/OverviewPage';
import ProfilePage from './pages/ProfilePage';
import HeartRatePage from './pages/HeartRatePage';
import WeightPage from './pages/WeightPage';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const { isLoggedIn, login, logout, userId } = useAuth();
  let routes;
  if (isLoggedIn) {
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
        <Route path="/signup" exact element={<SignUpPage />}/>
        <Route path="/login" exact element={<LoginPage />}/>
      </Routes>
    );
  }

  return (
      <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}
      >
        <BrowserRouter>
        <MainNavigation />
          {routes}
        </BrowserRouter>
      </AuthContext.Provider>
    );
}

export default App;
