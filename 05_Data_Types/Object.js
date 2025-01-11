// Besides these primitive data types, JavaScript has one complex data type: Object. 

let person = {
    name: 'John',
    age: 30,
    isMarried: false
}

console.log(person.name); // Outputs: John
console.log(person.age); // Outputs: 30
console.log(person.isMarried); // Outputs: false
console.log(typeof person); // Outputs: object

// Arrays are also objects
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Outputs: object