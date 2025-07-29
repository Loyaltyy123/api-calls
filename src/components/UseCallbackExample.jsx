import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

const MemoizedChild = React.memo(ChildComponent);

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Without useCallback, this function gets recreated on every render
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <MemoizedChild onClick={handleClick} />
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
}

export default UseCallbackExample;
