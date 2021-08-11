import React, { useState } from "react";

import Counter from "./counter";

const useEffectComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? "open" : "close"}
      </button>
      {open && (
        <div>
          <Counter />
        </div>
      )}
    </div>
  );
};

export default useEffectComponent;
