import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./ducks/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDrecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDrecrement}>decrement</button>
    </div>
  );
};

export default Counter;
