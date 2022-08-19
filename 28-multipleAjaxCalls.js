var async = {
    getAll: function (urlArray, callback) {
        let promises = []; 
        for(let url of urlArray) {
            promises.push(fetch(url));
        }

        Promise.all(promises).then(callback);
    }
}

