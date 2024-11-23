function fetchData(){

    return fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    
    export default fetchData;
  
