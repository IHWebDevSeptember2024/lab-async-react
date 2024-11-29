import "./App.css";
import myPromise from "./async-example";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect (()=> {
    myPromise()
    .then((result)=> { 
    setData(result)
   })
    .catch((error)=> { 
    setError(error)
  });
}, [])

  
  return (
    <>
    { data? ( 
    <p>Message: {data}</p> )
    : <p>Loading</p>
   }
    </>
  );
 }

export default App;
