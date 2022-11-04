import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const [inputField, setInputField] = useState('Enter name');


  return (
    <>
        <h1>All about useState Hook</h1>
        <div style={{display:'flex'}}>
            <button onClick={()=> setCounter(counter-1)}>Decrement</button>
            <p style={{padding:'5px'}}>{counter}</p>
            <button onClick={()=> setCounter(counter+1)}>Increment</button>
            <input onChange={(e)=>{setInputField(e.target.value)}} placeholder='Enter name'/>
            <p>{inputField}</p>
            <p></p>
        </div>
    </>
  )
}

export default UseState