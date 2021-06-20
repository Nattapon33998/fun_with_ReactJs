import React, {useState} from 'react'
import CounterClassComponent from './CounterClassComponent'
import CounterFunctionalComponent from './CounterFunctionalComponent'
import Ex1Style from './components/ex1_styles'
import Ex2Image from './components/ex2_image'
import Ex3Props from './components/ex3_props'

import { Link, Route } from 'react-router-dom'

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
            <Link to='/'>Ex1</Link>
          </li>
          <li>
            <Link to='/Ex2'>Ex2</Link>
          </li>
          <li>
            <Link to='/Ex3'>Ex3</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/"><Ex1Style/></Route>
      <Route path="/Ex2"><Ex2Image/></Route>
      <Route path="/Ex3"><Ex3Props count={count} color="#F03" showLabel={true}/></Route>
    </div>
  )
}
