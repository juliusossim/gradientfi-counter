import { useNavigate, useOutlet } from 'react-router-dom';
import { useMemo, createContext } from 'react';
import useLocalforage from '../hooks/useLocalforage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalforage('user', null);

  const login = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = email?.split('@')[0];
    await setUser({ name, email });
    navigate('/auth/counter');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  ); // memoize  these for the session

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
}; // wraps all auth routes
