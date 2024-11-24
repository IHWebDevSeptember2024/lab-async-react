function makeAPromise() {
    return new Promise((resolve, reject) => {
    const success = false;

    setTimeout(() => {
      if (success) {
        resolve("Data loaded");
      } else {
        reject("Data not loaded");
      }
    }, 2000);
  });
}

export default makeAPromise;
