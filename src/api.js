async function fetchData () {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json()
      return data
    }
    catch (error) {
      console.error(error);
      
    }
}

export default fetchData