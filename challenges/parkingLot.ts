// [$]> npx ts-node parkingLot.ts

enum VehicleType {
  Motorcycle,
  Car,
  Van
}

enum SpotType {
  Motorcycle,
  Regular,
  Large
}

interface IParkingLot {
  getRemainingSpots(): number;
  getTotalSpots(): number;
  isFull(): boolean;
  isEmpty(): boolean;
  isSpotTypeFull(spotType: SpotType): boolean;
  parkVehicle(vehicleType: VehicleType): boolean;
  getVanOccupiedSpots(): number;
}

class ParkingLot implements IParkingLot {
  private regularSpotsTotal: number;
  private motorcycleSpotsTotal: number;
  private largeSpotsTotal: number;

  private regularSpotsOccupied: number = 0;
  private motorcycleSpotsOccupied: number = 0;
  private largeSpotsOccupied: number = 0;

  constructor(regularSpots: number, motorcycleSpots: number, largeSpots: number) {
    this.regularSpotsTotal = regularSpots;
    this.motorcycleSpotsTotal = motorcycleSpots;
    this.largeSpotsTotal = largeSpots;
  }

  getRemainingSpots(): number {
    return this.getTotalSpots() - this.regularSpotsOccupied - this.motorcycleSpotsOccupied - this.largeSpotsOccupied;
  }

  getTotalSpots(): number {
    return this.regularSpotsTotal + this.motorcycleSpotsTotal + this.largeSpotsTotal;
  }

  isFull(): boolean {
    return this.regularSpotsOccupied === this.regularSpotsTotal && this.motorcycleSpotsOccupied === this.motorcycleSpotsTotal && this.largeSpotsOccupied === this.largeSpotsTotal;
  }

  isEmpty(): boolean {
    return this.regularSpotsOccupied === 0 && this.motorcycleSpotsOccupied === 0 && this.largeSpotsTotal === 0;
  }

  isSpotTypeFull(spotType: SpotType): boolean {
    switch (spotType) {
      case SpotType.Motorcycle:
        return this.motorcycleSpotsOccupied === this.motorcycleSpotsTotal;
      case SpotType.Regular:
        return this.regularSpotsOccupied === this.regularSpotsTotal;
      case SpotType.Large:
        return this.largeSpotsOccupied === this.largeSpotsTotal;
    }
  }

  parkVehicle(vehicleType: VehicleType): boolean {
    switch (vehicleType) {
      case VehicleType.Motorcycle:
        if (this.motorcycleSpotsOccupied < this.motorcycleSpotsTotal) {
          this.motorcycleSpotsOccupied += 1;
          return true;
        } else {
          return false;
        }
      case VehicleType.Car:
        if (this.regularSpotsOccupied < this.regularSpotsTotal) {
          this.regularSpotsOccupied += 1;
          return true;
        } else {
          return false;
        }
      case VehicleType.Van:
        if (this.largeSpotsOccupied < this.largeSpotsTotal) {
          this.largeSpotsOccupied += 1;
          return true;
        } else {
          return false;
        }
    }
  }

  getVanOccupiedSpots(): number {
    return this.largeSpotsOccupied;
  }
}

const parkingLot = new ParkingLot(10, 5, 2);
console.log(`Total Spots: ${parkingLot.getTotalSpots()}`);
console.log(`Remaining Spots: ${parkingLot.getRemainingSpots()}`);
console.log(`Van Occupied Spots: ${parkingLot.getVanOccupiedSpots()}`);
parkingLot.parkVehicle(VehicleType.Van);
console.log(`Van Occupied Spots: ${parkingLot.getVanOccupiedSpots()}`);
console.log(`Remaining Spots: ${parkingLot.getRemainingSpots()}`);
console.log(`Large Spots Full: ${parkingLot.isSpotTypeFull(SpotType.Large)}`);
parkingLot.parkVehicle(VehicleType.Van);
console.log(`Van Occupied Spots: ${parkingLot.getVanOccupiedSpots()}`);
console.log(`Remaining Spots: ${parkingLot.getRemainingSpots()}`);
console.log(`Large Spots Full: ${parkingLot.isSpotTypeFull(SpotType.Large)}`);
