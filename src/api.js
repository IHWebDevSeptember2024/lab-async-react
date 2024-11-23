function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => {
    console.log(response);
    if (response.status === 404) {
      throw new Error("USER NOT FOUND");
    }
    return response.json();
  })
    .catch((error) => console.log(error));
}

export default fetchData;
