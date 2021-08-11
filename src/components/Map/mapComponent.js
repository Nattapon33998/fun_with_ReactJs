import React from "react";
import dataEmployees from "./data";
import Display from "./display";

const mapComponent = () => {
  const baseData = {
    company: "Google",
  };
  console.log(dataEmployees);
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
      {dataEmployees.map((employee) => {
        const Employee = { ...baseData, ...employee };
        return <Display key={Display.key} {...Employee} />;
      })}
    </div>
  );
};

export default mapComponent;
