import React from "react";
import { useReducer } from "react";

const reducer = (state, action)=>{
    switch (action.type){
        case "INCREMENT":
            return {count: state.count+1, showText: state.showText}
        case "ToggleText":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const UseReducer = () => {
    // use Reducer Syntax
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    }) // reducer function & initital state


  return (
    <>
      <h1>All about useReducer Hook</h1>
      <h2>{state.count}</h2>
      <button onClick={()=>{
        dispatch({type: "INCREMENT"})
        dispatch({type: "ToggleText"})
      }}>Increment Counter</button>
      {state.showText && <p>This is the text</p>}
    </>
  );
};

export default UseReducer;
