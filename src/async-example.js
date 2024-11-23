function myFunction() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('promise resolved!');
      reject('Error loading data')
    }, 2000);
  });
}



myFunction
.then((resolve)=>{
    console.log(resolve);
})

.catch((reject)=>{
    console.log(reject)
});





export default myFunction;
