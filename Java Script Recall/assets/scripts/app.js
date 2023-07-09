//---------------------------------------------------//
console.log("Import - Export")

//Import a variable
console.log("Import a variable")
import { projectManager } from "./utils.js";
console.log(projectManager);
//Import default variable
console.log("Import default variable")
import project from "./utils.js"
console.log(project);
//In order to export multiple variables at once we need to create an object of the utils file 
console.log("Import all variables at once")
import * as utils from "./utils.js";
console.log(utils.projectManager)
console.log(utils.default)
console.log(utils.projectTechnology)
//Using 'as' keyword for assigning an alias
console.log("Using 'as' keyword")
import { projectManager as name} from "./utils.js";
console.log(name);
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Types of variable")

//Undefined: Variables that have been declared but not assigned a value have the value of undefined
console.log("Undefined")
let myVariable;
console.log(myVariable); // undefined
//Null: The null value represents the intentional absence of any object value. It is a special value that denotes the absence of a value.
console.log("Null")
let myNullVariable = null;
console.log(myNullVariable); // null
//Boolean: The boolean type represents logical values, either true or false. Boolean values are commonly used in conditional statements and comparisons.
console.log("Boolean")
let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false
//Number: The number type represents numeric values, including integers and floating-point numbers.
console.log("Number")
let myNumber = 10;
let pi = 3.14;
console.log(myNumber); // 10
console.log(pi); // 3.14
//String: The string type represents a sequence of characters enclosed in single or double quotes. Strings are used to store and manipulate textual data.
console.log("String")
let myString = 'Hello, world!';
let anotherString = "I'm a string.";
console.log(myString); // Hello, world!
console.log(anotherString); // I'm a string.
//Object: Objects are complex data types that can store collections of key-value pairs. Objects can represent real-world entities or abstract concepts.
console.log("Object")
let person = {
    name: 'John',
    age: 25,
    isStudent: true
};
console.log(person.name); // John
console.log(person.age); // 25
console.log(person.isStudent); // true
//Array: Arrays are special types of objects that store multiple values in a single variable. Array elements are indexed starting from 0.
console.log("Array")
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]); // 1
console.log(myArray[2]); // 3
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Const keyword")

//const is a keyword used to declare a variable that has a constant value, meaning its value cannot be reassigned or changed once it is assigned. It is short for "constant."
//When you declare a variable using const, you must assign it a value at the time of declaration.
const PI = 3.14159;
console.log(PI); // 3.14159
// Attempting to reassign the value will result in an error
//PI = 3.14; // Error: Assignment to constant variable
//---------------------------------------------------//


//---------------------------------------------------//
console.log("JS Operators")

//JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, and more. Here are some basic examples for each type:

//----------------//
//Arithmetic Operators:
console.log("Arithmetic Operators")
//----------------//

//Addition: +
let sum = 5 + 3; // 8
console.log(sum)
//Subtraction: -
let difference = 10 - 3; // 7
console.log(difference)
//Multiplication: *
let product = 4 * 5; // 20
console.log(product)
//Division: /
let quotient = 15 / 3; // 5
console.log(quotient)
//Modulo (remainder): %
let remainder = 17 % 4; // 1
console.log(remainder)

//----------------//
//Assignment Operators:
console.log("Assignment Operators")
//----------------//

//Assignment: =
let x = 10;
console.log(x)
//Addition assignment: +=
let y = 5;
y += 3; // Equivalent to: y = y + 3; (y becomes 8)
console.log(y)
//Subtraction assignment: -=
let z = 7;
z -= 2; // Equivalent to: z = z - 2; (z becomes 5)
console.log(z)

//----------------//
//Comparison Operators:
console.log("Comparison Operators")
//----------------//

//Equal to: ==
console.log(5 == 5); // true
console.log(5 == '5'); // true (loose equality, converts types if needed)
//Not equal to: !=
console.log(5 != 3); // true
console.log(5 != '5'); // false (loose inequality, converts types if needed)
//Strict equal to: ===
console.log(5 === 5); // true
console.log(5 === '5'); // false (strict equality, no type conversion)
//Strict not equal to: !==
console.log(5 !== 3); // true
console.log(5 !== '5'); // true (strict inequality, no type conversion)

//----------------//
//Logical Operators:
console.log()
//----------------//

//Logical AND: &&
console.log(true && false); // false
//Logical OR: ||
console.log(true || false); // true
//Logical NOT: !
console.log(!true); // false

//----------------//
//Unary Operators:
console.log("Unary Operators")
//----------------//
//Increment: ++
let count = 5;
count++; // Equivalent to: count = count + 1; (count becomes 6)
console.log(count)
//Decrement: --
let num = 8;
num--; // Equivalent to: num = num - 1; (num becomes 7)
console.log(num)

//----------------//
//String Operators:
console.log("String Operators")
//----------------//

//String concatenation: +
let greeting = 'Hello, ' + 'world!'; // "Hello, world!"
console.log(greeting)
//String concatenation assignment: +=
let message = 'Welcome, ';
message += 'John!'; // Equivalent to: message = message + 'John!'; (message becomes "Welcome, John!")
console.log(message)

//These are just a few examples of the different types of operators available in JavaScript. Operators allow you to perform various operations on values and variables, enabling you to manipulate and combine data within your code.
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Functions")

//Functions are reusable blocks of code that perform a specific task. They can be assigned to variables, passed as arguments, and returned from other functions.

//----------------//
//Function Declaration:
//----------------//

//You can declare a function using the function keyword, followed by the function name, a set of parentheses (), and a block of code enclosed in curly braces {}.
function greet() {
    console.log('Hello!');
  }

//----------------//
//  Function Invocation:
//----------------//

//To execute or invoke a function, you use its name followed by a pair of parentheses (). This triggers the execution of the code inside the function's block.
greet(); // Invoking the `greet` function

//----------------//
//Function Parameters:
//----------------//

//Functions can accept input values, known as parameters, which allow you to pass data to the function for processing. Parameters are specified within the parentheses during function declaration.
function greet_person(name) {
    console.log('Hello, ' + name + '!');
  }

//----------------//
//Function Arguments:
//----------------//

//When invoking a function, you can pass values, known as arguments, to the function's parameters. Arguments are passed within the parentheses during function invocation.
greet_person('Alice'); // Passing the argument 'Alice' to the `name` parameter

//----------------//
//Return Statement:
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


//---------------------------------------------------//
console.log("Arrow function");

//In JavaScript, an arrow function is a concise syntax for defining functions. It provides a more compact and simplified way to write function expressions. Here's an overview of arrow functions:

//----------------//
//Basic Syntax:
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


//---------------------------------------------------//
console.log("This Keyword");

//In JavaScript, the this keyword refers to the context within which a function is executed. It is a special keyword that allows you to access and manipulate properties and methods of the object to which a function belongs.
//The value of this is determined dynamically at runtime and depends on how the function is invoked. The behavior of this can vary depending on the function's context, such as whether it is a method of an object, a constructor function, or a standalone function.

//----------------//
//Global Context:
//----------------//

//When this is used in the global scope (outside of any function), it refers to the global object, which is typically window in a web browser or global in Node.js.
console.log(this); // Outputs: Window (in a browser environment)

//----------------//
//Object Methods:
//----------------//

//When a function is invoked as a method of an object, this refers to the object itself. It allows you to access the object's properties and methods within the function.
let personDetail = {
    name: 'John',
    sayHello: function () {
      console.log('Hello, ' + this.name + '!');
    }
  };
  
personDetail.sayHello(); // Outputs: Hello, John!
//In the example above, this.name refers to the name property of the person object.

//----------------//
//Event Handlers:
//----------------//

//When a function is used as an event handler, this typically refers to the element that triggered the event.
//let button = document.querySelector('button');
//button.addEventListener('click', function () {
//  console.log(this); // Outputs: <button> element
//});
//In this case, this inside the event handler refers to the button element that was clicked.

//It's important to note that the value of this can be affected by how a function is invoked. Arrow functions, for example, have lexical scoping for this, meaning they inherit this from their surrounding context rather than having their own binding.
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Objects and Classes");

//In JavaScript, classes are a way to define reusable blueprints for creating objects. They provide a convenient syntax for creating object-oriented code and organizing related data and functionality. Introduced in ECMAScript 2015 (ES6), classes simplify the process of creating objects and implementing inheritance. Here's an overview of classes in JavaScript:

//----------------//
//Class Declaration and Constructor Method:
//----------------//

//You can declare a class using the class keyword, followed by the name of the class, and a set of curly braces {} containing the class body.
//The constructor method is a special method that gets executed when a new instance of a class is created using the new keyword. It allows you to initialize the object's properties.
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
let rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea()); // Outputs: 15

//----------------//
//Methods:
//----------------//

//Class methods are functions defined within the class that can be accessed and invoked on instances of the class.

class AllRectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    printDimensions() {
      console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
  }

let rectangleAll = new AllRectangle(5, 3);
rectangleAll.printDimensions(); // Outputs: Width: 5, Height: 3

//----------------//
//Inheritance:
//----------------//

//Classes support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class.

class Square extends AllRectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  }
  
let square = new Square(4);
console.log(square.calculateArea()); // Outputs: 16
//In this example, we define a Square class that extends the Rectangle class. The Square class inherits the calculateArea method from the Rectangle class and can be used to create square objects.
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Arrays in JavaScript");

//Arrays are a special kind of objects that allow you to create a list of values. They are created using square brackets [ ] and store values in a specific order. Arrays can contain any kind of values, including other arrays, objects, numbers, and strings.

//----------------//
//Array Creation:
//----------------//

let myEmptyArray = []; // An empty array
let numbers = [1, 2, 3, 4, 5]; // An array with number values
let fruits = ['apple', 'banana', 'orange']; // An array with string values
let mixedArray = [1, 'two', { name: 'John' }]; // An array with mixed values

//----------------//
//Accessing Array Values:
//----------------//

//Array values can be accessed using their index, starting from zero.
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

//----------------//
//Array Utility Methods:
//----------------//

//JavaScript provides built-in utility methods for arrays, which can be accessed using dot notation.

//The push method adds a new item to the end of an array.

let fruitsList = ['apple', 'banana', 'orange'];
fruitsList.push('grape');
console.log(fruitsList); // Output: ['apple', 'banana', 'orange', 'grape']

//The findIndex method returns the index of a value in an array based on a specified condition.

let numbersList = [10, 20, 30, 40, 50];
let index = numbersList.findIndex(num => num === 30);
console.log(index); // Output: 2

//The map method transforms every item in an array to another item using a provided function. It returns a new array with the transformed values, while the original array remains unchanged.

let numbers1To5 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers1To5.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//The map method can be used to transform items into different data types, including objects. Objects in JavaScript can be created using curly braces { } and wrapped in parentheses when used in the map method.

let names = ['John', 'Alice', 'Bob'];
let personObjects = names.map(name => ({ name: name }));
console.log(personObjects); // Output: [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }]

//Arrays in JavaScript offer a powerful way to store and manipulate collections of data. You can leverage the array utility methods to perform various operations and transformations on array elements.
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Destructuring in JavaScript");

//Destructuring is a modern JavaScript feature that allows you to extract values from arrays and objects in a concise way. It can significantly shorten code and make it more readable by extracting values directly into separate variables.

//----------------//
//Destructuring Arrays:
//----------------//

//Destructuring arrays is done by using square brackets [] on the left side of the assignment operator =. The values are assigned to new variables in the order they appear in the array.

let numbers1To3 = [1, 2, 3];
let [q, w, e] = numbers1To3;
console.log(q); // Output: 1
console.log(w); // Output: 2
console.log(e); // Output: 3

//----------------//
//Destructuring Objects:
//----------------//

//Destructuring objects is done by using curly braces {} on the left side of the assignment operator =. The values are assigned to new variables based on their property names.

let johnDetails = { name: 'John', age: 30 };
let { johnname, age } = johnDetails;
console.log(johnname); // Output: John
console.log(age); // Output: 30

//----------------//
//Aliases and Default Values:
//----------------//

//Aliases can be assigned to destructured values by using a colon : followed by the new variable name. Default values can also be provided using the assignment operator =.

let numbers1to2 = [1, 2];
let [r, t, u = 3] = numbers1to2;
console.log(r); // Output: 1
console.log(t); // Output: 2
console.log(u); // Output: 3

let aliceDetails = { name: 'Alice', age: 25 };
let { name: personName, age: personAge } = aliceDetails;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 25

//----------------//
//Destructuring in Function Parameters:
//----------------//

//The destructuring syntax can be used in function parameter lists to extract object properties and make them available as locally scoped variables inside the function body.

function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
let alicePersonalDetails = { name: 'Alice', age: 25, DOB: "2/2/2000" };
printPerson(alicePersonalDetails); // Output: Name: Alice, Age: 25

//In the example above, the printPerson function accepts an object as a parameter. The destructuring syntax is used to extract the name and age properties, which are then used inside the function body but it leaves out DOB since that is not being used by the destructuring syntax
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Spread Operator in JavaScript");

//The spread operator is a special operator in JavaScript that is used with arrays and objects. It allows you to spread the elements of an array or the key-value pairs of an object into another array or object.

//----------------//
//Spread Operator with Arrays:
//----------------//

//When used with arrays, the spread operator consists of three dots ... followed by the name of the array to be spread. It pulls out all the elements of an array and adds them as separate values to a new array.

let numbers1to3 = [1, 2, 3];
let newNumbers = [...numbers1to3, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

//----------------//
//Spread Operator with Objects:
//----------------//

//When used with objects, the spread operator also consists of three dots ... followed by the name of the object to be spread. It pulls out all the key-value pairs of an object and adds them as key-value pairs to a new object.

let personJohn = { name: 'John', age: 30 };
let newPerson = { ...personJohn, city: 'New York' };
console.log(newPerson); // Output: { name: 'John', age: 30, city: 'New York' }

//----------------//
//Merging Arrays and Objects:
//----------------//

//The spread operator can be used to merge arrays together, creating a new array with all the values, or merge objects together, creating a new object with all the properties.

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers); // Output: [1, 2, 3, 4, 5, 6]

let person1 = { name: 'John', age: 30 };
let person2 = { city: 'New York', profession: 'Engineer' };
let mergedPerson = { ...person1, ...person2 };
console.log(mergedPerson); // Output: { name: 'John', age: 30, city: 'New York', profession: 'Engineer' }
//---------------------------------------------------//


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

let o = 5;
let p = "5";

if (o === p) {
  console.log("x and y are strictly equal.");
} else {
  console.log("x and y are not strictly equal.");
}

//----------------//
//For...of Loop:
//----------------//

//The for loop is a control structure used to execute code repeatedly. The for...of loop syntax is used to iterate over an array. The loop executes the code block for each element in the array.

let goodFruitsList = ["apple", "banana", "orange"];

for (let fruit of goodFruitsList) {
  console.log(fruit);
}
//---------------------------------------------------//


//---------------------------------------------------//
console.log("Functions as Values and Passing Functions");

//Functions in JavaScript can be treated as values, allowing them to be passed as arguments to other functions. This enables flexible and dynamic code execution.

//----------------//
//Passing Functions as Arguments:
//----------------//

//The setTimeout function is a built-in function in JavaScript that takes a function as its first parameter. When passing a function as a value, it's important to omit the parentheses to avoid executing the function immediately. The function passed as a value will be executed at a later point in time.

function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 2000);

//In the example above, the sayHello function is passed as an argument to setTimeout without using parentheses. After a delay of 2000 milliseconds, the sayHello function will be executed.

//----------------//
//Defining Functions in Advance or Using Anonymous Functions:
//----------------//

//You can define functions in advance and pass them as values, or you can define anonymous functions directly in the function call.

function greetings(name) {
    console.log("Hello, " + name + "!");
  }
  
setTimeout(function() {greetings("Alice");}, 3000);

//In this example, an anonymous function is defined directly as the argument for setTimeout. After a delay of 3000 milliseconds, the anonymous function is executed, which in turn calls the greet function.

//----------------//
//Passing Functions to Your Own Functions:
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


//---------------------------------------------------//
console.log("Primitives and Reference Values in JavaScript");

//----------------//
//Primitives:
//----------------//

//Primitives are basic data types in JavaScript, including strings, numbers, booleans, null, and undefined. Primitives are immutable, meaning their values cannot be directly changed. When a new value is assigned to a variable holding a primitive, a new value is created in memory.
let c = 5;
c = 10; // Assigning a new value to x creates a new value in memory

//----------------//
//Reference Values:
//----------------//

//Reference values in JavaScript include objects (including arrays) and functions. When assigning an object to a variable, the variable stores a reference (address) to the object in memory, rather than the actual value of the object itself.
let obj1 = { name: 'John' };
let obj2 = obj1; // obj2 now holds a reference to the same object in memory as obj1

//----------------//
//Mutability and Mutation:
//----------------//

//Mutating an object or array means changing the value at the memory address it references. This can be done using methods or by directly modifying the properties or elements of the object or array.
let person_name = { name: 'John' };
person_name.name = 'Alice'; // Mutating the object by changing the value of the name property

//----------------//
//The const Keyword:
//----------------//

//The const keyword in JavaScript does not prevent mutation of objects and arrays. It only prevents reassignment of the variable to a new value or reference. Therefore, you can still mutate the properties or elements of a const object or array.
const numbers123 = [1, 2, 3];
numbers123.push(4); // Mutating the array by adding an element