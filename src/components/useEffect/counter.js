import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./people";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    console.log("Open Counter");
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setData(response.data);
    });
    return () => {
      console.log("Clear Counter");
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

      {data &&
        data.map((d) => {
          const { id } = d;
          return (
            <div key={id}>
              <People {...d} />
            </div>
          );
        })}
    </div>
  );
};

export default Counter;
