let january2017 = new Date(2017, 0, 1);
let december2018 = new Date(2018, 11, 1);

let months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November',
'December'];

let monthsInterval = function(date1, date2) {
    let res = [];
    let interval = 0;
    if(date2.getFullYear() - date1.getFullYear() === 0) {
        interval = date2.getMonth() - date1.getMonth();
    }else{
        interval = (date2.getMonth() - date1.getMonth()) + ((date2.getFullYear() - date1.getFullYear()) * 12);
    }
    for(let i = date1.getMonth(); i <= date1.getMonth() + interval; i++) {
        if(i >= months.length) {
            res.push(months[i - (months.length)]);
        }else {
            res.push(months[i]);
        }
    }
    return res;
};

console.log(monthsInterval(january2017, december2018));