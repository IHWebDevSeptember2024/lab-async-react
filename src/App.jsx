import "./App.css";
import myPromise from "./async-example";

function App() {
  return (
    <>
      <h1>If you see this, it means that the App component is working fine!</h1>
      <p>
        Check the console to see the output of the <code>console.log</code>
      </p>
      <p>{myPromise}</p>
    </>
  );
}

export default App;
