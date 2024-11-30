const myPromise = () =>{ 
  return new Promise ((resolve, reject)=> {
  
setTimeout(()=> {
    resolve ("Data loaded");}, 2000);
})
 }
export default myPromise;