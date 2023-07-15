//---------------------------------------------------//
console.log("Spread Operator in JavaScript");

//The spread operator is a special operator in JavaScript that is used with arrays and objects. It allows you to spread the elements of an array or the key-value pairs of an object into another array or object.

//----------------//
//Spread Operator with Arrays:
console.log("Spread Operator with Arrays");
//----------------//

//When used with arrays, the spread operator consists of three dots ... followed by the name of the array to be spread. It pulls out all the elements of an array and adds them as separate values to a new array.

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

//----------------//
//Spread Operator with Objects:
console.log("Spread Operator with Objects");
//----------------//

//When used with objects, the spread operator also consists of three dots ... followed by the name of the object to be spread. It pulls out all the key-value pairs of an object and adds them as key-value pairs to a new object.

let johnPersonalDetails = { name: 'John', age: 30 };
let newJohnPersonalDetails = { ...johnPersonalDetails, city: 'New York' };
console.log(newJohnPersonalDetails); // Output: { name: 'John', age: 30, city: 'New York' }

//----------------//
//Merging Arrays and Objects:
console.log("Merging Arrays and Objects");
//----------------//

//The spread operator can be used to merge arrays together, creating a new array with all the values, or merge objects together, creating a new object with all the properties.

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers); // Output: [1, 2, 3, 4, 5, 6]

let johnPersonalDetails1 = { name: 'John', age: 30 };
let johnPersonalDetails2 = { city: 'New York', profession: 'Engineer' };
let mergedPerson = { ...johnPersonalDetails1, ...johnPersonalDetails2 };
console.log(mergedPerson); // Output: { name: 'John', age: 30, city: 'New York', profession: 'Engineer' }


//---------------------------------------------------//