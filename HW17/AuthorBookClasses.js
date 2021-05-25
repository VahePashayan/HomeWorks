class Author {
    constructor(name, email, gender) {
        this._name = name;
        this.email = email;
        this.gender = gender;
    }

    

    set name (value) {
        if(typeof value !== "string") {
            throw new Error ("You can't change the name")
        }
    }
    
    get name () {
        return this._name;
    }

    toString = function () {
        if (this.gender = "male") {
            return `Mr. ${this.name}`;
        } else {
            return `Ms. ${this.name}`;
        }
    }
}

class Book {
    constructor(title, author, price, quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    getProfit = function() {
        return this.price * this.quantity;
    }

    toString = function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "female");

let book1 = new Book("Harry Potter", "J. K. Rowling", 50, 7);

// console.log(book1.getProfit());
// console.log(author1.gender); // female
// console.log(author1.name); // J. K. Rowling
// console.log(author1.toString()); // Ms. J. K. Rowling

console.log(book1.title);
console.log(book1.author);
console.log(book1.price);
console.log(book1.quantity);
console.log(book1.getProfit());
console.log(book1.toString());