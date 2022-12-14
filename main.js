
/*const createStudent = () => {
const student = {
    name: "Billy",
    level: 4
}

return student
}
 const newStudent = createStudent()
 console.log(newStudent)

const addMathGrade = () => {
return newStudent.math = "B"

}
const mathGrade = addMathGrade(newStudent.math)
console.log(mathGrade)

const addHistoryGrade = () => {
return newStudent.history = "C"
}
const historyGrade = addHistoryGrade(newStudent.history)
console.log(historyGrade)

const addScienceGrade = () => {
return newStudent.science = "A"
}
const scienceGrade = addScienceGrade(newStudent.science)
console.log(scienceGrade)

console.log(newStudent)*/




const buyClay = () => {
const clayObject = {

}
return clayObject
}


const makePottery = (clayObject) => {
    return clayObject.shape = "Bowl"
}
const clayBowl = makePottery

const shapedBowl = makePottery(clayObject.shape)
console.log(shape)

const bisqueFire = (clayObject) => {
return clayObject.readyForGlazing = true
}
const shinyBowl = bisqueFire(clayObject.readyForGlazing)

const glazePottery = (clayObject) => {
if (clayObject.glazed = true) {
return clayObject.glazing = "Midnight Blue"
} else {
    return "Make sure you bisque fire the pottery before you glaze it." 
}
}


const finalFiring = (clayObject, temperature) => {
if (temperature > 1200) {
    return clayObject.cracked = true
} else {
    return clayObject.cracked = false
}
}



/*Define a function named `buyClay`. The function needs no parameters. It should return an object with no properties on it yet.

### Throw a Bowl

Define a function named `makePottery`. You need to pass it the empty object that `buyClay` produced, so it needs a single parameter to capture that value and use it.

The function should perform the task of adding a new property named `shape`, and its value should be "Bowl". The function should then return the object after the new property was added.

#### Reminder: When a function returns a value, you should store that value in a variable

### Bisque Firing

Define a function named `bisqueFire`. You need to give it the object that `makePottery` produced, so it needs a single parameter to capture that value and use it.

The function should perform the task of adding a new property named `readyForGlazing`, and its value should be `true`. The function should then return the object after the new property was added.

### Glaze the Bowl

Define a function named `glazePottery`. You need to give it the object that `bisqueFire` produced, so it needs a single parameter to capture that value and use it.

The function should check if the pottery has been bisque fired already and is ready for glazing. If it has not, you should log the following message to the console.

```
Make sure you bisque fire the pottery before you glaze it.
```

If the pottery has been bisque fired, the function should perform the task of adding a new property named `glazing`, and its value should be "Midnight Blue". The function should then return the object after the new property was added.

### Fire the Bowl

Define a function named `finalFiring`. You need to give it the object that `glazePottery` produced, so it needs a parameter to capture that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.

The function should perform the task of adding a new property named `cracked`, and its value depend on the value of the `temperature` parameter. If that value is higher than 1200, then the value of the `cracked` property must be `true`. If the value is 1200, or less, the value should be `false`.

The function should then return the object after the new property was added.

To test the function, make sure you invoke it and pass two arguments. First test if a high temperate cracks the pottery.

```js
const firedPottery1400 = finalFiring(glazedPottery, 1400)
console.log(firedPottery1400)
```

Also test if the temperature is correct, check that the pottery is not cracked.

```js
const firedPottery1200 = finalFiring(glazedPottery, 1200)
console.log(firedPottery1200)
```

## Optional Challenge

#### Reminder: When a function returns a value, you should store that value in a variable

Start with purchasing some clay, and then pass the object to each function, in order, so that the final `console.log()` should have an object with all properties on it.*/