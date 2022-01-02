import { useState, useCallback, useEffect } from 'react';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(false);
  
    const login = () => {
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      setIsLoggedIn(false);
    };

    return { isLoggedIn, login, logout, userId };
};

export default useAuth;