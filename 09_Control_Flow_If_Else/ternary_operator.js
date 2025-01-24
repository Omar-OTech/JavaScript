// The ternary operator is a shorthand way of writing an if...else statement. Its syntax is:
// condition ? expressionIfTrue : expressionIfFalse

let age_v = 20;
let canVote = age_v >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);


let age_ = 20;
let canVote_;

if (age_ >= 18) {
    canVote_ = "Yes";
} else {
    canVote_ = "No";
}
console.log("Can Vote:", canVote_);

let age = 15;
let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
console.log("Age category:", category);

// This is equivalent to:

let Age = 15;
let Category;
if (Age < 13) {
    category = "Child";
} else if (Age < 18) {
    Category = "Teenager";
} else {
    Category = "Adult";
}
console.log("Age category:", Category);
