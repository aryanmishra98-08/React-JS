//---------------------------------------------------//
console.log("Functions Defined Inside Other Functions");

//In JavaScript, functions can be defined inside other functions. These functions are known as inner functions or nested functions. They are scoped to the outer function and can only be accessed within it.

//----------------//
//Accessing Inner Functions:
//----------------//

//The innerFunction is defined within the body of the outerFunction.
//Inner functions can be executed within the outer function.  
function outerFunction() {
  function innerFunction() {
    console.log("Inner function called");
  }
innerFunction(); // Execute inner function
}

outerFunction(); // Output: Inner function called
//When the outerFunction is executed, it also executes the innerFunction if it is called within the outer function.

//Benefits of Functions Defined Inside Other Functions:

//Modular Code and Encapsulation: Functions defined inside other functions can be useful in the context of modular code and encapsulation. They allow for logical grouping of code within the outer function, keeping related functionality together.
//Scoping: Inner functions have access to variables and parameters of the outer function. This enables data privacy and avoids naming conflicts with variables in the global scope.


//---------------------------------------------------//