// Using Number() function
console.log(Number("123")); // Outputs: 123
console.log(Number("")); // Outputs: 0
console.log(Number(" ")); // Outputs: 0
console.log(Number(true)); // Outputs: 1
console.log(Number(false)); // Outputs: 0
console.log(Number(null)); // Outputs: 0
console.log(Number(undefined)); // Outputs: NaN
console.log(Number("Hello")); // Outputs: NaN

// Using parseInt() and parseFloat() functions
console.log(parseInt("123")); // Outputs: 123
console.log(parseInt("123.45")); // Outputs: 123
console.log(parseFloat("3.14")); // Outputs: 123.45

// Unary plus operator
console.log(+"123"); // Outputs: 123
console.log(+""); // Outputs: 0
console.log(+true); // Outputs: 1