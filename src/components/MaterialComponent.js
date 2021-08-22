import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import MakeStyle from "./Material/MakeStyle";

const MaterialComponent = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <Link to={`${url}/makeStyle`}>MakeStyle</Link>
      </ul>

      <Switch>
        <Route path={`${path}/makeStyle`}>
          <MakeStyle red={true} blue={true} />
        </Route>
      </Switch>
    </div>
  );
};

export default MaterialComponent;
