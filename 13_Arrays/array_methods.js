let fruits = ['apple', 'banana'];

// push() adds elements to the end
let newLength = fruits.push('orange');

console.log(fruits);
console.log(newLength);

// You can push multiple elements at once
fruits.push('grape', 'kiwi');
console.log(fruits);

// pop() removes and returns the last element
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);



let numbers = [2, 3, 4];

// unshift() adds elements to the beginning
let newLength2 = numbers.unshift(1);
console.log(numbers);    // [1, 2, 3, 4]
console.log(newLength2);  // 4 (unshift returns the new array length)

// You can unshift multiple elements at once
numbers.unshift(-1, 0);
console.log(numbers);  // [-1, 0, 1, 2, 3, 4]

// shift() removes and returns the first element
let firstNumber = numbers.shift();
console.log(firstNumber); // -1
console.log(numbers);     // [0, 1, 2, 3, 4]

// Implementing a Stack (Last-In-First-Out)
let stack = [];

// Adding items (pushing)
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack); // [1, 2, 3]

// Removing items (popping)
let lastItem = stack.pop();
console.log(lastItem); // 3
console.log(stack);    // [1, 2]

// Implementing a Queue (First-In-First-Out)
let queue = [];
// Adding items to the queue
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue); // [1, 2, 3]
// Removing items from the queue
let firstItem = queue.shift();
console.log(firstItem); // 1
console.log(queue);     // [2, 3]

// Forgetting that these methods modify the original array
let numbers2 = [1, 2, 3];
numbers2.push(4);
// If you didn't want to modify the original array, you should have made a copy first
let newNumbers = [...numbers2];

// Not checking for empty arrays
let empty = [];
let item = empty.pop(); // Returns undefined, but might cause issues if you don't check
if (empty.length > 0) {
    item = empty.pop(); // Safer approach
}

let array1 = [];
let array2 = [];
// Using shift/unshift in performance-critical code
// This could be slow with large arrays
for (let i = 0; i < 1000; i++) {
    array1.unshift(i);
}

// Better to push and reverse if needed
for (let i = 0; i < 1000; i++) {
    array2.push(i);
}
array2.reverse();

console.log(array1);
console.log(array2);

