import React from "react";
import employeeData from "./data";

const deconstructuring = () => {
  const {
    name,
    salary,
    address: {
      city,
      road,
      detail: { number },
    },
  } = employeeData;
  return (
    <div>
      <h3>
        {`name: ${name} salary: ${salary} city: ${city} road: ${road} house
        number:${number}`}
      </h3>
    </div>
  );
};

export default deconstructuring;
