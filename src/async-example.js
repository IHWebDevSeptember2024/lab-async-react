const myPromise = new Promise ((resolve, reject)=> {
  
setTimeout(()=> {
    resolve ("Data loaded");}, 2000);
    reject('Operation failed');
})

myPromise
.then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

  myPromise(); 

export default myPromise;