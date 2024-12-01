async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    // en caso de no encontrar los datos...
    if (response.status === 404) {
      throw new Error("Not Found");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error");
  }
}
fetchData();
export default fetchData;
