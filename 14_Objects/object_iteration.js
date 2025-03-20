// Iterating Over Object Properties
// There are several ways to iterate over object properties:
// Using for...in Loop

let user = {
    name: 'John',
    age: 30,
    city: 'New York',
}

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}


console.log('-------------------');

// Using Object Methods for Iteration

let product = {
    name: "Laptop",
    price: 999,
    inStock: true,
    rating: 4.5,
}

// Using Object.keys()
Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`);
})

console.log('-------------------');

// Using Object.values()
Object.values(product).forEach(value => {
    console.log(value);
})

console.log('-------------------');

// Using Object.entries()
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})