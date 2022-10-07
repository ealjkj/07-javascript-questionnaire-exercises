var async = {
    getAll: function (urlArray, callback) {
        let promises = []; 
        for(let url of urlArray) {
            promises.push(fetch(url).then(value => value.json()));
        }

        Promise.allSettled(promises).then(values  => {
            const context = values.map(({value, reason}) => {
                return value || reason
            });         
            callback.call(context);
        });
    }
}

//Testing
const urls = [
    "https://swapi.dev/api/people/1", 
    "https://swapi.dev/api/planets/3", 
    "https://swapi.dev/api/starships/9", 
    "https://swapi.dev/api/error" // This one will fail
]

async.getAll(urls, function() { console.log(this)})