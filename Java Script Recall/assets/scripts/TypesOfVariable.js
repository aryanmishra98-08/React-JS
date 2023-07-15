//---------------------------------------------------//
console.log("Types of variable")

//----------------//
//Undefined:
console.log("Undefined")
//----------------//

//Variables that have been declared but not assigned a value have the value of undefined
let myVariable;
console.log(myVariable); // undefined

//----------------//
//Null:
console.log("Null")
//----------------//

//The null value represents the intentional absence of any object value. It is a special value that denotes the absence of a value.
let myNullVariable = null;
console.log(myNullVariable); // null

//----------------//
//Boolean:
console.log("Boolean")
//----------------//

//The boolean type represents logical values, either true or false. Boolean values are commonly used in conditional statements and comparisons.
let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false

//----------------//
//Number:
console.log("Number")
//----------------//

//The number type represents numeric values, including integers and floating-point numbers.
let myNumber = 10;
let pi = 3.14;
console.log(myNumber); // 10
console.log(pi); // 3.14

//----------------//
//String:
console.log("String")
//----------------//

//The string type represents a sequence of characters enclosed in single or double quotes. Strings are used to store and manipulate textual data.
let myString = 'Hello, world!';
let anotherString = "I'm a string.";
console.log(myString); // Hello, world!
console.log(anotherString); // I'm a string.

//----------------//
//Object:
console.log("Object")
//----------------//

//Objects are complex data types that can store collections of key-value pairs. Objects can represent real-world entities or abstract concepts.
let person = {
    name: 'John',
    age: 25,
    isStudent: true
};
console.log(person.name); // John
console.log(person.age); // 25
console.log(person.isStudent); // true

//----------------//
//Array:
console.log("Array")
//----------------//

//Arrays are special types of objects that store multiple values in a single variable. Array elements are indexed starting from 0.
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]); // 1
console.log(myArray[2]); // 3


//---------------------------------------------------//