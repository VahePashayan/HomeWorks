class Account {
    constructor(id, name, balance) {
        this.id = id;
        this._name = name;
        this._balance = balance;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    credit = function (amount) {
        this._balance += amount;
        return this._balance;
    }

    debit = function (amount) {
        if (amount < this._balance) {
            this._balance -= amount;
            return this._balance;
        } else {
            return "Amount exceeded balance."
        }
    }

    transferTo = function (anotherAcc, amount) {
        if (amount < this._balance) {
            this._balance -= amount;
            anotherAcc._balance += amount;
            return this._balance;
        } else {
            return "Amount exceeded balance."
        }
    }

    identifyAccounts = function(acc1, acc2) {
        let equalityId = acc1._id === acc2._id;
        let equalityName = acc1._name === acc2._name;
        let equalityBalance = acc1._balance === acc2._balance;
        if(equalityId && equalityName && equalityBalance) {
            return true;
        }else {
            return false;
        }
    }

    toString = function() {
        return `${this._name}'s account balance is $${this._balance}`;
    }
}

let savingAcc = new Account(0, "Saving account", 2000);
let cardAcc = new Account(1, "Card account", 1000);

// console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
// console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400));  // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //Amount exceeded balance.
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
// console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
// console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.