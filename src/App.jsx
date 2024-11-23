import React, { useEffect } from "react";
import loadData from "./async-example";
import fetchData from "./api";

function App() {
  useEffect(() => {
    fetchData().then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return <div className="App">check the console</div>;
}

export default App;