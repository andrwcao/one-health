import { useState, useCallback, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(false);

    const login = useCallback((token) => {
      setToken(token);
      localStorage.setItem('userData', JSON.stringify({token: token}));
    }, []);
  
    const logout = () => {
      setToken(false);
    };

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.token) {
        login(userData.token);
      }
    }, [login]);

    return { token, login, logout };
};

export default useAuth;