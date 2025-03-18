let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Rest must be the last element
// let [...allButLast, last] = numbers; // This will cause an error

console.log('----------------------------------');

// Combining arrays using spread operator
let moreNumber = [...numbers, 6, 7, 8];
console.log(moreNumber); // [1, 2, 3, 6, 7, 8]

console.log('----------------------------------');

// Creating a copy of an array
let numbersCopy = [...numbers];
console.log(numbersCopy); // [1, 2, 3, 4, 5]

console.log('----------------------------------');

let copy = [...numbers, ...numbers];
console.log(copy); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

console.log('----------------------------------');

let copies = [...numbers, ...moreNumber];
console.log(copies); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]