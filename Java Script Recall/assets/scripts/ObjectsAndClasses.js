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

class AllRectangleDetail {
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

let rectangleDimensions = new AllRectangleDetail(5, 3);
rectangleDimensions.printDimensions(); // Outputs: Width: 5, Height: 3

//----------------//
//Inheritance:
//----------------//

//Classes support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class.

class Square extends AllRectangleDetail {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  }
  
let square = new Square(4);
console.log(square.calculateArea()); // Outputs: 16
//In this example, we define a Square class that extends the Rectangle class. The Square class inherits the calculateArea method from the Rectangle class and can be used to create square objects.


//---------------------------------------------------//