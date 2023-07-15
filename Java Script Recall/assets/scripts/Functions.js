//---------------------------------------------------//
console.log("Functions");

//Functions are reusable blocks of code that perform a specific task. They can be assigned to variables, passed as arguments, and returned from other functions.

//----------------//
//Function Declaration:
console.log("Functions Declaration");
//----------------//

//You can declare a function using the function keyword, followed by the function name, a set of parentheses (), and a block of code enclosed in curly braces {}.
function greet() {
    console.log('Hello!');
  }

//----------------//
//  Function Invocation:
console.log("Functions Invocation");
//----------------//

//To execute or invoke a function, you use its name followed by a pair of parentheses (). This triggers the execution of the code inside the function's block.
greet(); // Invoking the `greet` function

//----------------//
//Function Parameters:
console.log("Functions Parameters");
//----------------//

//Functions can accept input values, known as parameters, which allow you to pass data to the function for processing. Parameters are specified within the parentheses during function declaration.
function greet_person(name) {
    console.log('Hello, ' + name + '!');
  }

//----------------//
//Function Arguments:
console.log("Functions Arguments");
//----------------//

//When invoking a function, you can pass values, known as arguments, to the function's parameters. Arguments are passed within the parentheses during function invocation.
greet_person('Alice'); // Passing the argument 'Alice' to the `name` parameter

//----------------//
//Return Statement:
console.log("Return Statement");
//----------------//

//Functions can also return a value using the return statement. The return statement allows a function to compute a value and provide it as the result of the function's execution.
function multiply(a, b=1) { //a=1 default value in case no value is provided
    return a * b;
  }

let result = multiply(5, 3);
console.log(result); // 15

let resultWithDefaultValue = multiply(5);
console.log(resultWithDefaultValue); // 5


//---------------------------------------------------//