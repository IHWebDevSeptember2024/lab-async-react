//const getRickAndMorty = () => {
	// fetch("https://rickandmortyapi.com/api/character")
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data.results); // Use the data
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

// };

async function getRickAndMorty() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if(!response.ok) {
            throw new Error("There was an error connecting to the API")
        }
        const data = await response.json();
        //console.log(data.results);
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


export default getRickAndMorty;
