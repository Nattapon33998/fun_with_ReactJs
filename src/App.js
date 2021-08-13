import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";
import Ex1Style from "./components/ex1_styles";
import Ex2Image from "./components/ex2_image";
import Ex3Props from "./components/ex3_props";
import Ex5Nesting from "./components/ex5_DynamicNestingRoute.js";

import Deconstructuring from "./components/Deconstruct/deconstructuring";
import MapComponent from "./components/Map/mapComponent";
import Conditional from "./components/Conditional/conditional";
import UseEffect from "./components/useEffect/useEffect";
import TodoList from "./components/Todos/TodoList";
import TodoDetail from "./components/Todos/TodoDetail";
import Redux from "./components/Redux/DisplayRedux";

import { Link, Route, Switch } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1>Count : {count}</h1>

      <button onClick={()=>{
        setCount(count + 1);
      }}
      >
        Add
      </button>
      
      <button onClick={()=>{
        setCount(0);
      }}
      >
        Reset
      </button>

      <CounterClassComponent/>
      <CounterFunctionalComponent/>

      <Ex1Style/>

      <Ex2Image/>
      <Ex2Image image="/images/launch.png"/>

      <Ex3Props count={count} color="#F03" showLabel={true}/> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Ex1</Link>
          </li>
          <li>
            <Link to="/Ex2">Ex2</Link>
          </li>
          <li>
            <Link to="/Ex3">Ex3</Link>
          </li>
          <li>
            <Link to="/Cat">Cat</Link>
          </li>
          <li>
            <Link to="/Destructuring">Destructuring</Link>
          </li>
          <li>
            <Link to="Map">Map</Link>
          </li>
          <li>
            <Link to="/Conditional">Conditional</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/Todos">Todos</Link>
          </li>
          <li>
            <Link to="/Redux">Redux</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Ex1Style />
        </Route>
        <Route path="/Ex2">
          <Ex2Image />
        </Route>
        <Route path="/Ex3">
          <Ex3Props count={count} color="#F03" showLabel={true} />
        </Route>
        <Route path="/Cat">
          <Ex5Nesting />
        </Route>
        <Route path="/Destructuring">
          <Deconstructuring />
        </Route>
        <Route path="/Map">
          <MapComponent />
        </Route>
        <Route path="/Conditional">
          <Conditional />
        </Route>
        <Route path="/useEffect">
          <UseEffect />
        </Route>
        <Route path="/Todos">
          <TodoList />
        </Route>
        <Route path="/Todo/:id">
          <TodoDetail />
        </Route>
        <Route path="/Redux">
          <Redux />
        </Route>
        <Route path="/:id">
          <h3>404 NOt Found</h3>
        </Route>
      </Switch>
    </div>
  );
}
