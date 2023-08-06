import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(x => x + 1)
  };

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={increaseCount}>+</button>
    </>    
  );
}