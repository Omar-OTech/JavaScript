// Array indices are numbers, but JavaScript will convert non-number indices to strings:
let arr = ['a', 'b', 'c'];
arr['1'] = 'd'; // This is the same as arr[1] = 'd';
console.log(arr); // ['a', 'd', 'c']

// The length property can be modified
let numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
console.log(numbers); // [1, 2, 3]

numbers.length = 5;
console.log(numbers); // [1, 2, 3, , ,] 2 empty spaces at the end!

// Comparing arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2) // false (arrays are objects, compared by reference)
console.log(arr1 === arr1) // true (same reference)

let arr3 = arr1;
console.log(arr1 === arr3) // true (same reference)

// This might look confusing for beginners, but arr1 and arr2 are 2 different objects that are living separately in your computers memory.
// Those values are also 6 separate values that are living in 6 different places in the memory.
// Values might be representing the same numbers but they are not the same.