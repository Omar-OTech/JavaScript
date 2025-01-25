let grade = "B";
let feedback;

switch (grade) {
    case "A":
    case "B":
        feedback = "Good job!";
        break;
    case "C":
        feedback = "You can do better.";
        break;
    case "D":
    case "F":
        feedback = "You need to study more.";
        break;
    default:
        feedback = "Invalid grade";
    
}

console.log(feedback); // Outputs: Good job!