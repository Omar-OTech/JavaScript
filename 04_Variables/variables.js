'use strict';

let age = 25;
console.log(age); // output: 25

age = 26; // We can change the value
console.log(age); // output: 26

let name = 'Alice';
console.log(name); // output: Alice

name = 'Bob'; // We can also change string values
console.log(name); // output: Bob

const PI = 3.14159;
console.log(PI); // output: 3.14159

// PI = 3.14; // This would cause an error: Assignment to a constant variable

const person = {name: 'Charlie', age: 30};
console.log(person); // output: { name: 'Charlie', age: 30 }
person.age = 31; // We can change the properties of a constant object
console.log(person); // output: { name: 'Charlie', age: 31 }
person.name = 'Charlie Brown'; // We can also change the properties of a constant object
console.log(person); // output: { name: 'Charlie Brown', age: 31 }

// person = {name: 'David', age: 32}; // This would cause an error: Assignment to a constant variable