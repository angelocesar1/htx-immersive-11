// Variables
let name = "John"; // Use This One
const pi = 3.142; // Assign Only Once

// Functions
function greet(full_name, age) {
  console.log(`Hello ${full_name} you are ${age} years old!`);
}

greet("Angelo Dos Santos", 21);

function add(a, b) {
  return a + b;
  console.log("This does not matter!");
}

console.log(add(4, 5));

let result = add(3, 4);
console.log(result);

// Array
let numbers = [3, 4, 5, 6, 12];

numbers[0];
numbers[1];
numbers[2];

console.log("Printing the contents of the numbers array");
// for loop
// for (start index; condition for ending; how to increment)
for (let index = 0; index < numbers.length; index++) {
  console.log(index);
  console.log(numbers[index]);
}

// while loop
let count = 0;
while (count < 10) {
  count++;
  // Break keyword is used to break/end the loop
}

// conditions
let age = 30;

if (age > 20) {
  console.log("Age is greater than 20");
} else {
  console.log("Age is less than 20");
}

//else if
if (age > 20) {
} else if (age < 10) {
} else {
}

// && means and
if (age > 20 && name == "john") {
}

// || is or operator
if (age > 20 || name == "john") {
}

// classes and objects

// In JS there are no classes behind the scenes they are just functions
function Car() {
  this.make = "Honda";
  this.model = "Accord";
}

let car = new Car();
console.log(car);

let car1 = new Object();
car1.drive = function() {
  console.log("car driving");
};

car1.drive();
