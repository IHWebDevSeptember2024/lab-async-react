import "./App.css";

import fetchData from "./api";
import makeAPromise from "./async-example";
import { useEffect } from "react";

function App() {
  // const dittoData = "https://pokeapi.co/api/v2/pokemon/ditto"
  // const chewakaData = "https://swapi.dev/api/people/13"
  // const rickData = "https://rickandmortyapi.com/api/character/1"
  const jPHData = "https://jsonplaceholder.typicode.com/todos/1"
  useEffect(()=> {
    makeAPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  
    fetchData(jPHData)
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
