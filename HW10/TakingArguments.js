function sum(...args) {
    return args.reduce((sum, current) => {
        return sum + current;
    });
}
    console.log(sum(1, 2)); 
    console.log(sum(1, 2, 3, 4, 5, 6)); 
    