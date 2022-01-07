import { useState, useCallback, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(false);

    const login = () => {
      setToken(true);
    };
  
    const logout = () => {
      setToken(false);
    };

    return { token, login, logout };
};

export default useAuth;