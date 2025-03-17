// Although we use them like lists, arrays in JavaScript are actually objects with some special behaviors:

let arr = ['apple', 'banana', 'orange'];

// Arrays are objects
console.log(typeof arr); // 'object'

// We can check if something is an array
console.log(Array.isArray(arr)); // true

// Arrays can have properties like objects
arr.myProperty = 'example';
console.log(arr.myProperty); // 'example'
// But this is not recommended! Do not use this.