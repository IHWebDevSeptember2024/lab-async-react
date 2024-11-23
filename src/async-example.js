const loadData = new Promise ((resolve, reject) => {
    const success = true
    setTimeout (() => {
        if (success) {
            resolve ("Data loaded!")
        } else {
            reject ("Error loading data")
        }
    }, 2000);
})

export default loadData