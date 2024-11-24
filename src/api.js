function fetchData(){
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.results;
      })
      .catch((error) => {
        console.error("Couldn't fetch data: ", error);
      });
}

export default fetchData;