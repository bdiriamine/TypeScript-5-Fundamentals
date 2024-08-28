interface Vehicle {
    make: string;
    model: string;
    year?: number;
    start(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string,) {
        this.make = make;
        this.model = model;

    }
    start(): void {
        console.log("Le moteur de la voiture a démarré");
    }
}

const car = new Car("Toyota", "CHR");


car.start(); 