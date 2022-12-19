import { useState } from 'react';

const useLocalforage = (keyName, defaultValue) => {
  const setItem = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
  };

  const defaultState = () => {
    const value = JSON.parse(localStorage.getItem(keyName));
    if (value) {
      return value;
    } else {
      setItem(defaultValue);
      return defaultValue;
    }
  };
  const [storedValue, setStoredValue] = useState(defaultState());

  const setValue = (newValue) => {
    setItem(newValue);
    setStoredValue(newValue);
  };
  // console.log({ storedValue: localforage.getItem(keyName) });

  return [storedValue, setValue];
};
export default useLocalforage;
