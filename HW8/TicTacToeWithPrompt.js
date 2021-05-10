let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];

let playerName1 = prompt("Player 1 please enter your name.");
let playerName2 = prompt("Player 2 please enter your name.");
let name = playerName1;
let player = "x";

let countX = 0;
let countO = 0;

while (true) {
    let boardStr = board[0].join("   ") +
        "\n" +
        board[1].join("   ") +
        "\n" +
        board[2].join("   ");

    let row = +prompt("Dear " + name + " (" + player + "), please write the value for the row \n\n" + boardStr);

    let column = +prompt("Dear " + name + " (" + player + "), please write the value for the column \n\n" + boardStr);

    if (player === "x") { 
        countX++;
    }
    else {
        countO++;
    }

    if (board[row][column] !== "_") {
        alert("Not a legal move, you lose!");
        break;
    }


    board[row][column] = player;


    if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
        board[0][0] = board[0][0].toUpperCase();
        board[0][1] = board[0][1].toUpperCase();
        board[0][2] = board[0][2].toUpperCase();
        boardStr = board[0].join("   ") + 
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
        board[1][0] = board[1][0].toUpperCase();
        board[1][1] = board[1][1].toUpperCase();
        board[1][2] = board[1][2].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
        board[2][0] = board[2][0].toUpperCase();
        board[2][1] = board[2][1].toUpperCase();
        board[2][2] = board[2][2].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
        board[0][0] = board[0][0].toUpperCase();
        board[1][0] = board[1][0].toUpperCase();
        board[2][0] = board[2][0].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
        board[0][1] = board[0][1].toUpperCase();
        board[1][1] = board[1][1].toUpperCase();
        board[2][1] = board[2][1].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
        board[0][2] = board[0][2].toUpperCase();
        board[1][2] = board[1][2].toUpperCase();
        board[2][2] = board[2][2].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        board[0][0] = board[0][0].toUpperCase();
        board[1][1] = board[1][1].toUpperCase();
        board[2][2] = board[2][2].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        board[0][2] = board[0][2].toUpperCase();
        board[1][1] = board[1][1].toUpperCase();
        board[2][0] = board[2][0].toUpperCase();
        boardStr = board[0].join("   ") +
            "\n" +
            board[1].join("   ") +
            "\n" +
            board[2].join("   ");
        alert(name + "(" + player + ") you win!\n\n" + boardStr);
        break;
    }

    if (countX === 4 && countO === 4) {
        alert("Draw");
    }

    if (name === playerName1) {
        name = playerName2;
    } else {
        name = playerName1;
    }

    if (player === "x") {
        player = "o";
    } else {
        player = "x";
    }

}