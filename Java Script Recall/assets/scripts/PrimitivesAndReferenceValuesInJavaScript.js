//---------------------------------------------------//
console.log("Primitives and Reference Values in JavaScript");

//----------------//
//Primitives Values:
console.log("Primitives");
//----------------//

//Primitives are basic data types in JavaScript, including strings, numbers, booleans, null, and undefined. Primitives are immutable, meaning their values cannot be directly changed. When a new value is assigned to a variable holding a primitive, a new value is created in memory.
let a = 5;
a = 10; // Assigning a new value to x creates a new value in memory

//----------------//
//Reference Values:
console.log("Reference Values");
//----------------//

//Reference values in JavaScript include objects (including arrays) and functions. When assigning an object to a variable, the variable stores a reference (address) to the object in memory, rather than the actual value of the object itself.
let obj1 = { name: 'John' };
let obj2 = obj1; // obj2 now holds a reference to the same object in memory as obj1

//----------------//
//Mutability and Mutation:
console.log("Mutability and Mutation");
//----------------//

//Mutating an object or array means changing the value at the memory address it references. This can be done using methods or by directly modifying the properties or elements of the object or array.
let person_name = { name: 'John' };
person_name.name = 'Alice'; // Mutating the object by changing the value of the name property

//----------------//
//The const Keyword:
console.log("The const Keyword");
//----------------//

//The const keyword in JavaScript does not prevent mutation of objects and arrays. It only prevents reassignment of the variable to a new value or reference. Therefore, you can still mutate the properties or elements of a const object or array.
const numbers = [1, 2, 3];
numbers.push(4); // Mutating the array by adding an element


//---------------------------------------------------//