// Bring the last digit of the number to the beginning
let int = 12345;
let last;
let str;

if (int % 10 === 0) {
    console.log(int);
} else {
    str = int.toString();
    last = str[str.length - 1];
    console.log(last + str.slice(0, str.length - 1))
}





