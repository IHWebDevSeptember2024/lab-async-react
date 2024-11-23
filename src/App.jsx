import "./App.css";
import asyncExample from "./async-example";
import getRickAndMorty from "./api";
import { useEffect } from "react";
import DataFetcher from "./component/DataFetcher";

function App() {
	// asyncExample()
	// async function getData() {
	//   const data = await getRickAndMorty()
	//   console.log(data);

	// }
	// useEffect(() => {
	//   getData()
	// }, [])

	return (
		<>
			{/* <h1>If you see this, it means that the App component is working fine!</h1>
			<p>
				Check the console to see the output of the <code>console.log</code>
			</p> */}
			<div>
				<DataFetcher />
			</div>
		</>
	);
}

export default App;
