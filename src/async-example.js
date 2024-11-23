const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data loaded");
  } else {
    reject("Operation failed.");
  }
});
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });


  export default myPromise;



