import { useEffect, useState } from "react";
import "./DataFetcher.css";

function DataFetcher() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	async function getData() {
		try {
			setLoading(true);
			const response = await fetch("https://rickandmortyapi.com/api/character");
			if (!response.ok) {
				throw new Error(
					"There was an error connecting to the API:",
					response.status
				);
			}
			const responseData = await response.json();

			setData(responseData.results);
			setLoading(false);
			//console.log(data);
		} catch (error) {
			setLoading(false);
			setError(error);
			//console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	if (loading) {
		return <div>Loading</div>;
	} else if (error) {
		return <div>Error: {error.message}</div>;
	} else {
		return (
			<div className="characters">
				{data.map((character, index) => {
					return (
						<article key={index}>
							<img src={character.image} alt="" />
							<h3>{character.name}</h3>
							<p>From: {character.location.name}</p>
						</article>
					);
				})}
			</div>
		);
	}
}

export default DataFetcher;
