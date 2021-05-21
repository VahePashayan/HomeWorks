const regExp = /<\w.*?>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(regExp))



//'<a href="/">', '<input type="radio" checked>', "<b>";

