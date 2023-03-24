import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Effect({ dependiency = true }) {
  const [count, setCount] = useState(0);
  if (dependiency === false) {
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });

    return <h1>I've rendered {count} times!</h1>;
  } else {
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
  }
}
