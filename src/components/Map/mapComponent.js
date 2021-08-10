import React from "react";
import dataEmployees from "./data";
import Display from "./display";

const mapComponent = () => {
  return (
    <div>
      {/* Type 1 */}
      {/* {dataEmployees.map((employee) => {
        const {
          name: employeeName,
          sayary: employeeSayary,
          bloudGroup: employeeBloudgroup,
        } = employee;
        return (
          <Display
            name={employeeName}
            sayary={employeeSayary}
            bloudGroup={employeeBloudgroup}
          />
        );
      })} */}

      {/* easy way */}
      {dataEmployees.map((employee) => (
        <Display key={Display.key} {...employee} />
      ))}
    </div>
  );
};

export default mapComponent;
