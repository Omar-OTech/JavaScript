let products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 599, inStock: true },
    { id: 3, name: "Tablet", price: 399, inStock: false },
    { id: 4, name: "Watch", price: 199, inStock: true }
];
// Find first inStock product under $500
let affordableProduct = products
.filter(products => products.inStock)
.find(products => products.price < 500);
console.log(affordableProduct); // { id: 4, name: "Watch", price: 199, inStock: true }

console.log('----------------------------------');

// Check if all in-stock products are under $1000
let allAffordable = products
    .filter(product => product.inStock)
    .every(product => product.price < 1000);
console.log(allAffordable); // true

console.log('----------------------------------');

// Example of well-organized method chaining
let result = products
    .filter(product => product.inStock)        // First, get in-stock items
    .map(product => product.price)             // Then, get their prices
    .some(price => price < 100);               // Finally, check if any are under $100
console.log(result); // true