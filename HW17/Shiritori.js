class Shiritori {
    constructor() {
        this.words = [];
        this.game_over = false;
    }

    play (word) {
        if(this.words.length === 0) {
            this.words.push(word);
            console.log(this.words);
        }else if(this.words.indexOf(word) === -1 && this.words[this.words.length - 1].split("").reverse().join("")[0] === word[0]) {
            this.words.push(word);
            console.log(this.words);
        }else if(this.words.indexOf(word) !== -1) {
            console.log(`GAME OVER, ${word} have been already said`)
        }else {
            console.log(`GAME OVER, ${word} does not start with "${this.words[this.words.length - 1].split("").reverse().join("")[0]}"`);
            this.game_over = true;
        }
    }

    restart () {
        this.words.length = 0;
        this.game_over = false;
        console.log("game restarted");
    }
}

myShiritori = new Shiritori();
myShiritori.play("apple"); // ["apple"]
myShiritori.play("ear"); // ["apple", "ear"]
myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
myShiritori.play("corn"); // "game over"
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
myShiritori.play("hostess"); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"