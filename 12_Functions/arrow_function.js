let greet = (name) => {
    console.log('Hello, ' + name + '!');
}
greet("Alice"); // Outputs: Hello, Alice!

// Arrow functions are a more concise way to write function expressions. They are especially useful for functions that take one or more arguments. Arrow functions are always anonymous and must be assigned to a variable. The syntax for an arrow function is as follows:
let square = x => x * x;
console.log(square(4)); // Outputs: 16