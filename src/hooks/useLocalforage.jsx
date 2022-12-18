import localforage from 'localforage';
import { useState } from 'react';
const useLocalforage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localforage.getItem(keyName);
      if (value) {
        return value;
      } else {
        localforage.setItem(keyName, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      localforage.setItem(keyName, newValue);
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
export default useLocalforage;
