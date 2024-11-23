function getPromise(){
return new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Error loading data");
    }
  }, 2000);
});

}
export default getPromise