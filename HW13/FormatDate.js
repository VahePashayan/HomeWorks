const formatDate = (date) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${day} ${months[month]} ${year}`;
}



console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");


