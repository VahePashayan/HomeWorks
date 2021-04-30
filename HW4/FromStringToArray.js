let sen = "Keep your, friends close, but your enemies closer.";
let senWithoutComma = sen.replaceAll(",", "");
let without = senWithoutComma.replaceAll(".", "");
let arr = without.split(" ");
console.log(arr);