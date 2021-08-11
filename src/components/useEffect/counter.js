import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Open Counter");
    return () => {
      console.log("Clear Counter");
      setCount(0);
    };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        incress
      </button>
    </div>
  );
};

export default Counter;
