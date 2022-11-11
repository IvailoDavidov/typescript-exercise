# Studio Requirements


## Requirements

1. Create classes for `Astronaut`, `Cargo`, and `Rocket`. (Details below).
* All classes should be defined in their own files.
2. Use the new classes to run the simulation in the `index.ts` file.

In the starter code, you will notice that an interface named `Payload` has been declared. This interface ensures that any class that implements it will have a `massKg` property.

## Classes

1. Create three new files -- `Astronaut.ts`, `Cargo.ts`, and `Rocket.ts`.

2. Define each class (Astronaut, Cargo, Rocket) in the corresponding file. Each class should be exported.

3. As needed, the classes can be imported.

### Astronaut Class

1. Defined in `Astronaut.ts`
2. Implements the Payload interface
3. Properties
* `massKg` should be a number.
* `name` should be a string.
4. Constructor
* Parameter `massKg` should be a number.
* Parameter `name` should be string.
* Sets value of `this.massKg` and `this.name`.

### Cargo Class

1. Defined in `Cargo.ts`
2. Implements the Payload interface
3. Properties
* `massKg` should be a number.
* `material` should be a string.
4. Constructor
* Parameter `massKg` should be a number.
* Parameter `material` should be a string.
* Sets value of `this.massKg` and `this.material`

### Rocket Class

1. Defined in `Rocket.ts`.
2. Properties:
* `name` should be a string.
* `totalCapacityKg` should be a number.
* `cargoItems` should be an array of `Cargo` objects.
  * Should be initialized to an empty array
* `astronauts` should be an array of `Astronaut` objects.
  * Should be initialized to an empty array
3. Constructor:
        Parameter `name` should be a string.
        Parameter `totalCapacityKg` should be a number.
        Sets value of `this.name` and `this.totalCapacityKg`
4. Methods:
* `sumMass( items: Payload[] ): number`
  * Returns the sum of all `items` using each item's `massKg` property
* `currentMassKg(): number`
  * Uses `this.sumMass` to return the combined mass of `this.astronauts` and `this.cargoItems`
* `canAdd(item: Payload): boolean`
  * Returns `true` if `this.currentMassKg() + item.massKg <= this.totalCapacityKg`
* `addCargo(cargo: Cargo): boolean`
  * Uses `this.canAdd()` to see if another item can be added.
  * If `true`, adds cargo to `this.cargoItems` and returns `true`.
  * If `false`, returns `false`.
* `addAstronaut(astronaut: Astronaut): boolean`
  * Uses `this.canAdd()` to see if another astronaut can be added.
  * If `true`, adds `astronaut` to `this.astronauts` and returns `true`.
  * If `false`, returns `false`.

## Simulation in index.ts

Verify that the code index.ts can be compiled and executed without errors.

## Compile and Run index.ts

**Expected output:**


> Mae: On board
>
> Sally: On board
> 
> Charles: On board
> 
> Satellite: Loaded
> 
> Space Probe: Loaded
> 
> Water: Loaded
> 
> Food: Loaded
> 
> Tesla Roadster: Not loaded
> 
> Final cargo and astronaut mass: 5656.78 kg.