async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Error loading the data");
  }
}

export default fetchData;
