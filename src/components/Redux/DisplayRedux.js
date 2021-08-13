import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

const DisplayRedux = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2>Total count: {count}</h2>
      <Counter />
    </div>
  );
};

export default DisplayRedux;
