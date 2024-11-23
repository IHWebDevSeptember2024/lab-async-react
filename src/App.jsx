import "./App.css";
import asyncExample from "./async-example";
import getRickAndMorty from "./api";
import { useEffect } from "react";

function App() {
  asyncExample()
  useEffect(() => {
    getRickAndMorty()
  }, [])

  
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
