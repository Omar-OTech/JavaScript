let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

console.log(user.name); // Outputs: John
console.log(user.age); // Outputs: 30
console.log(user.isAdmin); // Outputs: true

// Empty object
let empty = {};

// Object with different value types
let person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        country: "USA",
    },
}

console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30
console.log(person.hobbies); // Outputs: ["reading", "gaming"]
console.log(person.address.city); // Outputs: New York
console.log(person.address.country); // Outputs: USA

console.log("-------------------");

let user2 = {
    name: "John",
    age: 30,
  };
  
  // Dot notation
  console.log(user2.name); // John
  
  // Bracket notation
  console.log(user2["age"]); // 30
  
  // Dynamic property access
  let key = "name";
  console.log(user2[key]); // John
  
  // Property that doesn't exist
  console.log(user2.height); // undefined

console.log("-------------------");

let user3 = {
    name: "John"
}

console.log(user3.name); // Outputs: John

// Adding a new property
user3.age = 30;
user3["isAdmin"] = true;

console.log(user3.age); // Outputs: 30
console.log(user3.isAdmin); // Outputs: true

// Modifying existing properties
user3.name = "Alice";

console.log(user3.name); // Outputs: Alice
console.log(user3); // Outputs: { name: 'Alice', age: 30, isAdmin: true }
console.log(user3.isAdmin); // Outputs: undefined

console.log(user3); // Outputs: { name: 'Alice', age: 30 }

// Checking if a property exists
console.log("name" in user3); // Outputs: true