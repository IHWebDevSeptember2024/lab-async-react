import "./App.css";
import myPromise from "./async-example";
import { useState, useEffect } from "react";
import fetchData from "./FetchData";

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

useEffect(()=> {
  fetchData();
}, [])


return (  
  <>
  {data==="" ?<p> Loading </p>:<p> {data} </p>}
  {error &&<p> This has not worked </p>}
  </>
)
  }
export default App;
