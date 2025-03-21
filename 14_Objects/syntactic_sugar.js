// Property Shorthand
// When your variable name matches the property name you want to use:
let name = 'John';
let age = 30;

// Before ES6
let user1 = {
    name: name,
    age: age,
    test: function() {
        console.log(this.name); // John
    }
}


console.log(user1); // { name: 'John', age: 30 }
console.log(user1.name); // John
console.log(user1.age); // 30
user1.test();

console.log("-------------------");

// With ES6
let user2 = {
    name, // same as name: name
    age, // same as age: age
};

console.log('-------------------');

// Method Shorthand
// A shorter way to write methods in objects:

// Before ES6
let user3 = {
    sayHi: function() {
        console.log('Hello!');
    }
}

console.log(user3.sayHi); // [Function: sayHi]


console.log('-------------------');


// With ES6
let user4 = {
        // no need for 'function' keyword
    sayHi() {
        console.log('Hello!');
    }
}

console.log(user4.sayHi); // [Function: sayHi]

console.log('-------------------');

// Computed Property Names
// You can use expressions for property names:
let propName = "age";
let prefix = "user";

let user5 = {
    [propName]: 30,// use variable as property name
    [prefix + "Id"]: 1, // compute property name
    ['get' + propName.toUpperCase()] () {
        // computed method name
        return this[propName];
    }
}

console.log(user5.age); // 30
console.log(user5.userId); // 1
console.log(user5.getAGE()); // 30
