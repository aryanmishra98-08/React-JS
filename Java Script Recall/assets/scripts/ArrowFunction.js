//---------------------------------------------------//
console.log("Arrow function");

//In JavaScript, an arrow function is a concise syntax for defining functions. It provides a more compact and simplified way to write function expressions. Here's an overview of arrow functions:

//----------------//
//Basic Syntax:
console.log("Basic Syntax");
//----------------//

//Arrow functions are defined using the arrow (=>) syntax. They have a shorter syntax compared to regular function expressions.
// Regular function expression
let regularAdd = function (a, b) {
    return a + b;
  };

let regularAddResult = regularAdd(5, 3);
console.log(regularAddResult);

// Arrow function
let arrowAdd = (a, b) => {
    return a + b;
  };

let arrowAddResult = arrowAdd(5, 3);
console.log(arrowAddResult); 

//----------------//
//Implicit Return:
console.log("Implicit Return");
//----------------//

//Arrow functions can have an implicit return when the function body consists of a single expression. In such cases, the function automatically returns the result of that expression without using the return keyword.

// Regular function expression
let regularMultiply = function (a, b) {
    return a * b;
  };

let regularMultiplyResult = regularMultiply(5, 3);
console.log(regularMultiplyResult);

// Arrow function with implicit return
let arrowMultiply = (a, b) => a * b;
let arrowMultiplyResult = arrowMultiply(5, 3);
console.log(arrowMultiplyResult);


//---------------------------------------------------//