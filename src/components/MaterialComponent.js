import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import MakeStyle from "./Material/MakeStyle";
import ButtonComponent from "./Material/ButtonComponent";
import TypographyComponent from "./Material/TypographyComponent";

const MaterialComponent = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <Link to={`${url}/makeStyle`}>MakeStyle</Link>
      </ul>
      <ul>
        <Link to={`${url}/button`}>Button</Link>
      </ul>
      <ul>
        <Link to={`${url}/typography`}>Typography</Link>
      </ul>

      <Switch>
        <Route path={`${path}/makeStyle`}>
          <MakeStyle red={true} blue={true} />
        </Route>
        <Route path={`${path}/>button`}>
          <ButtonComponent />
        </Route>
        <Route path={`${path}/typography`}>
          <TypographyComponent />
        </Route>
      </Switch>
    </div>
  );
};

export default MaterialComponent;
