const fetchData = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch("Error loading the data");
};

export default fetchData;
