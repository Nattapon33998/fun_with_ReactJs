import React, { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";

import Ex1Style from "./ex1_styles";
import Ex2Image from "./ex2_image";
import Ex3Props from "./ex3_props";
import Ex5Nesting from "./ex5_DynamicNestingRoute.js";

import Deconstructuring from "./Deconstruct/deconstructuring";
import MapComponent from "./Map/mapComponent";
import Conditional from "./Conditional/conditional";
import UseEffect from "./useEffect/useEffect";
import TodoList from "./Todos/TodoList";
import TodoDetail from "./Todos/TodoDetail";
import Redux from "./Redux/DisplayRedux";

const ReactComponent = () => {
  let { url, path } = useRouteMatch();
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/EX1`}>Ex1</Link>
          </li>
          <li>
            <Link to={`${url}/Ex2`}>Ex2</Link>
          </li>
          <li>
            <Link to={`${url}/Ex3`}>Ex3</Link>
          </li>
          <li>
            <Link to={`${url}/Cat`}>Cat</Link>
          </li>
          <li>
            <Link to={`${url}/Destructuring`}>Destructuring</Link>
          </li>
          <li>
            <Link to={`${url}/Map`}>Map</Link>
          </li>
          <li>
            <Link to={`${url}/Conditional`}>Conditional</Link>
          </li>
          <li>
            <Link to={`${url}/useEffect`}>useEffect</Link>
          </li>
          <li>
            <Link to={`${url}/Todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`${url}/Redux`}>Redux</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={`${path}/Ex1`}>
          <Ex1Style />
        </Route>
        <Route path={`${path}/Ex2`}>
          <Ex2Image />
        </Route>
        <Route path={`${path}/Ex3`}>
          <Ex3Props count={count} color="#F03" showLabel={true} />
        </Route>
        <Route path={`${path}/Cat`}>
          <Ex5Nesting />
        </Route>
        <Route path={`${path}/Destructuring`}>
          <Deconstructuring />
        </Route>
        <Route path={`${path}/Map`}>
          <MapComponent />
        </Route>
        <Route path={`${path}/Conditional`}>
          <Conditional />
        </Route>
        <Route path={`${path}/useEffect`}>
          <UseEffect />
        </Route>
        <Route path={`${path}/Todos`}>
          <TodoList />
        </Route>
        <Route path={`${path}/Todo/:id`}>
          <TodoDetail />
        </Route>
        <Route path={`${path}/Redux`}>
          <Redux />
        </Route>
      </Switch>
    </div>
  );
};

export default ReactComponent;
