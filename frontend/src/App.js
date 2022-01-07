import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  const { token, login, logout } = useAuth();
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c1c1c'
      },
      secondary: {
        main: '#434343'
      }
    }
  });
  
  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" exact element={<OverviewPage />}/>
        <Route path="/profile" exact element={<ProfilePage />}/>
        <Route path="/heart-rate" exact element={<HeartRatePage />}/>
        <Route path="/weight" exact element={<WeightPage />}/>
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
        token: token,
        login: login,
        logout: logout
      }}
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          <MainNavigation />
              {routes}
          </BrowserRouter>
        </ThemeProvider>
      </AuthContext.Provider>

    );
}

export default App;
