let age = 25;

switch (true) {
    case age < 13:
        console.log("Child");
        break;
    case age < 20:
        console.log("Teenager");
        break;
    case age < 30:
        console.log("Young adult");
        break;
    default:
        console.log("Adult");
        break;
}