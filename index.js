var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.start = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
var car = new Car("Toyota", "CHR");
car.start();
