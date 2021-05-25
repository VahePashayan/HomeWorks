class CoffeeShop{ 
    constructor(name, menu = [], orders = []) {
        this.amount = 0;
        this.name = name;
        this.menu = menu;
        this.orders = orders;
        this.arrOfMenuNames = menu.map((item) => item.name);
    }

    addOrder = function(order) {
        if(this.arrOfMenuNames.indexOf(order) === -1) {
            console.log("This item is currently unavailable!");
        }else {
            this.orders.push(this.arrOfMenuNames[this.arrOfMenuNames.indexOf(order)])
            this.amount += this.menu[this.arrOfMenuNames.indexOf(order)].price;
        }
    }

    dueAmount = function() {
        if(this.orders.length === 0) {
            this.amount = 0;
        }
        console.log(this.amount);
    }

    listOrders = function() {
        console.log(this.orders);
    }

    fulfillOrder = function() {
        if(this.orders.length !== 0) {
            console.log(`The ${this.orders.shift()} is ready!`)
        }else {
            console.log("All orders have been fulfilled!")
        }
    }

    cheapestItem = function() {
        let min = Infinity;
        let nameOfMin;
        this.menu.forEach((item) => {
            if(item.price <= min){
                min = item.price;
                nameOfMin = item.name;
            }
        })
        console.log(nameOfMin);
    }

    drinksOnly = function() {
        let drinks = this.menu.filter((item) => item.type === "drink")
        let drinksNames = drinks.map((item) => item.name)
        console.log(drinksNames);    
    }

    foodOnly = function() {
        let food = this.menu.filter((item) => item.type === "food")
        let foodNames = food.map((item) => item.name);
        console.log(foodNames);
    }
     
}

let tcs = new CoffeeShop("Jazzve", [{name: "cinnamon roll", type: "food", price: 1.40},
 {name: "iced coffee", type: "drink", price: 0.90}], []);

 tcs.addOrder("hot cocoa");
 tcs.addOrder("iced tea");
 tcs.addOrder("cinnamon roll"); // "Order added!"
 tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders(); // ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order
tcs.dueAmount();
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// // all orders have been presumably served
tcs.listOrders();
tcs.dueAmount();
tcs.cheapestItem();
tcs.drinksOnly();
tcs.foodOnly();