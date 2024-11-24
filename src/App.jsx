import "./App.css";
import makeAPromise from "./async-example";

function App() {
  makeAPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
  
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
