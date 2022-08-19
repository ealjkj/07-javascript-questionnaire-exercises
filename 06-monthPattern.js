function addApril(string) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    
    const lastMonth = string.split(" ").at(-1);
    const monthNumber = months.indexOf(lastMonth);
    const oneMoreMonth = months.filter((value, index) => index <= monthNumber + 1);
    return oneMoreMonth.join(" ") + " " + oneMoreMonth.join(" ");

}

const str = "January February March January February March";
console.log(addApril(str));
