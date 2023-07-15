//---------------------------------------------------//
console.log("Conditional Statements and Loops in JavaScript");

//----------------//
//If Statement and Conditional Branching:
//----------------//

//The if statement is used to create conditional statements in JavaScript. The code inside the if statement is executed only if the specified condition is true. The else statement is used to define the code that should be executed if the condition in the if statement is not true. The else if statement is used to check for additional conditions if the previous conditions were not met. Multiple else if statements can be added, but only one else branch is allowed.

let ageOfMe = 20;

if (ageOfMe >= 18) {
  console.log("You are an adult.");
} else if (ageOfMe >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

//----------------//
//Prompt Function:
//----------------//

//The prompt function can be used to prompt the user for input in the browser. It displays a dialog box that allows the user to enter a value.

//let yourName = prompt("What is your name?");
//console.log("Hello, " + yourName + "!");

//----------------//
//Strict Equality Comparison:
//----------------//

//The triple equals operator (===) is used for strict equality comparison. It compares both the value and the data type of the operands.

let x = 5;
let y = "5";

if (x === y) {
  console.log("x and y are strictly equal.");
} else {
  console.log("x and y are not strictly equal.");
}

//----------------//
//For...of Loop:
//----------------//

//The for loop is a control structure used to execute code repeatedly. The for...of loop syntax is used to iterate over an array. The loop executes the code block for each element in the array.

let FruitsList = ["apple", "banana", "orange"];

for (let fruit of FruitsList) {
  console.log(fruit);
}


//---------------------------------------------------//