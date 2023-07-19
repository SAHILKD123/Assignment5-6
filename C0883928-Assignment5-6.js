// Student Name: Sahil Hantaal  
// Student ID: C0883928

class CarModels {
  constructor(brand, model, year, color, price, gas) {
    Object.assign(this, { brand, model, year, color, price, gas });
  }

  honk = () => {
    console.log("Tuut tuut");
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Color: ${this.color}`);
    console.log(`Price: $${this.price}`);
    console.log(`Gas: ${this.gas} liters`);
  };

  loseGas = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    this.gas = Math.max(this.gas - (age === 0 ? 5 : 5 + age), 0);
  };
}

// Model data for cars
const cars = [
  new CarModels("Honda", "CR-V", 2023, "Red", 50000, 45),
  new CarModels("Ford", "F-150", 2020, "Black", 25000, 30),
  new CarModels("BMW", "X5", 2022, "Green", 60000, 65),
  new CarModels("Mazda", "CX-5", 2019, "White", 15000, 60),
  new CarModels("Audi", "Q7", 2018, "Silver", 52000, 47),
  new CarModels("Kia", "Forte", 2020, "Blue", 21000, 56),
];

// Honking Method
cars.forEach((car, index) => {
  console.log(`\n\nCar ${index + 1}:`);
  car.honk();
});

// Racing Between Cars
for (let turn = 1; turn <= 7; turn++) {
  cars.forEach((car) => car.loseGas());
}

console.log("\nAfter 7 turns, remaining gas:");
cars.forEach((car, index) => {
  console.log(`\nCar ${index + 1}:`, car.gas, "liters");
});
