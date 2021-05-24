let Airplane = {
    name: "ARMavia",
    isFlying: false,
    takeOff: function () {
        this.isFlying = true;
    },
    land: function () {
        this.isFlying = false;
    }
};

console.log(Airplane.name);
console.log(Airplane.isFlying);
Airplane.takeOff();
console.log(Airplane.isFlying);
Airplane.land();
console.log(Airplane.isFlying);