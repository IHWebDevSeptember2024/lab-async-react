import { useState, useEffect } from "react";

function DataFetcher(){

    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    async function fetchData() {
        try {
          const apiResponse = await fetch(
            "https://rickandmortyapi.com/api/character"
          );

          
          if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
          }
          
          const jsonResponse = await apiResponse.json();
          const data = jsonResponse.results;
          setLoading(false);
          setData(data);
          console.log(data);
        } catch (error) {
          console.error("Couldn't fetch data: ", error);
          setLoading(false);
          setError(error.message);
        } 
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        {loading && <p>Loading data...</p>}
        {error && <p>{error}</p>}
        {data && (
          <ul>
            {data.map((character, index) => {
              return <li key={index}>{character.name}</li>;
            })}
          </ul>
        )}
      </>
    );

}

export default DataFetcher;