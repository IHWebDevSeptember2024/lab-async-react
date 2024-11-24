async function fetchData(){
    try{
        const apiResponse = await fetch("https://rickandmortyapi.com/api/character");
       
        if (!apiResponse.ok) {
          throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        const jsonResponse = await apiResponse.json();
        const data = jsonResponse.results;
        return data;
    } catch(error){
        console.error("Couldn't fetch data: ", error); 
    }
}

export default fetchData;