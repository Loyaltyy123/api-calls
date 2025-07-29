import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <p>Expensive Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
}

export default ExpensiveCalculationComponent;
