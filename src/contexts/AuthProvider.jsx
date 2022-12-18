import { useNavigate } from 'react-router-dom';
import { useMemo, createContext } from 'react';
import useLocalforage from '../hooks/useLocalforage';

export const AuthContext = createContext({
  user: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalforage('user', null);

  const login = async (user) => {
    const { email } = user;
    const name = email?.split('@')[0];
    setUser({ name, email });
    navigate('/counter');
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
  );
  return <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
