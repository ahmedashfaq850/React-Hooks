import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
      });

  },[]);

  return (
    <>
      <h1>All about useEffect Hook</h1>
      <p>Call data using api with useEffect hook</p>
      <h3>Email is: {data}</h3>
    </>
  );
};

export default UseEffect;
