import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useAuth from './shared/hooks/auth-hook.js';
import { AuthContext } from './shared/context/auth-context';
import MainNavigation from './shared/navigation/MainNavigation';



const OverviewPage = React.lazy(() => import('./pages/OverviewPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const HeartRatePage = React.lazy(() => import('./pages/HeartRatePage'));
const WeightPage = React.lazy(() => import('./pages/WeightPage'));
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));

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
        <Route path="/profile" exact element={<ProfilePage />}/>
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
              <Suspense fallback={<div>Loading</div>}>{routes}</Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContext.Provider>

    );
}

export default App;
