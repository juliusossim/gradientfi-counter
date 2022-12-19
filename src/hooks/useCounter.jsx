import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const useCounter = () => {
  const { user } = useAuth(); // custom hook
  const [count, setCount] = useState(0); // count state
  const [val, setVal] = useState(1); // val state, to increase/decrease with/without input
  const paraCap = (string) => string.charAt(0).toUpperCase() + string.slice(1); // paragraph case
  const increaseCount = () => setCount((prev) => prev + val);
  const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - val : 0)); // decrease if not zero

  return { paraCap, decreaseCount, increaseCount, count, setVal, user }; // expose
};
export default useCounter;
