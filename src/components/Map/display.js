import React from "react";

const display = (props) => {
  const { name, sayary, bloudGroup } = props;
  console.log(props.address);
  return (
    <div>
      <h3>{`name: ${name} sayary: ${sayary} bloudGroup: ${bloudGroup}`}</h3>
      {props.address.map((detail) => {
        const { city, street, houseNumber } = detail;
        return (
          <h4 key={props.name}>
            {`City: ${city} Streat: ${street} HouseNumber: ${houseNumber}`}
          </h4>
        );
      })}
    </div>
  );
};

export default display;
