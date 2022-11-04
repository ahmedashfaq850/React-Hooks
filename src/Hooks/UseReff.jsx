import React from 'react'
import { useRef } from 'react'
const UseReff = () => {
    const inputReff = useRef(null)
    let name;

    const onChange=()=>{
        name = inputReff.current.value
        console.log(name)
    }
  return (
    <>
        <h1>All about useRef Hook</h1>
        <h2>{}</h2>
        <input type='text' placeholder='Enter Name' ref={inputReff}/>
        <button onClick={onChange}>Change Name</button>

    </>
  )
}

export default UseReff