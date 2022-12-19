import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const useLogin = () => {
  const { login } = useAuth();
  const [errors, setErrors] = useState(false);

  const validateEmail = (event) => {
    event.preventDefault();
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const email = event.target.value;
    return setErrors(!pattern.test(email));
  };

  return { login, errors, validateEmail };
};
export default useLogin;
