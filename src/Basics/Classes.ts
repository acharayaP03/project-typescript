/**
 * @Class in TypeScript
 */

class Vehicle {
  constructor(public color: string) {} // shorthand for the above commented code

  protected drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");

console.log("car", car);
