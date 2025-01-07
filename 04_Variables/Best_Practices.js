// Use descriptive names: Your variable names should explain what the variable represents.
// Bad
// let d = new Date().getTime();
// let x = userList.find(u => u.id === 123);

// Good
let currentTime = new Date().getTime();
console.log(currentTime);
let userList = [{id: 123, name: 'Alice'}, {id: 123, name: 'Bob'}];
let targetUser = userList.find(user => user.id === 123 && user.name === 'Bob');
console.log(targetUser);

// Be consistent in your naming conventions:
// Inconsistent
// let user_name = "Alice";
// let userAge = 30;
// let UserEmail = "alice@example.com";

// Consistent
let userName = "Alice";
let userAge = 30;
let userEmail = "alice@example.com";

// Declare variables at the top of their scope:
function calculateCircleProperties(radius) {
    let diameter, circumference, area;
    diameter = radius * 2;
    circumference = 2 * Math.PI * radius;
    area = Math.PI * radius * radius;
    return {diameter, circumference, area};
}
console.log(calculateCircleProperties(5));

// Use const by default, and only use let when you know the value will change:
const PI = 3.14159;
const BASE_URL = '<https://api.example.com>';

let currentUser = 'Alice';
let score = 0;

function updateScore(newScore) {
    score = newScore;
    console.log(score);
}

updateScore(100);