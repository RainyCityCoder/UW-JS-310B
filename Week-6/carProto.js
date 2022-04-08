/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor ( model ) {
        this.model = model;
        this.currentSpeed = 0;
    }
    accelerate() {
        this.currentSpeed += 1;
        return this.currentSpeed;
    };
    brake() {
        this.currentSpeed -= 1;
        return this.currentSpeed;
    };
    toString() {
        return `This is a ${this.model} moving at ${this.currentSpeed}.`
    }
};


//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const silverCar = new Car('Prius');
silverCar.accelerate();
silverCar.accelerate();
silverCar.brake();
console.log(silverCar.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor ( model ) {
        super(model);
        this.motor = 'electric';
    }
    accelerate() {
        super.accelerate();
        super.accelerate();
    }
    toString() {
        return `This ${this.motor} ${this.model} is moving at ${this.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const redCar = new ElectricCar("Model S");
redCar.accelerate();
redCar.accelerate();
redCar.brake();
console.log(redCar.toString());