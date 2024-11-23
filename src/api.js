function fetchData(){
    fetch('https://swapi.dev/api/')
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}

export default fetchData;