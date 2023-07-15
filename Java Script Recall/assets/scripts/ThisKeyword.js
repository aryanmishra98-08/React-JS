//---------------------------------------------------//
console.log("This Keyword");

//In JavaScript, the this keyword refers to the context within which a function is executed. It is a special keyword that allows you to access and manipulate properties and methods of the object to which a function belongs.
//The value of this is determined dynamically at runtime and depends on how the function is invoked. The behavior of this can vary depending on the function's context, such as whether it is a method of an object, a constructor function, or a standalone function.

//----------------//
//Global Context:
console.log("Global Context");
//----------------//

//When this is used in the global scope (outside of any function), it refers to the global object, which is typically window in a web browser or global in Node.js.
console.log(this); // Outputs: Window (in a browser environment)

//----------------//
//Object Methods:
console.log("Object Methods");
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
//console.log("Event Handlers");
//----------------//

//When a function is used as an event handler, this typically refers to the element that triggered the event.
//let button = document.querySelector('button');
//button.addEventListener('click', function () {
//  console.log(this); // Outputs: <button> element
//});
//In this case, this inside the event handler refers to the button element that was clicked.

//It's important to note that the value of this can be affected by how a function is invoked. Arrow functions, for example, have lexical scoping for this, meaning they inherit this from their surrounding context rather than having their own binding.


//---------------------------------------------------//