
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    private sumMass(items: Payload[]): number {
        let totalMassKg: number = 0;
        items.forEach(element => {
            totalMassKg += element.massKg;
        });

        return totalMassKg;
    }

    public currentMassKg(): number {
        let totalCargoAndAstroMass: number = 0;
        let cargoMass: number = this.sumMass(this.cargoItems);
        let astroMass: number = this.sumMass(this.astronauts);
        totalCargoAndAstroMass = cargoMass + astroMass;

        return totalCargoAndAstroMass;
    }

    private canAdd(item: Payload): boolean {

        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }

    public addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    public addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
