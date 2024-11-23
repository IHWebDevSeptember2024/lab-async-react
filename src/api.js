const getRickAndMorty = () => {
	fetch("https://rickandmortyapi.com/api/character")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data.results); // Use the data
		})
		.catch((error) => {
			console.log(error);
		});
};

export default getRickAndMorty;
