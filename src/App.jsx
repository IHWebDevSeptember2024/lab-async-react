import "./App.css";
import loadData from "./async-example";
import fetchData from "./api";
import { useEffect } from "react";

function App() {
  loadData
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

  useEffect(() => {
    fetchData();
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
