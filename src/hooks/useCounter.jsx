import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const useCounter = () => {
  const { user } = useAuth(); // custom hook
  const [count, setCount] = useState(0); // count state
  const [val, setVal] = useState(1); // val state, to increase/decrease with/without input
  const paraCap = (string) => string.charAt(0).toUpperCase() + string.slice(1); // paragraph case
  const increaseCount = () => setCount((prev) => (!isNaN(val) ? prev + val : prev + 1));
  const decreaseCount = () => setCount((prev) => (!isNaN(val) ? prev - val : prev - 1)); // decrease if not zero

  return { paraCap, decreaseCount, increaseCount, count, setVal, user }; // expose
};
export default useCounter;
