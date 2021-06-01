let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";

function addBrackets(string) {
    let firstHalf = string.slice(0, string.length/2)
    let secondHalf = string.slice(string.length/2)
    if(string.length % 2 === 0){
        let firstWithBrackets = firstHalf.replaceAll("", "(");
        let secondWithBrackets = secondHalf.replaceAll("", ")")
        return firstWithBrackets.slice(0, firstWithBrackets.length - 1) + secondWithBrackets.slice(1);
    }else {
    
		return firstHalf.replaceAll("", "(") + secondHalf.replaceAll("", ")").slice(1);
        
    }
}

console.log(addBrackets(s));