//---------------------------------------------------//
console.log("Functions as Values and Passing Functions");

//Functions in JavaScript can be treated as values, allowing them to be passed as arguments to other functions. This enables flexible and dynamic code execution.

//----------------//
//Passing Functions as Arguments:
console.log("Passing Functions as Arguments");
//----------------//

//The setTimeout function is a built-in function in JavaScript that takes a function as its first parameter. When passing a function as a value, it's important to omit the parentheses to avoid executing the function immediately. The function passed as a value will be executed at a later point in time.

function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 2000);

//In the example above, the sayHello function is passed as an argument to setTimeout without using parentheses. After a delay of 2000 milliseconds, the sayHello function will be executed.

//----------------//
//Defining Functions in Advance or Using Anonymous Functions:
console.log("Defining Functions in Advance or Using Anonymous Functions");
//----------------//

//You can define functions in advance and pass them as values, or you can define anonymous functions directly in the function call.

function greetings(name) {
    console.log("Hello, " + name + "!");
  }
  
setTimeout(function() {greetings("Alice");}, 3000);

//In this example, an anonymous function is defined directly as the argument for setTimeout. After a delay of 3000 milliseconds, the anonymous function is executed, which in turn calls the greet function.

//----------------//
//Passing Functions to Your Own Functions:
console.log("Passing Functions to Your Own Functions");
//----------------//

//Passing functions as values is not limited to built-in functions like setTimeout. You can also pass functions to your own functions. Function parameters can be defined to accept functions as input values.

function executeOperation(operation, a, b) {
    let result = operation(a, b);
    console.log("Result:", result);
  }

function add(x, y) {
    return x + y;
  }

executeOperation(add, 5, 3);

//In this example, the executeOperation function accepts an operation parameter, which is expected to be a function. The add function is passed as an argument to executeOperation, and it performs the addition operation on the provided arguments.


//---------------------------------------------------//