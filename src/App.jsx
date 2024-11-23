import "./App.css";
import { useEffect } from "react";
// import getPromise from "./async-example";
import fetchData from "./api";

function App() {
  async function getData() {
    fetchData();
  }
  useEffect(() => {
    getData();
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
