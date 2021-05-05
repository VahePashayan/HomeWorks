let books = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
    ];

let sortByPercent = function(arr) {
    let readStatusTrue = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].readStatus === true) {
            readStatusTrue.push(arr[i]);
        }
    }
    let sortedArr = readStatusTrue.sort(function (a, b) {
        if(a.percent >= b.percent) {
            return -1;
        }else {
            return 1;
        }
    });
    console.log(sortedArr);
}

sortByPercent(books);