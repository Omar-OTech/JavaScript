let fruit = 'apple';
let response;

switch (fruit) {
    case  'banana':
        response = 'Banana is good!';
        break;
    case "apple":
        response = "How do you like them apples?";
        // No break here!
    case "orange":
        response += " Orange you glad I didn't say banana again?";
        break;
    default:
        response = "I'm not familiar with that fruit.";
}

console.log(response); // Outputs: How do you like them apples? Orange you glad I didn't say banana again?