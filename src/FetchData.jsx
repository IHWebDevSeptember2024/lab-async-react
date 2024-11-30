function fetchData () {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Data received from API: ", data)
    })
    .catch((error)=> console.log("The call to the API has not worked. Error: ", error));
}

export default fetchData;