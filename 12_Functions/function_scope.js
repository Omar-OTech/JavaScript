let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // I'm global
    console.log(localVar);   // I'm local
}

scopeExample();
console.log(globalVar);  // I'm global
console.log(localVar);   // Throws an error: localVar is not defined
