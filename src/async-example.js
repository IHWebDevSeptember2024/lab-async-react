
const myPromise = new Promise((resolve, reject)=>{
    const success = true;
    setTimeout(() => {if (success) {
        resolve("Data loaded");
    } else {
        reject("Data not loaded");
    }},2000)

})

myPromise
    .then((message) => {
        console.log(message);
        
    })
    .catch((error)=>{
        console.log(error);
        
    });
    
console.log(myPromise);


export default myPromise;