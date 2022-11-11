# Exercise Requirements

## Part 1 - Declare Variables With Type

In the space indicated, declare and assign a variable for each of the following:

Variable Name|Type|Value
---|---|---
spacecraftName|string|'Determination'
speedMph|number|17500
kilometersToMars|number|225000000
kilometersToTheMoon|number|384400
milesPerKilometer|number|0.621

## Part 2 - Print Days to Mars

Declare and assign these variables. Remember that variable declarations in TypeScript include the type!
* `milesToMars` is a number with the value of `kilometersToMars * milesPerKilometer`.
* `hoursToMars` is a number with the value of `milesToMars / speedMph`.
* `daysToMars` is a number with the value of `hoursToMars / 24`.

Write a console.log statement that prints out the days to Mars. Use template literal syntax and the variables `${spacecraftName}` and `${daysToMars}`.

**Output:**
> Determination would take 332.67857142857144 days to get to Mars.

## Part 3 - Create a Function

1. In the space indicated, define a function that calculates the days it would take to travel to a location.
* Function name `getDaysToLocation`
* Parameter `kilometersAway` must be a number.
* Returns the number of days to a location.
* Use the same calculations as in Part 2.1.
The function should declare that it returns a number.

2. Print out the days to Mars.
* Move the output statement from part 2 below your new function.
* Refactor the template literal to use `${getDaysToLocation(kilometersToMars)}` and `${spacecraftName}`.

3. Print out the days to the Moon.
* Add another output statement and template literal using `${getDaysToLocation(kilometersToTheMoon)}` and `${spacecraftName}`.

**Output:**
> Determination would take 332.67857142857144 days to get to Mars.

> Determination would take 0.5683628571428571 days to get to the Moon.

## Part 4 - Create a Spacecraft Class

Organize `getDaysToLocation` and the variables for name, speed, and miles per kilometer by moving them into a class.

1. Define a class named Spacecraft.
* Properties
  * `milesPerKilometer: number = 0.621;`
  * `name: string;`
  * `speedMph: number;`
* Constructor
  * `name` is the first parameter and it MUST be a string.
  * `speedMph` is the second parameter and it MUST be a number.

2. Move the function `getDaysToLocation`, defined in Part 3, into the `Spacecraft` class.
* Update the function to reference the class properties `this.milesPerKilometer` and `this.speedMph`.

3. Create an instance of the `Spacecraft` class.
```javascript
let spaceShuttle = new Spacecraft('Determination', 17500);
```

4. Print out the days to Mars.
* Use template literals, `${spaceShuttle.getDaysToLocation(kilometersToMars)}` and `${spaceShuttle.name}`.

5. Print out the days to the Moon.
* Use template literals, `${spaceShuttle.getDaysToLocation(kilometersToTheMoon)}` and `${spaceShuttle.name}`.

**Output:**
> Determination would take 332.67857142857144 days to get to Mars.

> Determination would take 0.5683628571428571 days to get to the Moon.

## Part 5 - Export and Import the SpaceLocation Class

1. Add the function `printDaysToLocation` to the `Spacecraft` class.
* Notice that it takes a parameter of type SpaceLocation.

```javascript
printDaysToLocation(location: SpaceLocation) {
   console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
}
```

2. Import SpaceLocation into parts1-5.ts.

3. Replace the earlier console.log statements by using the class instance to print out the days to Mars and the Moon.

```javascript
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
```

**Output:**
> Determination would take 332.67857142857144 days to get to Mars.

> Determination would take 0.5683628571428571 days to get to the Moon.

