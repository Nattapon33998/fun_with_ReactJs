import React, {useState} from 'react'
import CounterClassComponent from './CounterClassComponent'
import CounterFunctionalComponent from './CounterFunctionalComponent'
import Ex1Style from './components/ex1_styles'

export default function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>

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
    </div>
  )
}
