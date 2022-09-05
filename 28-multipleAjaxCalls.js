var async = {
    getAll: function (urlArray, callback) {
        let promises = []; 
        for(let url of urlArray) {
            promises.push(fetch(url));
        }

        Promise.allSettled(promises).then(values  => {
            const fullfilledValues = values.filter(({status}) => status === "fulfilled");
            const context = fullfilledValues.map(({value}) => value);
            callback.call(context);
        });
    }
}

