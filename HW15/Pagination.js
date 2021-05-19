const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
let index = 0;
let pageSize = 4;
let Pagination = {
    array: [],
    init: (arr, pageSize) => {
        let res = arr.join("").slice(index, pageSize + index).split("");
        Pagination.array = arr;
        return res;
    },

    nextPage: () => index += pageSize,
    getPageItems: () => Pagination.init(alphabetArray, pageSize),
    prevPage: () => index -= pageSize,
    firstPage: () => {
        index = 0;
        return Pagination.init(alphabetArray, pageSize);
    },
    goToPage: (page) => {
        index = pageSize * (page - 1);
        return Pagination.init(alphabetArray, pageSize);
    },
    lastPage: () => {
        index = Pagination.array.length - (Pagination.array.length % pageSize);
        return Pagination.init(alphabetArray, pageSize);
    }



};

Pagination.init(alphabetArray, 4);
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());





