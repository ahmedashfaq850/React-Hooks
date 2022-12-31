import React from "react";
import { useState, useRef } from "react";

const UseReff = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  function focus (){
    inputRef.current.focus()
  }


  return (
    <div>
      <div>UseReff</div>
      <input ref={inputRef} type='text' value={input} onChange={(e)=> setInput(e.target.value)} placeholder="enter name" />
      <h1>My name is: {input}</h1>
      <button onClick={focus}>focus</button>
    </div>
  );
};

export default UseReff;
