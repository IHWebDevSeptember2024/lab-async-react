function loadData(){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (true){
                resolve("Data loaded");
            } reject ("Couldn't load data")
        }, 2000);
    })

    return myPromise
}

export default loadData;