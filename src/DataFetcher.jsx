import { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    
    async function fetchData() {
        try{ 
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const result = await response.json();
            return console.log("Data received: ", result);
        }   catch(error) {console.log("The call to the API has not worked. Error: ", error);
            }
    }
}