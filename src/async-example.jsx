function loadData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Data loaded")
            reject("Error loading data")
        }, 2000);

    })
}

export default loadData;