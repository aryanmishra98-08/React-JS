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