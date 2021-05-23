function Car(model, milesPerGallon) {
    this.tank = 0;
    this.odometer = 0;
    this.fill = function(gallons) {
        this.tank = this.tank + gallons;
    }
    this.drive = function(distance) {
        if(this.tank <= 0) {
            console.log(`I ran out of fuel at ${this.odometer} miles!`);
        }else {
            this.odometer = this.odometer + distance;
            this.tank = this.tank - (distance / milesPerGallon);
        }
    }
}

let vehicle = new Car("Peugeot", 10);


vehicle.fill(10);
vehicle.drive(90);
vehicle.drive(10);
console.log(vehicle.odometer);
console.log(vehicle.tank);
vehicle.drive(10);


