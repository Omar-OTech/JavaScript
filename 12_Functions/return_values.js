function add(a, b) {
    return a + b;
}

let result = add(1, 2); // 3
console.log(result);


function gradeScore(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    return "C";
}


console.log(gradeScore(95)); // A
console.log(gradeScore(85)); // B
console.log(gradeScore(75)); // C

// function noReturn() {
//     console.log("This function doesn't return anything");
// }

// let result = noReturn();
// console.log(result); // Outputs: undefined
