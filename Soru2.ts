// Soru2.ts

class Car {
  drive() {
    console.log("Car is driving...");
  }
}

class Truck {
  loadCargo(amount: number) {
    console.log(Truck is loading ${amount} kg of cargo...);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  // Type Guard: "loadCargo" özelliği varsa araç Truck'tır
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  } else {
    vehicle.drive();
  }
}

const car = new Car();
const truck = new Truck();

useVehicle(car);   // Car is driving...
useVehicle(truck); // Truck is loading 1000 kg of cargo...
