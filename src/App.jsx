import "./App.css";
import fetchData from "./api";
import React, { useEffect } from "react";
import myPromise from "./async-example";

function App() {
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <h1>If you see this, it means that the App component is working fine!</h1>
      <p>
        Check the console to see the output of the <code>console.log</code>
      </p>
    </>
  );
}

export default App;
