import React, {useState} from 'react'

export default function CounterFunctionalComponent() {

    const [count, setCount] = useState(0)

    return (
        <div style={{ background: "yellow" }}>
            <h1>Counter functional component</h1>
            <h3>Counter (functional) : {count}</h3>

            <button onClick={()=>{
                setCount(count + 1)
            }}
            >
                Add
            </button>

        </div>
    )
}
