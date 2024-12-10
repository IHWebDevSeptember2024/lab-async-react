async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    // en caso de no encontrar los datos...
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error ("Error fetching data:", error);
  }
}

export default fetchData;
