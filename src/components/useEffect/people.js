import React, { useState, useEffect } from "react";

const People = (props) => {
  const { name, username, email, ...detail } = props;
  const {
    phone,
    website,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
  } = detail;
  const [openDetail, setOpenDetail] = useState(false);
  console.log(detail);

  return (
    <div>
      <h5>{`Name: ${name} Username: ${username} Email: ${email}`}</h5>

      {openDetail && (
        <div>
          <h6>{`Phone: ${phone}, Web: ${website}`}</h6>
        </div>
      )}

      <button
        onClick={() => {
          setOpenDetail(!openDetail);
        }}
      >
        {!openDetail ? "open" : "close"}
      </button>
    </div>
  );
};

export default People;
