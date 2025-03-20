// Object Destructuring
// Destructuring allows you to extract properties from objects into variables:

let user = {
    name: "John",
    age: 30,
    city: "New York",
};

// Basic destructuring
let { name, age } = user;
console.log(name); // John
console.log(age); // 30

console.log('-------------------');

// Destructuring with different variable names
let { name: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30

console.log('-------------------');

// Destructuring with default values
let { name1, country = "USA" } = user;
console.log(country); // "USA" (default value used)

console.log('-------------------');

// Rest Operator with Objects
// The rest operator allows you to collect remaining properties:

let user2 = {
    name2: "John",
    age2: 29,
    city: "New York",
    country: "USA",
}

let { name2, age2, ...rest } = user2;
console.log(name2); // John
console.log(age2); // 29
console.log(rest); // { city: 'New York', country: 'USA' }
