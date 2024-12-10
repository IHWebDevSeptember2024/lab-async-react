import "./App.css";
import loadData from "./async-example";
import { useEffect } from "react";
import fetchData from "./api";

function App() {

console.log(loadData())
  useEffect(() =>{
    loadData()
    .then((message) =>console.log(message))
    .catch((error) => console.error(error));

  },[]);
  useEffect(() => {
    fetchData()
    .then((data) => {
      console.log("esto es data: ", data);
    });
  }, []);
  
  
  return (
    <>
    <div className="App">Check the console for messages.</div>
      <div className="App">Fetching data...</div>
      <h1>If you see this, it means that the App component is working fine!</h1>
      <p>
        Check the console to see the output of the <code>console.log</code>
      </p>
    </>
  );
}


export default App;
