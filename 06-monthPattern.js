function addApril(string) {
    const regex = /January February March/g;
    return string.replace(regex, v => v + ' April');
}

const str = "January February March January February March";
console.log(addApril(str));
