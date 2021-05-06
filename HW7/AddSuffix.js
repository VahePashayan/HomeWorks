let addEnding = (str1) => {
    return (str2) => {
        return str2 + str1;
    }
}

add_ly = addEnding("ly");

console.log(add_ly("hopeless"));
console.log(add_ly("total"));


add_less = addEnding("less");

console.log(add_less("fear"));
console.log(add_less("ruth"));