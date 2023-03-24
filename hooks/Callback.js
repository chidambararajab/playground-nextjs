import React, { useState, useCallback } from "react";

export default function Callback() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onButtonClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
}

const ChildComponent = ({ onButtonClick }) => {
  return (
    <button style={{ padding: 20 }} onClick={onButtonClick}>
      Click
    </button>
  );
};
