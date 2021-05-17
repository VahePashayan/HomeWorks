let getDay = function(dateString) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dateArr = dateString.split("/").map(el => parseInt(el));
    let date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
    let day = date.getDay();
    return days[day];
    
};

console.log(getDay("09/04/2016"))
