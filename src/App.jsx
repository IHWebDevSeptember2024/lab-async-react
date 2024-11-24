import { useEffect } from "react";
import "./App.css";
import loadData from "./async-example";
import fetchData from "./api";

function App() {
  useEffect(()=>{
    loadData()
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.error(error)})

  }, []);

   async function getData() { 
    const data = await fetchData();
    console.log(data);
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
