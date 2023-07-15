//---------------------------------------------------//
console.log("Destructuring in JavaScript");

//Destructuring is a modern JavaScript feature that allows you to extract values from arrays and objects in a concise way. It can significantly shorten code and make it more readable by extracting values directly into separate variables.

//----------------//
//Destructuring Arrays:
console.log("Destructuring Arrays");
//----------------//

//Destructuring arrays is done by using square brackets [] on the left side of the assignment operator =. The values are assigned to new variables in the order they appear in the array.

let numbers = [1, 2, 3];
let [q, w, e] = numbers;
console.log(q); // Output: 1
console.log(w); // Output: 2
console.log(e); // Output: 3

//----------------//
//Destructuring Objects:
console.log("Destructuring Objects");
//----------------//

//Destructuring objects is done by using curly braces {} on the left side of the assignment operator =. The values are assigned to new variables based on their property names.

let johnPersonalDetails = { name: 'John', age: 30 };
let { name, age } = johnPersonalDetails;
console.log(name); // Output: John
console.log(age); // Output: 30

//----------------//
//Aliases and Default Values:
console.log("Aliases and Default Values");
//----------------//

//Aliases can be assigned to destructured values by using a colon : followed by the new variable name. Default values can also be provided using the assignment operator =.

let numbersList = [1, 2];
let [r, t, u = 3] = numbersList;
console.log(r); // Output: 1
console.log(t); // Output: 2
console.log(u); // Output: 3

let personalDetails = { name: 'Alice', age: 25 };
let { name: personName, age: personAge } = personalDetails;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 25

//----------------//
//Destructuring in Function Parameters:
console.log("Destructuring in Function Parameters");
//----------------//

//The destructuring syntax can be used in function parameter lists to extract object properties and make them available as locally scoped variables inside the function body.

function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
let alicePersonalDetails = { name: 'Alice', age: 25, DOB: "2/2/2000" };
printPerson(alicePersonalDetails); // Output: Name: Alice, Age: 25

//In the example above, the printPerson function accepts an object as a parameter. The destructuring syntax is used to extract the name and age properties, which are then used inside the function body but it leaves out DOB since that is not being used by the destructuring syntax


//---------------------------------------------------//