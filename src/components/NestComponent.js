import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import ReactComponent from "./ReactComponent";
import MaterialComponent from "./MaterialComponent";

const NestComponent = () => {
  return (
    <div>
      <li>
        <Link to="/React">React</Link>
      </li>
      <li>
        <Link to="/Material">Material</Link>
      </li>

      <Switch>
        <Route path="/React">
          <ReactComponent />
        </Route>
        <Route path="/Material">
          <MaterialComponent />
        </Route>
      </Switch>
    </div>
  );
};

export default NestComponent;
