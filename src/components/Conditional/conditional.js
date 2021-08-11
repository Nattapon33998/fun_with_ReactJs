import React, { useState } from "react";

const Conditional = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <div>
      {logIn && (
        <div>
          <h3>login complet</h3>
        </div>
      )}

      {logIn ? <h3>in program</h3> : <h3>pleas Login</h3>}

      <button
        onClick={() => {
          setLogIn(!logIn);
        }}
      >
        {logIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Conditional;
