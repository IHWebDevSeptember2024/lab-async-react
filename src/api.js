// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => {
//     console.log(response);
//     if (response.status === 404) {
//       throw new Error("USER NOT FOUND");
//     }
//     return response.json();
//   })
//     .catch((error) => console.log(error));
// }

// export default fetchData;

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

    //si no se consiguen los datos
    if (response.status === 404) {
      throw new Error("Users not found");
    }

    //hacemos nuestra promise en la constante data
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;
