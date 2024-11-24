import { useEffect } from "react";
import "./App.css";
import loadData from "./async-example";
import fetchData from "./api";
import DataFetcher from "./DataFetcher";

function App() {
  /* useEffect(()=>{
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
  }, []); */


  return (
    <>
      <DataFetcher />
    </>
  );
}

export default App;
