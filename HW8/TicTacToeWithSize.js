let inputSize = 6;

let createTicTacToe = function(size) {
    let innerArr = [];
    innerArr.length = 6;
    innerArr.fill("_");
    let board = [];
    board.length = size;
    board.fill(innerArr);
    
    let boardStr = board.join("  ");
    function randomInteger() {
        return Math.floor(Math.random() * size);
    }
    let sign = "x";
    let x;
    let y;
   
    for (let i = 0; true; i++) {
        x = randomInteger();
        y = randomInteger();
        if (board[x][y] === "_") {
            board[x][y] = sign;
        } else {
            continue;
        }
        
        if (sign === "x") {
            sign = "o";
        } else if (sign === "o") {
            sign = "x";
        }
    }
}


console.log(createTicTacToe(inputSize));