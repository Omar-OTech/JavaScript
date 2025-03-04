// forEach Method
// The forEach method executes a function for each element in an array. It cannot be stopped (no breaking) and always returns undefined.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index) {
    console.log(`Number at index ${index} is ${number}`);
});

console.log('----------------------------------');

// Using arrow function (shorter syntax)
numbers.forEach((number, index) => {
    console.log(`Number at index ${index} is ${number}`);
});

console.log('----------------------------------');

// map Method
// The map method creates a new array with the results of calling a function for every array element. The original array is not modified.
// Double each number
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(numbers);  // [1, 2, 3, 4, 5]   (original unchanged)
console.log(doubled);  // [2, 4, 6, 8, 10]  (new array)

console.log('----------------------------------');

// Using arrow function (shorter syntax)
let squared = numbers.map(number => number * number);
console.log(numbers);  // [1, 2, 3, 4, 5]   (original unchanged)
console.log(squared);  // [1, 4, 9, 16, 25] (new array)

console.log('----------------------------------');

// filter Method
// The filter method creates a new array with all elements that pass a condition(provided as a function).
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(numbers);    // [1, 2, 3, 4, 5]   (original unchanged)
console.log(evenNumbers);   // [2, 4]  (new array)

console.log('----------------------------------');

// Using arrow function
let bigNumbers = numbers.filter(number => number > 3);
console.log(numbers);    // [1, 2, 3, 4, 5]   (original unchanged)
console.log(bigNumbers);  // [4, 5]  (new array)

console.log('----------------------------------');

// reduce Method
// The reduce method reduces an array to a single value (going left-to-right). It’s very versatile, the example below is just one of the things it can do.
// Sum all numbers
let sum = numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber;
}, 0);
console.log(numbers);    // [1, 2, 3, 4, 5]   (original unchanged)
console.log(sum);        // 15 (sum of all numbers)

console.log('----------------------------------');
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(numbers);    // [1, 2, 3, 4, 5]   (original unchanged)
console.log(product);        // 120 (product of all numbers)

console.log('----------------------------------');

// find Method
// The find method returns the first element that satisfies a testing function:
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstEven = nums.find(num => num % 2 === 0);
console.log(nums);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   (original unchanged)
console.log(firstEven);        // 2 (first even number)

// More practical example
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];
let user = users.find(user => user.id === 2);
console.log(user);   // { id: 2, name: "Jane" }

console.log('----------------------------------');

// findIndex Method
// Similar to find, but returns the index of the first matching element:
let index = numbers.findIndex(num => num > 3);
console.log(index);   // 3 (index of the first number greater than 3)

// If not found, returns -1
let notFound = numbers.findIndex(num => num > 10);
console.log(notFound);   // -1

console.log('----------------------------------');

// some Method
// The some method tests whether at least one element passes a test:
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);   // true (at least one number is even)

console.log('----------------------------------');

// every Method
// The every method tests whether all elements pass a test:
let evenNumber = [2, 4, 6, 8, 10];
let allEven = evenNumber.every(num => num % 2 === 0);
console.log(allEven);   // true (all numbers are even)