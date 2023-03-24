import React, { useRef, useState, useEffect } from "react";

export default function Ref() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    console.log("data");
  }, []);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
