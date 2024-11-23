const asyncExample = () => {
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Data loaded")
    }, 2000);

})

myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
    
})}

export default asyncExample
