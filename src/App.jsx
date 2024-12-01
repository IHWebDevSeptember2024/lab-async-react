import "./App.css";
import loadData from "./async-example";
import { useState, useEffect } from "react";
import React from "react";
import fetchData from "./api";

function App() {

useEffect(() =>{
  loadData()
  fetchData()
  
},[]);



  return (
    <>
    <loadData/>
      <h1>If you see this, it means that the App component is working fine!</h1>
      <p>
        Check the console to see the output of the <code>console.log</code>
      </p>
    </>
  );
}

export default App;
