// Arrays in JavaScript are mutable, meaning we can change their contents:
let numbers = [1, 2, 3, 4, 5];

// Changing an element
numbers[0] = 10;
console.log(numbers); // [10, 2, 3, 4, 5]

// Adding a new element at a specific index
numbers[5] = 6;
console.log(numbers); // [10, 2, 3, 4, 5, 6]

// Creating a gap in the array (not recommended)
numbers[7] = 8;
console.log(numbers); // [10, 2, 3, 4, 5, 6, , 8] There's no typo there, it looks empty, because it is empty!