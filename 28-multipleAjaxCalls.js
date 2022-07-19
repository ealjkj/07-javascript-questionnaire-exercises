var async = {
    getAll: function (urlArray, callback) {
        let promises = []; 
        for(let url of urlArray) {
            promises.push(fetch(url));
            promises.at(-1).then(callback);
        }

        Promise.all(promises).then(values => console.log(values));
    }
}

