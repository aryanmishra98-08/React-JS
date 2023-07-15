//---------------------------------------------------//
console.log("Arrays in JavaScript");

//Arrays are a special kind of objects that allow you to create a list of values. They are created using square brackets [ ] and store values in a specific order. Arrays can contain any kind of values, including other arrays, objects, numbers, and strings.

//----------------//
//Array Creation:
console.log("Arrays Creation");
//----------------//

let myEmptyArray = []; // An empty array
let numbers = [1, 2, 3, 4, 5]; // An array with number values
let fruits = ['apple', 'banana', 'orange']; // An array with string values
let mixedArray = [1, 'two', { name: 'John' }]; // An array with mixed values

//----------------//
//Accessing Array Values:
console.log("Accessing Array Values");
//----------------//

//Array values can be accessed using their index, starting from zero.
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

//----------------//
//Array Utility Methods:
console.log("Array Utility Methods");
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