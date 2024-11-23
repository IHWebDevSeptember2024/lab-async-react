/*function fetchData() {
  fetch("https://swapi.dev/api/")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default fetchData; */

//Renderizado con async/await
async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/");

    if (response.status === 404) {
      throw new Error("Not Found");
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

export default fetchData;
