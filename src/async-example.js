function loadData() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
return myPromise
 
}

export default loadData;
