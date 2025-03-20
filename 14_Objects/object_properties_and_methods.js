// JavaScript provides several ways to check if a property exists in an object:

let user = {
    name: "John",
    age: 30,
}

// Using hasOwnProperty method
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("height")); // false

console.log("-------------------");

// Using Object.hasOwn (modern way)
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "height")); // false

console.log("-------------------");

// Using 'in' operator
console.log("name" in user); // true
console.log("height" in user); // false

console.log("-------------------");

// Objects come with several useful built-in methods:
let user2 = {
    name: "John",
    age: 30,
    city: "New York",
  };

// Get all keys
console.log(Object.keys(user2)); // ["name", "age", "city"]

// Get all values
console.log(Object.values(user2)); // ["John", 30, "New York"]

// Get key-value pairs as arrays
console.log(Object.entries(user2)); // [["name", "John"], ["age", 30], ["city", "New York"]]

console.log("-------------------");

// Like arrays, objects can be copied using the spread operator:
let user3 = {
    name: "John",
    age: 30,
  };

let userCopy = {...user3};
userCopy.name = "Alice";

console.log(user3); // { name: 'John', age: 30 }
console.log(userCopy); // { name: 'John', age: 30 }
