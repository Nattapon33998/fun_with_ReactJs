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

import NestComponent from "./components/NestComponent";

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
      <NestComponent />
    </div>
  );
}
