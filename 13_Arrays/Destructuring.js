// Array destructuring allows you to extract values from arrays into distinct variables in a single statement.

let colors = ['red', 'green', 'blue'];
// Basic array destructuring
let [first, second, thrid] = colors;
console.log(first); // red
console.log(second); // green
console.log(thrid); // blue

console.log('----------------------------------');

// Skipping elements
let [,, last] = colors;
console.log(last); // blue

console.log('----------------------------------');

let [firstly, ...secondary] = colors;
console.log(firstly); // red
console.log(secondary); // ['green', 'blue']

console.log('----------------------------------');

let [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

console.log('----------------------------------');

// Default values
let [a, b, c, d = 'yellow'] = colors;
console.log(a); // red
console.log(b); // green
console.log(c); // blue
console.log(d); // yellow (default value used)

console.log('----------------------------------');

// Swapping variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1