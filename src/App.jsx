import React, { useEffect } from "react";
import fetchData from "./api";

function App() {
  async function getData() {
    const data = await fetchData();
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">Fetching data with async/await...</div>;
}

export default App;