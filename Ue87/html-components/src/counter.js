import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increaseCounter}>Increase by 2</button>
    </div>
  );
};

export default Counter;
