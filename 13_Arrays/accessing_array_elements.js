// Array elements are accessed using their index (position). Remember that array indices start at 0:
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'
console.log(fruits[3]); // undefined (index doesn't exist)

// Using negative indices doesn't work like in some other languages
console.log(fruits[-1]); // undefined

// Last element can be accessed using length - 1
console.log(fruits[fruits.length - 1]); // 'orange' (last element)
